import {Fragment} from "react";
import {Link} from "react-router-dom";

const LoginView = () => {
    return(
        <Fragment>
            <h2 className="text-white font-bold uppercase text-4xl text-center">Inicia Sesión</h2>

            <nav>
                <Link to="/auth/registro">Registrate</Link>
            </nav>
        </Fragment>
    )
}

export default LoginView;