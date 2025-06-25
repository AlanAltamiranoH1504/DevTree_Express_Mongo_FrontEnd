import {Fragment, useState} from "react";
import {social} from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import * as React from "react";

const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social);

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
        })
        setDevTreeLinks(newDevTreeLins);
    }

    const handleEnableLink = (socialNetwork: string) => {
        const newDevTreeLinksBandera = devTreeLinks.map((link) => {
            if (link.nombre === socialNetwork) {
                return {
                    ...link,
                    enabled: !link.enabled
                }
            } else {
                return link;
            }
        });
        setDevTreeLinks(newDevTreeLinksBandera);
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
            </div>
        </Fragment>
    );
}

export default LinkTreeView;