import {clienteAxios} from "../axios/ClienteAxios";

export async function getUsuarioEnSesion() {
    try {
        const {data} = await clienteAxios.get("/admin", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AUTH_JWT")
            }
        });
        return data;
    }catch (e) {
        console.log("Error getUsuarioEnSesion: " + e);
    }
}