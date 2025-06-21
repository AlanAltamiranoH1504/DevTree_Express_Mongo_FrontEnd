import {clienteAxios} from "../axios/ClienteAxios";
import type {UsuarioLogeado, UsuarioUpdate} from "../types";

export async function getUsuarioEnSesion() {
    try {
        const {data} = await clienteAxios.get("/admin", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AUTH_JWT")
            }
        });
        const usuario: UsuarioLogeado = data;
        return usuario;
    }catch (e) {
        console.log("Error getUsuarioEnSesion: " + e);
    }
}

export async function updateInformacionUsuario(informacion: UsuarioUpdate) {
    try {
        const {data} = await clienteAxios.put("/usuarios", informacion, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AUTH_JWT")
            }
        })
        return data;
    }catch (e) {
        throw e;
    }
}