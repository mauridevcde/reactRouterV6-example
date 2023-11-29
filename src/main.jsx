import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./routes/home";
import { Cliente } from "./routes/cliente";
import { Clientes } from "./routes/clientes";
import { Layout } from "./layout";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="clientes" element={<Clientes />}>
          <Route index element={ <div>Seleccione un usuario</div>} />
          <Route path=":clienteId" element={<Cliente />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);
