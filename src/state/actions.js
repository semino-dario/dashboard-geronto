import { ARTICULO_EDITAR, CANASTA_EDITAR, MOSTRAR_ARTICULO, MOSTRAR_CANASTA } from "./types"
import axios from "axios"

export const almacenarArticulo = noticia => {
    return {
        type: MOSTRAR_ARTICULO,
        payload: noticia
    }
}

export const almacenarCanasta = canasta => {
    return {
        type: MOSTRAR_CANASTA,
        payload: canasta
    }
}

export const mostrarArticulo = () => async dispatch => {

    try {
        const { data: rta } = await axios(`${process.env.REACT_APP_API_URL}articulos`)
        dispatch(almacenarArticulo(rta))
    }
    catch (error) {
        console.warn("ERROR DE AXIOS", error)
    }
}

export const mostrarCanasta = () => async dispatch => {
    try {

        const { data: rta } = await axios(`${process.env.REACT_APP_API_URL}canastas`)
        dispatch(almacenarCanasta(rta))
    }

    catch (error) {
        console.warn('ERROR DE AXIOS', error)
    }
}

export const articuloEditado = articulo => {

    return {
        type: ARTICULO_EDITAR,
        payload: articulo
    }
}

export const canastaEditada = canastaParaEditar => {
    return {
        type: CANASTA_EDITAR,
        payload: canastaParaEditar
    }
}

