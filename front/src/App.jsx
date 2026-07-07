import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";        

// ⚙️ Componente global (Navbar)
import Navbar from "./Componentes/Navbar/index.jsx";

// ⚙️ Suas 6 páginas com conteúdo estruturado
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Perfil from "./Pages/Perfil";
import RecuperarSenha from "./Pages/RecuperarSenha";

// Estilos globais
import "./App.css"; 

export default function App() {
  return (
    <BrowserRouter>
      {/* Menu fixo no topo */}
      <Navbar /> 

      {/* Área onde as páginas mudam dinamicamente */}
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/recuperar" element={<RecuperarSenha />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}