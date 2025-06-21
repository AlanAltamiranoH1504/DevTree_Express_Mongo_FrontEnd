import {Link, useNavigate} from "react-router-dom";

const Pagina401 = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/auth/login");
    }, 2000)
    return (
        <>
            <header className="bg-slate-900 py-5">
                <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
                    <div className="w-full p-5 lg:p-0 md:w-1/3">
                        <img src="/logo.svg" alt="Logo DevTree"/>
                    </div>
                    <div className="md:w-1/3 md:flex md:justify-end">
                        <Link className="bg-lime-500 p-2 text-slate-900 uppercase font-bold text-sm rounded-lg cursor-pointer hover:bg-lime-600" to="/auth/login">Inicar Sesión</Link>
                    </div>
                </div>
            </header>
            <div className="bg-gray-100 min-h-screen py-10">
                <main className="mx-auto max-w-5xl p-10 md:p-0 text-red-700 text-center">
                    <svg className="mx-auto h-32 w-20" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v2.25M12 15h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"/>
                    </svg>
                    <h1 className="text-7xl text-center font-extrabold text-red-800 mt-4 mb-2">401</h1>
                    <h2 className="text-4xl font-bold uppercase transform text-red-700 mb-4">Acceso Denegado</h2>
                    <p className="text-2xl  font-semibold text-red-500 mb-6">No tienes permiso para acceder a esta sección.</p>
                </main>
            </div>
        </>
    );
}
export default Pagina401;