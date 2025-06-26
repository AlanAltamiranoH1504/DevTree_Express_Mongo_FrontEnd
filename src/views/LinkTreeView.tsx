import {Fragment, useState} from "react";
import {social} from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import * as React from "react";
import {toast} from "react-toastify";
import {isValidURL} from "../utils";
import {useMutation} from "@tanstack/react-query";
import {usuarioUpdateLinks} from "../api/DevTreeAPI";

const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social);

    const mutationLinks = useMutation({
        mutationFn: usuarioUpdateLinks,
        onSuccess: () => {
            toast.success("Links agregados correctamente");
        },
        onError: () => {
            toast.error("Error en el guardado del link")
        }
    });

    const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDevTreeLins = devTreeLinks.map((devTreeLink) => {
            if (devTreeLink.nombre === e.target.name) {
                return {
                    ...devTreeLink,
                    url: e.target.value
                }
            } else {
                return devTreeLink
            }
        });
        setDevTreeLinks(newDevTreeLins);
    }

    const handleEnableLink = (socialNetwork: string) => {
        const newDevTreeLinksBandera = devTreeLinks.map((link) => {
            if (link.nombre === socialNetwork) {
                if (isValidURL(link.url)) {
                    return {
                        ...link,
                        enabled: !link.enabled
                    }
                } else {
                    toast.error("URL NO VALIDA");
                }
            }
            return link;
        });
        setDevTreeLinks(newDevTreeLinksBandera);
    }

    const saveLinks = () => {
        mutationLinks.mutate({links: devTreeLinks});
    }
    return (
        <Fragment>
            <div className="space-y-5">
                {devTreeLinks.map((link) => {
                    return (
                        <Fragment key={link.nombre}>
                            <DevTreeInput
                                link={link}
                                handleURLChange={handleURLChange}
                                handleEnableLink={handleEnableLink}
                            />
                        </Fragment>
                    );
                })}
                <button
                    onClick={saveLinks}
                    className="bg-cyan-400 p-2 w-full border rounded-lg text-white font-bold hover:bg-cyan-500">Guadar Cambios</button>
            </div>
        </Fragment>
    );
}

export default LinkTreeView;