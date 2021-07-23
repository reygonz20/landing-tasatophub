import {GET_USERS, GET_PROFILE, GET_SIMULACION, GET_PRODUCTO} from '../types'

export default (state, action) => {
     const {payload,type} = action;

     switch(type) {
         case GET_USERS:
             return{
                 ...state,
                 users: payload
             }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        case GET_SIMULACION:
            return{
                ...state,
                simulacion: payload
            }
        case GET_PRODUCTO:
            return{
                ...state,
                producto: payload
            }
        default:
            return state;
     }
}