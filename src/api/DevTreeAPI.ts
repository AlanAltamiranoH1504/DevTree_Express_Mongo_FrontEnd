import {clienteAxios} from "../axios/ClienteAxios";
import type {SearchHandleRegister, UserByHandle, UserLinksToUpdate, UsuarioLogeado, UsuarioUpdate} from "../types";

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
    // eslint-disable-next-line no-useless-catch
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

export async function updateImagenPerfil(innformacion: FormData) {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await clienteAxios.post("/imagenes", innformacion, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AUTH_JWT"),
                "Content-Type": "multipart/form-data"
            }
        });
        return  response.data;
    }catch (e) {
        throw e;
    }
}

export async function usuarioUpdateLinks(links: UserLinksToUpdate) {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await clienteAxios.put("/usuarios/links", links, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AUTH_JWT"),
            }
        });
        return response.data;
    }catch (e) {
        throw e;
    }
}

export async function findUserByHandle(handle: string) {
    // eslint-disable-next-line no-useless-catch
    try {
        const {data} = await clienteAxios.get<UserByHandle>(`/usuarios/${handle}`);
        return data;
    }catch (e) {
        throw e;
    }
}

export async function searchHandleReistrado(handle: string) {
    // eslint-disable-next-line no-useless-catch
    try {
        const {data} = await clienteAxios.post<SearchHandleRegister>("/usuarios/handle", {handle});
        return data;
    }catch (e) {
        throw e;
    }
}