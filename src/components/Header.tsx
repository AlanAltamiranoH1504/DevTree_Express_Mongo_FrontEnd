import {Fragment} from "react";
import HomeNavigation from "./HomeNavigation";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className="bg-slate-900 py-5">
                <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
                    <div className="w-full p-5 lg:p-0 md:w-1/3">
                        <Link to="/">
                            <img src="/logo.svg" alt="logo" className="w-full block"/>
                        </Link>
                    </div>
                    <div className="md:w-1/3 md:flex md:justify-end md:gap-5 space-x-5">
                        <HomeNavigation/>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}
export default Header;