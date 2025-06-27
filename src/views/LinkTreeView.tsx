import {Fragment, useEffect, useState} from "react";
import {social} from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import * as React from "react";
import {toast} from "react-toastify";
import {isValidURL} from "../utils";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {usuarioUpdateLinks} from "../api/DevTreeAPI";
import type {SocialNetwork} from "../types";

const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social);
    const queryClient = useQueryClient();
    const userInCache = queryClient.getQueryData(["usuarioInSession"]);
    // @ts-ignore
    const linksJson = JSON.parse(userInCache.links);

    const mutationLinks = useMutation({
        mutationFn: usuarioUpdateLinks,
        onSuccess: () => {
            toast.success("Links agregados correctamente");
            queryClient.invalidateQueries({
                queryKey: ["usuarioInSession"]
            });
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

    useEffect(() => {
        const updatedData = devTreeLinks.map((item) => {
            const userLink = linksJson.find((link: SocialNetwork) => link.nombre === item.nombre)
            if (userLink){
                return {
                    ...item,
                    url: userLink.url,
                    enabled: userLink.enabled
                }
            }
            return item;
        });
        setDevTreeLinks(updatedData);
    }, [])
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