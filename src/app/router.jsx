import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClienteForm from "../features/cliente/page/ClienteForm";
import ClientePage from "../features/cliente/page/ClientePage";
import Home from "../features/home/page/Home";
import VotoForm from "../features/voto/page/VotoForm";
import VotoPage from "../features/voto/page/VotoPage";

import ProdutoForm from "../features/produto/page/ProdutoForm";
import ProdutoPage from "../features/produto/page/ProdutoPage";

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/cliente" element={<ClientePage />} />
                <Route path="/cliente-form/:idCliente?" element={<ClienteForm />} />

                <Route path="/produto" element={<ProdutoPage />} />
                <Route path="/produto-form/:idProduto?" element={<ProdutoForm />} />

                <Route path="/voto" element={<VotoPage />} />
                <Route path="/voto-form" element={<VotoForm />} />

            </Routes>

        </BrowserRouter>

    );
}