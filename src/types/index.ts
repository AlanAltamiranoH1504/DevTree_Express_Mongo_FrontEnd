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
}

export type UsuarioUpdate = {
    handle: string;
    descripcion: string;
}

export type FormLogin = Pick<FormRegistro, "email" | "password">;
