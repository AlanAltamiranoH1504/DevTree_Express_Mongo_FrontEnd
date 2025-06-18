import {Fragment} from "react";
import {Link} from "react-router-dom";
import FormRegisterView from "../components/FormRegisterView";

const RegisterView = () => {
    return (
        <Fragment>
            <h2 className="text-white text-center text-4xl font-bold ">Crear Cuenta</h2>

            <FormRegisterView/>

            <nav className="mt-5 space-y-3">
                <Link className="text-white text-center text-lg block hover:text-lime-600 hover:font-bold" to="/auth/login">¿Ya tienes una cuenta? Inicia Sesión</Link>
                <Link to="/" className="text-white text-center text-lg block hover:text-lime-600 hover:font-bold">Olvide Contraseña</Link>
            </nav>
        </Fragment>
    )
}

export default RegisterView;