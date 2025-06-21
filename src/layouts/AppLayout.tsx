import {useQuery} from "@tanstack/react-query";
import {getUsuarioEnSesion} from "../api/DevTreeAPI";
import Pagina401 from "../components/erros/Pagina401";
import DevTree from "../components/DevTree";

const AppLayout = () => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ["usuarioInSession"],
        queryFn: getUsuarioEnSesion,
        refetchOnWindowFocus: false
    });
    //Ventana de cargando
    if (isLoading){
        return <div className="max-w-5xl mx-auto  text-orange-600 text-4xl text-center font-bold">Cargando...</div>
    }
    //Venta de error
    if (isError){
        return <Pagina401/>
    }
    if (data) return (
        <DevTree data={data}/>
    );
}

export default AppLayout;