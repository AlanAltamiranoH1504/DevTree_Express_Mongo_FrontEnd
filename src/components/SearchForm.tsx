import {useForm} from "react-hook-form";
import slugify from "react-slugify";
import {useMutation} from "@tanstack/react-query";
import {searchHandleReistrado} from "../api/DevTreeAPI";
import {toast} from "react-toastify";

const SearchForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function busquedaHandle(data) {
        const slugFormat: string = slugify(data.handle, {delimiter: "_"});
        mutationSearchHandleRegister.mutate(slugFormat);
    }

    const mutationSearchHandleRegister = useMutation({
        mutationFn: searchHandleReistrado,
        mutationKey: ["searchHandleRegister"],
        onSuccess: (e) => {
            toast.success(e.msg)
        },
        onError: (e) => {
            toast.error(e.response.data.error)
        }
    })
    return (
        <>
            <form
                onSubmit={handleSubmit(busquedaHandle)}
                className="space-y-5">
                <div className="relative items-center   px-2">
                    <label
                        htmlFor="handle"
                    >devtree.com/</label>
                    <input
                        type="text"
                        id="handle"
                        className="border-none w-full rounded-lg space-y-2 p-2 focus:ring-0 flex-1"
                        placeholder="elonmusk, zuck, jeffbezos"
                        {...register("handle", {
                            required: "Un Nombre de Usuario es obligatorio",
                        })}
                    />
                    <div className="text-center text-red-700 font-black">
                        {errors.handle && String(errors.handle.message)}
                    </div>
                </div>

                <div className="mt-10">

                </div>

                <input
                    type="submit"
                    className="bg-lime-500 p-3 text-lg w-full uppercase text-white rounded-lg font-bold cursor-pointer hover:bg-lime-600"
                    value='Obtener mi DevTree'
                />
            </form>
        </>
    );
}
export default SearchForm;