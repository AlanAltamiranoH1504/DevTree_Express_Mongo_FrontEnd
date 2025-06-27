import {Fragment} from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const HomeView = () => {
    return(
        <Fragment>
            <Header/>

            <main className="bg-gray-100 py-10 min-h-screen bg-no-repeat bg-right-top lg:bg-home">
                <div className="max-w-5xl mx-auto mt-10">
                    <div className="lg:w-1/2 px-10 lg:p-0 space-y-6">
                        <h1 className="text-6xl text-center font-black">Todas tus
                            <span className="text-lime-500">
                                 Redes Sociales
                            </span> en un solo enlace
                        </h1>
                        <p className="text-slate-900 text-xl">
                            Únete a más de 200 mil developers compartiendo sus redes sociales, comparte tu perfil de TikTok, Git Hub, Facebook y más.
                        </p>
                        <SearchForm/>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}
export default HomeView;