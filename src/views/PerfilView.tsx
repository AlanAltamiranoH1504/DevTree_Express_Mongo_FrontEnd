import {useForm} from "react-hook-form";
import type {UsuarioLogeado, UsuarioUpdate} from "../types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateInformacionUsuario} from "../api/DevTreeAPI";
import {toast} from "react-toastify";


const PerfilView = () => {
    const queryClient = useQueryClient();
    const cachedUsuarioEnSesion: UsuarioLogeado = queryClient.getQueryData(["usuarioInSession"])!;

    const {register, handleSubmit, formState: {errors}} = useForm<UsuarioUpdate>({
        defaultValues: {
            handle: cachedUsuarioEnSesion.handle,
            descripcion: cachedUsuarioEnSesion.descripcion
        }
    });

    function actualizarPerfil(data: UsuarioUpdate){
        mutation.mutate(data);
    }

    const mutation = useMutation({
        mutationFn: updateInformacionUsuario,
        onSuccess: (data) => {
            toast.success(data.msg);
            queryClient.invalidateQueries({
                queryKey: ["usuarioInSession"],
            })
        },
        onError: (error) => {
            // @ts-ignore
            toast.error(error.response.data.msg);
        }
    });

    return (
        <form
            className="bg-white p-10 rounded-lg space-y-5"
            onSubmit={handleSubmit(actualizarPerfil)}
        >
            <legend className="text-2xl font-semibold text-slate-900 text-center">Editar Información</legend>
            <div className="grid grid-cols-1 gap-2">
                <label className="font-semibold" htmlFor="handle">Handle:</label>
                <input
                    type="text" id="handle" className=" bg-slate-100 rounded-lg p-2"
                    placeholder="Handle o nombre de usuario"
                    {...register("handle", {
                        required: "El handle o username es obligatorio"
                    })}
                />
                <div className="text-red-700 text-center font-semibold">
                    {errors.handle && String(errors.handle.message)}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <label htmlFor="descripcion" className="font-semibold">Descripción</label>
                <textarea
                    className="border rounded-lg bg-slate-100 p-2"
                    {...register("descripcion")}
                />
                <div className="text-red-700 text-center font-semibold">
                    {errors.descripcion && String(errors.descripcion.message)}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <label htmlFor="imagen" className="font-semibold">Imagen</label>
                <input
                    type="file"
                    name="imagen"
                    id="imagen"
                    className="border rounded-lg bg-slate-100 p-2"
                    accept="image/*"
                    onChange={() => {
                        console.log("Imagen cargada")
                    }}
                />
            </div>
            <input  type={"submit"} value={"Guardar Información"} className="p-2 border rounded-lg bg-slate-900 text-white w-full font-semibold"/>
        </form>
    );
}
export default PerfilView;