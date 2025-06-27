import NavigationTabs from "./NavigationTabs";
import {Link, Outlet, useNavigate} from "react-router-dom";
import type {SocialNetwork, UsuarioLogeado} from "../types";
import {useEffect, useState} from "react";
import LinkHabiltado from "./LinkHabiltado";

type DevTreeProps = {
    data: UsuarioLogeado
}
const DevTree = ({data}: DevTreeProps) => {
    const navigate = useNavigate();
    const imagenPerfil = data.urlImagen.trim() === "" ? "/public/perfil.png" : data.urlImagen;
    const linksArreglo = JSON.parse(data.links);
    const linksHabilitados = linksArreglo.filter((link: SocialNetwork) => {
        return link.enabled;
    });
    const [enableLinks, setEnableLinks] = useState<SocialNetwork[]>(linksHabilitados);

    const cerrarSesion: () => void = () => {
        localStorage.removeItem("AUTH_JWT");
        navigate("/auth/login");
    }

    useEffect(() => {
        setEnableLinks(linksArreglo.filter((link: SocialNetwork) => {
            return link.enabled;
        }));
    }, [data])
    return (
        <>
            <header className="bg-slate-900 py-5">
                <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
                    <div className="w-full p-5 lg:p-0 md:w-1/3">
                        <img src="/logo.svg" alt="logo" className="w-full block"/>
                    </div>
                    <div className="md:w-1/3 md:flex md:justify-end">
                        <button
                            onClick={() => {
                                cerrarSesion();
                            }}
                            className="bg-lime-500 p-2 text-slate-900 uppercase font-black text-xs rounded-lg cursor-pointer">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </header>
            <div className="bg-gray-100 min-h-screen py-10">
                <main className="mx-auto max-w-5xl p-10 md:p-0">
                    <NavigationTabs/>
                    <div className="flex justify-end">
                        <Link
                            className="font-bold text-right text-slate-800 text-2xl"
                            to={`/${data.handle}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >Visitar Mi Perfil: <span
                            className="text-lime-500 hover:text-lime-600">{data.handle}</span></Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="flex-1">
                            <Outlet/>
                        </div>
                        <div className="w-full md:w-96 bg-slate-900 px-5 py-10 space-y-6">
                            <p className="text-center text-4xl text-lime-500 font-bold">{data.handle}</p>
                            <img className="rounded-lg p-5 bg-white shadow" src={imagenPerfil} alt="Imagen de perfil"/>
                            <p className="text-center text-lg font-black text-white">{data.descripcion}</p>
                            <div className="mt-20 flex flex-col gap-5">
                                {enableLinks.map((link: SocialNetwork) => {
                                    return <LinkHabiltado
                                        key={link.id}
                                        link={link}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
export default DevTree;