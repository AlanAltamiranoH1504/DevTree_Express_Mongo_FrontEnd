import {Fragment} from "react";
import {Link} from "react-router-dom";
import FormLoginView from "./FormLoginView";

const LoginView = () => {
    return(
        <Fragment>
            <h2 className="text-white text-center text-4xl font-bold">Inicia Sesión</h2>

            <FormLoginView />
            <nav className="mt-5 space-y-3">
                <Link className="text-white text-center text-lg block hover:text-lime-600 hover:font-bold" to="/auth/registro">Crear Cuenta</Link>
                <Link to="" className="text-white text-center text-lg block hover:text-lime-600 hover:font-bold">Olvide Contraseña</Link>
            </nav>
        </Fragment>
    )
}

export default LoginView;