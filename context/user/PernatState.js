import React, {useReducer} from 'react'
import PernatReducer from './PernatReducer'
import PernatContext from './PernatContext'
import axios from 'axios'
import { GET_PROFILE, GET_USERS, GET_SIMULACION, GET_PRODUCTO } from '../types'


const PernatState = (props) => {


    
const initialState = {
    users: [],
    selectedUser: null,
    simulacion: [],
    producto: []
}

const [state, dispatch] = useReducer(PernatReducer, initialState)

const ip = 'http://161.97.67.227:3000'




const getUsers = async () => {
  const res = await axios.get('https://reqres.in/api/users')
  dispatch({
      type: GET_USERS,
      payload: res.data.data
  })
}

const getProfile = async (id) => {
    const res = await axios.get('https://reqres.in/api/users/' + id)
    dispatch({
        type: GET_PROFILE,
        payload: res.data.data
    })
}

const getSimulacion = async (valor, moneda, grupo, plazo, pagointeres, ubicacion) => {

    let userInfo = { valordeposito: valor, moneda: moneda, grupo: grupo, plazo: plazo, pagointeres: pagointeres, ubicacion: ubicacion }
    let res = await axios.post('http://161.97.67.227:3000/api/simulacion',userInfo)
        dispatch({
            type: GET_SIMULACION,
            payload: res.data.data
        })
}

const getProducto = async (id) => {

    let userInfo = { id: id }

    let res = await axios.post('http://161.97.67.227:3000/api/simulacionid', userInfo)
    // console.log(res.data.data)
    dispatch({
        type: GET_PRODUCTO,
        payload: res.data.data
    })
}

return (
    <PernatContext.Provider value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
        getSimulacion,
        simulacion: state.simulacion,
        getProducto,
        producto: state.producto
    }}>

        {props.children}

    </PernatContext.Provider>
)

}

export default PernatState;


