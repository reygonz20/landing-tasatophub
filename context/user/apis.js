import React, {useState, useEffect} from 'react'
import axios from 'axios'


const obtenerUsuarios = () => {

const [usuarios, setUsuarios] = useState([])

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        setUsuarios(res.data.data)
        
      }
    
    
    useEffect(() => {
        getUsers()
      }, []);

return {
usuarios
}


}

export default obtenerUsuarios;



