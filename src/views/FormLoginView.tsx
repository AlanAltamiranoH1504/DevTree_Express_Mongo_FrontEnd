import {Fragment} from "react";
import {useForm} from "react-hook-form";

const FormLoginView = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function login() {
        console.log("Iniciando sesion");
    }

    return (
        <Fragment>
            <div className="border bg-white shadow rounded-lg my-10 px-5 py-8">
                <form
                    onSubmit={handleSubmit(login)}
                >
                    <h2 className="text-center text-lg font-bold mb-2 text-lime-600 p-1 rounded-lg">Diseña tu propio centro de enlaces</h2>
                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="mb-2 font-semibold block text-lg uppercase text-slate-600">E-Mail:</label>
                        <input type="email" className="border p-2 border-slate-700 w-full rounded-lg"
                               placeholder="Email de registro"
                               {...register("email", {
                                   required: "El email es obligatorio"
                               })}
                        />
                        <div className="text-red-700">
                            {errors.email && String(errors.email.message)}
                        </div>
                    </div>
                    <div className="mb-2 p-2">
                        <label htmlFor="password" className="mb-2 font-semibold block text-lg uppercase text-slate-600">Password:</label>
                        <input
                            type="password"
                            className="border p-2 border-slate-700 w-full rounded-lg"
                            placeholder="******"
                            {...register("password", {
                                required: "El password es obligatorio",
                            })}
                        />
                        <div className="text-red-700">
                            {errors.password && String(errors.password.message)}
                        </div>
                    </div>
                    <div className="mb-2 p-3">
                        <input
                            type="submit"
                            className="border p-3 w-full rounded-lg font-semibold text-lg bg-slate-500 text-white hover:bg-slate-700"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default FormLoginView;