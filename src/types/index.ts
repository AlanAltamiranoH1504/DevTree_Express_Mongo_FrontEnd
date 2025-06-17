export type FormRegistro = {
    nombre: string;
    email: string;
    handle: string;
    password: string;
}

export type FormLogin = Pick<FormRegistro, "nombre" | "password">;