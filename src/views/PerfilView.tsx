const PerfilView = () => {
    return (
        <form className="bg-white p-10 rounded-lg space-y-5">
            <legend className="text-2xl font-semibold text-slate-900 text-center">Editar Información</legend>
            <div className="grid grid-cols-1 gap-2">
                <label className="font-semibold" htmlFor="handle">Handle:</label>
                <input type="text" name="handle" id="handle" className=" bg-slate-100 rounded-lg p-2" placeholder="Handle o nombre de usuario"/>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <label htmlFor="descripcion" className="font-semibold">Descripción</label>
                <textarea name="descripcion" id="descripcion" placeholder="Descripción tuyanp" className="border rounded-lg bg-slate-100 p-2"/>
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