import React, {useState, useEffect} from 'react'
import App from 'next/app'
import '../styles/style.css'
import '../styles/version1.css';
import jwtDecode from 'jwt-decode';
import Router from 'next/router';

import obtenerUsuarios from '../context/user/apis'

// CONTEXT
import PernatContext from '../context/user/PernatContext'


const MyApp = props => {

  // const { sessionStorage, localStorage }  = window; 

    const [accessToken, setAccessToken] = useState('')
    const [id, setId] = useState('')
    const [usuario, setUsuario] = useState('')


    useEffect(() => {
        setAccessToken(localStorage.getItem('tasaToken'))
        setId(localStorage.getItem('tasaID'))
        setUsuario(localStorage.getItem('tasaUsuario'))
        // console.log(usuario)
      }, [usuario]);

          
     //****************************************************************************************************************** */
//Funcion para acceder al token almacenando en el localstorage y compararlo
//****************************************************************************************************************** */
const getAccessToken = () => {
    //Recuperamos el token del localstorage
    // const accessToken = localStorage.getItem("tasaToken");
    // const id = localStorage.getItem("tasaID");
    // const usuario = localStorage.getItem("tasaUsuario");
    //Valimos el token que sea venga como campo y no se nulo
    //Valimos el id que sea venga como campo y no se nulo
    //Valimos el usuario que sea venga como campo y no se nulo
    if (!accessToken || accessToken == null && 
        // !id || id == null &&
         !usuario || usuario == null) {
      return false
    }
    //Decoficando el token
    const metaToken = jwtDecode(accessToken);
    // console.log("token", metaToken);
    //Validamos si el token esta expirado o  no , y tambien comparamos el id  , usuario del token con id del localstorage
    if (tokenExpira(accessToken, metaToken) 
    // || metaToken.data.usuario.id !== id 
    || metaToken.usuario.nombre !== usuario
    ) {
      return false;
    } else {
      //SI es true enviamos al home
      return true;
    }
  }
  
  //****************************************************************************************************************** */
  //Funcion para validar la fecha de expiracion , enviandole el token
  //****************************************************************************************************************** */
  
  const tokenExpira = (accessToken, metaToken) => {
    const seconds = 60;
    //Destructuramos el objeto metatoken
    const { exp } = metaToken
    // console.log("exp", exp);
    const now = (Date.now() + seconds) / 1000;
    // console.log("now", now);
    //Realizamos la comparacion si la fecha actual es menor a la fecha expiracion
    return exp < now;
  }

  const auth = getAccessToken();
// console.log(auth)

    const { Component, pageProps } = props;

    return (
        <PernatContext.Provider
        value={{ 
            auth
            }}>
            <Component {...pageProps} />
        </PernatContext.Provider>
    
    )
}



// class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

//     render() {
//         const { Component, pageProps} = this.props;

        
//     }
// }


export default MyApp;
