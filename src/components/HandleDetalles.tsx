import {Fragment} from "react";
import type {SocialNetwork, UserByHandle} from "../types";

type HandleDetallesProps = {
    data: UserByHandle
}
const HandleDetalles = ({data}: HandleDetallesProps) => {
    const mixLinks: SocialNetwork[] = JSON.parse(data.links);
    const linksHabilitados = mixLinks.filter((link: SocialNetwork) => {
        return link.enabled;
    });
    return (
        <Fragment>
            <div className="space-y-6 text-white">
                <p className="text-5xl text-center font-black border-b-2">{data.handle}</p>
                {data.urlImagen ? (
                    <div className="flex items-center justify-center">
                        <img src={data.urlImagen} alt="Imagen de usuaio" className="max-h-96 rounded-lg"/>
                    </div>
                ) : (
                    <img src="/perfil.png" alt="Imagen de usuaio"/>
                )}
                <p className="text-lg  text-center font-bold">{data.descripcion}</p>
                <div className="mt-20 flex flex-col gap-6">
                    {linksHabilitados.length > 0 ?
                        linksHabilitados.map((link: SocialNetwork) => {
                            return (
                                <>
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg text-black capitalize"
                                    >
                                        <img src={`/social/icon_${link.nombre}.svg`} className="w-12" alt="img red social"/>
                                        <p className="text-black capitalize font-bold text-lg">Visita mi: {link.nombre}</p>
                                    </a>
                                </>
                            )
                        })
                        :
                        <p className="text-center">No hay enlaces disponibles.</p>}
                </div>
            </div>
        </Fragment>
    );
}
export default HandleDetalles;