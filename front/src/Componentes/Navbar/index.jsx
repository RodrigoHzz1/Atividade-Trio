import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css'; // Aqui funciona, porque o style.css está na mesma pasta que este index.jsx!

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>⚙️ AdminDashboard</span>
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/" className={isActive("/")}>Home</Link></li>
        <li><Link to="/cadastro" className={isActive("/cadastro")}>Cadastro</Link></li>
        <li><Link to="/login" className={isActive("/login")}>Login</Link></li>
        <li><Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link></li>
        <li><Link to="/perfil" className={isActive("/perfil")}>Perfil</Link></li>
        <li><Link to="/recuperar" className={isActive("/recuperar")}>Recuperar Senha</Link></li>
      </ul>

      <Link to="/perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="navbar-user" style={{ cursor: 'pointer' }}>
          <div className="user-avatar">A</div>
          <span>Administrador</span>
        </div>
      </Link>
    </nav>
  );
}