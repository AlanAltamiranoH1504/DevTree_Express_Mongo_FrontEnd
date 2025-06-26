import {Switch} from "@headlessui/react";
import type {DevTreeLink} from "../types";
import {classNames} from "../utils";
import * as React from "react";

type DevTreInputProps = {
    link: DevTreeLink,
    handleURLChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleEnableLink: (socialNetwork: string) => void,
};

const DevTreeInput = ({link, handleURLChange, handleEnableLink}: DevTreInputProps) => {

    return (
        <div className="bg-white shadow-sm p-5 flex items-center gap-3 rounded-lg">
            <div
                className="w-12 h-12 bg-cover"
                style={{backgroundImage: `url('/social/icon_${link.nombre}.svg')`}}
            />

            <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg p-2"
                value={link.url}
                onChange={handleURLChange}
                name={link.nombre}
            />

            <Switch
                checked={link.enabled}
                onChange={() => handleEnableLink(link.nombre)}
                className={classNames(
                    link.enabled ? 'bg-blue-500' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        link.enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                />
            </Switch>
        </div>
    );
};

export default DevTreeInput;
