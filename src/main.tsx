import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Router from "./router";
import {ToastContainer} from "react-toastify";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router/>
            <ReactQueryDevtools/>
            <ToastContainer/>
        </QueryClientProvider>
    </StrictMode>,
)
