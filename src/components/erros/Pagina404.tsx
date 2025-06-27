import {Fragment} from "react";
import {Link} from "react-router-dom";

const Pagina404 = () => {
    return (
        <Fragment>
            <div className="min-h-screen py-10">
                <main className="mx-auto max-w-5xl p-10 md:p-0 text-orange-600 text-center">
                    <svg className="mx-auto h-32 w-20" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v2.25M12 15h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"/>
                    </svg>
                    <h1 className="text-7xl text-center font-extrabold text-orange-600 mt-4 mb-2">404</h1>
                    <h2 className="text-4xl font-bold uppercase transform text-orange-600 mb-4">Recurso No Encontrado</h2>
                    <p className="text-2xl  font-semibold text-orage-500 mb-6">El recurso solicitado no fue encontrado.</p>
                </main>
                <div className="max-w-3xl mx-auto flex items-center">
                    <Link to="/auth/login" className="mx-auto py-2 px-5 border rounded-lg text-slate-900 font-bold uppercase border-lime-600 ho bg-lime-600">Iniciar Sesion</Link>
                </div>
            </div>
        </Fragment>
    );
}
export default Pagina404;