export type FormRegistro = {
    nombre: string;
    email: string;
    handle: string;
    password: string;
}
export type UsuarioLogeado = {
    _id: string;
    nombre: string;
    email: string;
    handle: string;
    descripcion: string;
    imagen: string;
    urlImagen: string;
}

export type UsuarioUpdate = {
    handle: string;
    descripcion: string;
    imagen: string;
}

export type FormLogin = Pick<FormRegistro, "email" | "password">;


export type SocialNetwork = {
    id: number;
    nombre: string;
    url: string;
    enabled: boolean;
}

export type DevTreeLink = Pick<SocialNetwork, "nombre" | "url" | "enabled">
