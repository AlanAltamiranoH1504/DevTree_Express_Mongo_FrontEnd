import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <Fragment>
            <div className="bg-slate-900 min-h-screen">
                <div className="max-w-lg mx-auto pt-10 px-5">
                    <Link to="/">
                        <img src="/logo.svg" alt="Logo de Aplicación"/>
                    </Link>
                    <div className="py-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AuthLayout;