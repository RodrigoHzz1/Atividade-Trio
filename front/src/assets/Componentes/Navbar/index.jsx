import React from 'react';
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>⚙️ AdminDashboard</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#dashboard" className="active">Dashboard</a></li>
        <li><a href="#cadastro">Gerenciamento</a></li>
      </ul>
      <div className="navbar-user">
        <div className="user-avatar">A</div>
        <span>Administrador</span>
      </div>
    </nav>
  );
}