import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginView />}/>
                    <Route path="/auth/registro" element={<RegisterView />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}