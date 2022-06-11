import { ACTUALIZAR_USUARIO } from '../types/user'
import { USERS } from '../../utils'

const initialState = {
  users: USERS
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTUALIZAR_USUARIO:
      return {
        users: action.payload
      }
    default:
      return state
  }
}
