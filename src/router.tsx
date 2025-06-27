import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinkTreeView from "./views/LinkTreeView";
import PerfilView from "./views/PerfilView";
import HandleView from "./views/HandleView";

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                {/*Rutas de autenticacion*/}
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<LoginView/>}/>
                    <Route path="/auth/registro" element={<RegisterView/>}/>
                </Route>

                {/*Rutas con verificacion de autenticacion*/}
                <Route path="/administracion" element={<AppLayout/>}>
                    <Route index={true} element={<LinkTreeView/>}/>
                    <Route path="perfil" element={<PerfilView/>}/>
                </Route>

                {/*Rutas de area publica*/}
                <Route path={"/:handle"} element={<AuthLayout/>}>
                    <Route index={true} element={<HandleView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}