import {useQuery} from "@tanstack/react-query";
import {findUserByHandle} from "../api/DevTreeAPI";
import {useParams} from "react-router-dom";
import Pagina404 from "../components/erros/Pagina404";
import type {UserByHandle} from "../types";
import HandleDetalles from "../components/HandleDetalles";

const HandleView = () => {
    const {handle} = useParams();
    const {data, isLoading, isError} = useQuery<UserByHandle>({
        queryKey: ["findUserByHandle"],
        queryFn: () => {
            return findUserByHandle(handle!);
        },
        refetchOnWindowFocus: false,
        retry: 1
    });

    if (isLoading) {
        return <>
            <div className="max-w-5xl mx-auto  text-white text-4xl text-center font-bold">Cargando...</div>
            <div className="flex items-center justify-center w-full my-10">
                <img src="/spiner.webp" className="max-h-60" alt="Cargando..."/>
            </div>
        </>
    }

    if (isError) {
        return <Pagina404/>
    }

    if (data) return (
        <HandleDetalles
            data={data}
        />
    );
}
export default HandleView;