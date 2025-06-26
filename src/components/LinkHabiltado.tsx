import {Fragment} from "react";
import type {SocialNetwork} from "../types";

type LinkHabiltadoProps = {
    link: SocialNetwork
}
const LinkHabiltado = ({link}: LinkHabiltadoProps) => {
    return (
        <Fragment>
            <li className="bg-white px-5 py-2 flex items-center gap-5 rounded-md">
                <div
                    className="w-12 h-12 bg-cover"
                    style={{backgroundImage: `url('/social/icon_${link.nombre}.svg')`}}
                />
                <p className="capitalize">Vistia mi: <a className="font-bold" href={link.url}>{link.nombre}</a> </p>
            </li>
        </Fragment>
    );
}
export default LinkHabiltado;