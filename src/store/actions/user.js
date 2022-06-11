import { ORDENAR_USUARIO, ELIMINAR_USUARIO } from '../types/user'

export function ordenarUsuarioAction(list) {
  return (dispatch) => {
    dispatch(ordenarUsuario(list))
  }
}

export function eliminarUsuarioAction(list) {
  return (dispatch) => {
    dispatch(eliminarUsuario(list))
  }
}

const ordenarUsuario = (list) => ({
  payload: list,
  type   : ORDENAR_USUARIO
})

const eliminarUsuario = (list) => ({
  payload: list,
  type   : ELIMINAR_USUARIO
})
