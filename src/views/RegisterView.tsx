import {Fragment} from "react";
import {Link} from "react-router-dom";

const RegisterView = () => {
    return (
        <Fragment>
            <h2 className="text-white text-center text-4xl font-bold uppercase">Registrate</h2>

            <nav>
                <Link to="/auth/login">Iniciar Sesión</Link>
            </nav>
        </Fragment>
    )
}

export default RegisterView;