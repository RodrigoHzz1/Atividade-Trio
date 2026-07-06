import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sistema de Gerenciamento. Todos os direitos reservados.</p>
      <p className="footer-version">v1.0.0</p>
    </footer>
  );
}