import { BrowserRouter, Route, Routes } from "react-router-dom";

import AutenticationForm from "../features/authentication/page/AuthenticationForm";
import ClienteForm from "../features/cliente/page/ClienteForm";
import ClientePage from "../features/cliente/page/ClientePage";
import Home from "../features/home/page/Home";
import VotoForm from "../features/voto/page/VotoForm";
import VotoPage from "../features/voto/page/VotoPage";

import ProdutoForm from "../features/produto/page/ProdutoForm";
import ProdutoPage from "../features/produto/page/ProdutoPage";
import ProtectedRoute from "../shared/util/ProtectedRoute";

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<AutenticationForm />} />
                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />

                <Route path="/cliente" element={
                    <ProtectedRoute>
                        <ClientePage />
                    </ProtectedRoute>
                } />

                <Route path="/cliente-form/:idCliente?" element={
                    <ProtectedRoute>
                        <ClienteForm />
                    </ProtectedRoute>
                } />

                <Route path="/produto" element={
                    <ProtectedRoute>
                        <ProdutoPage />
                    </ProtectedRoute>
                } />

                <Route path="/produto-form/:idProduto?" element={
                    <ProtectedRoute>
                        <ProdutoForm />
                    </ProtectedRoute>
                } />

                <Route path="/voto" element={
                    <ProtectedRoute>
                        <VotoPage />
                    </ProtectedRoute>
                } />

                <Route path="/voto-form" element={
                    <ProtectedRoute>
                        <VotoForm />
                    </ProtectedRoute>
                } />

            </Routes>

        </BrowserRouter>

    );
}