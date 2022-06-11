import { ACTUALIZAR_USUARIO } from '../types/user'

export function actualizarUsuarioAction(list) {
  return (dispatch) => {
    dispatch(actualizarUsuario(list))
  }
}

const actualizarUsuario = (list) => ({
  payload: list,
  type   : ACTUALIZAR_USUARIO
})
