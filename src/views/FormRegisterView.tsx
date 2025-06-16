import {Fragment} from "react";
import {useForm} from "react-hook-form";

const FormRegisterView = () => {
    const {register, watch, handleSubmit, formState: {errors}} = useForm();
    const password = watch("password")
    function saveCuenta() {
        console.log("Guardando informacion");
    }

    return (
        <Fragment>
            <div className="border bg-white shadow rounded-lg my-10 px-5 py-8">
                <form
                    onSubmit={handleSubmit(saveCuenta)}
                >
                    <h2 className="text-center text-lg font-bold mb-2 text-lime-600 p-1 rounded-lg">Diseña tu propio centro de enlaces</h2>
                    <div className="mb-2 p-2">
                        <label htmlFor="nombre"
                               className="mb-2 font-semibold block text-lg uppercase text-slate-600">Nombre: </label>
                        <input
                            type="text"
                            className="p-2 border w-full rounded-lg border-slate-700"
                            placeholder="Ingresa tu nombre"
                            {...register("nombre", {
                                required: "El nombre es obligatorio",
                            })}
                        />
                        <div className="text-red-700 font-bold">
                            {errors.nombre && String(errors.nombre.message)}
                        </div>
                    </div>
                    <div className="mb-2 p-2">
                        <label htmlFor="email"
                               className="mb-2 font-semibold block text-lg uppercase text-slate-600">E-Mail: </label>
                        <input
                            type="email"
                            className="p-2 border w-full rounded-lg border-slate-700"
                            placeholder="E-Mail de registro"
                            {...register("email", {
                                required: "El E-mail es obligatorio",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Formato de email incorrecto"
                                }
                            })}
                        />
                        <div className="text-red-700 font-bold">
                            {errors.email && String(errors.email.message)}
                        </div>

                    </div>
                    <div className="mb-2 p-2">
                        <label htmlFor="handle"
                               className="mb-2 font-semibold block text-lg uppercase text-slate-600">Username: </label>
                        <input
                            type="text"
                            className="p-2 border w-full rounded-lg border-slate-700"
                            placeholder="Username sin espacios"
                            {...register("handle", {
                                required: "El username es obligatorio",
                            })}
                        />
                        <div className="text-red-700 font-bold">
                            {errors.handle && String(errors.handle.message)}
                        </div>
                    </div>
                    <div className="mb-2 p-2">
                        <label htmlFor="password"
                               className="mb-2 font-semibold block text-lg uppercase text-slate-600">Password: </label>
                        <input
                            type="password"
                            className="p-2 border w-full rounded-lg border-slate-700"
                            placeholder="Minimo 5 caracteres"
                            {...register("password", {
                                required: "El password es obligatorio",
                                minLength: {
                                    value: 5,
                                    message: "El password debe tener al menos 5 caracteres"
                                }
                            })}
                        />
                        <div className="text-red-700 font-bold">
                            {errors.password && String(errors.password.message)}
                        </div>
                    </div>
                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="mb-2 font-semibold block text-lg uppercase text-slate-600">Confirmar
                            Password: </label>
                        <input
                            type="password"
                            className="p-2 border w-full rounded-lg border-slate-700"
                            placeholder="Confirmación de Password"
                            {...register("password_confirmation", {
                                required: "El campo es obligatorio",
                                validate: (value) => value === password || "Los passwords no coincide"
                            })}
                        />
                    </div>
                    <div className="mb-2 p-3">
                        <input
                            type="submit"
                            className="border p-3 w-full rounded-lg font-semibold text-lg bg-slate-500 text-white hover:bg-slate-700"
                            value="Registrar Cuenta"
                        />
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default FormRegisterView;

