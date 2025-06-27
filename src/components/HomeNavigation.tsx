import {Fragment} from "react";
import {Link} from "react-router-dom";

const HomeNavigation = () => {
    return (
        <Fragment>
            <Link
                to="/auth/login"
                className="bg-lime-500 p-2 text-slate-900 uppercase font-black text-xs rounded-lg cursor-pointer">
                Inicar Sesión
            </Link>
            <Link
                to="/auth/registro"
                className="bg-lime-500 p-2 text-slate-900 uppercase font-black text-xs rounded-lg cursor-pointer">
                Crear Cuenta
            </Link>
        </Fragment>
    );
}
export default HomeNavigation;