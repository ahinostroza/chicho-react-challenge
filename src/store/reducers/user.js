import { ORDENAR_USUARIO, ELIMINAR_USUARIO } from '../types/user'
import { USERS } from '../../utils'

const initialState = {
  users: USERS
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDENAR_USUARIO:
      return {
        users: action.payload
      }
    case ELIMINAR_USUARIO:
      return {
        users: action.payload
      }
    default:
      return state
  }
}
