import React from 'react';
import './style.css';

export default function Header({ title, description, actionButton }) {
  return (
    <header className="page-header">
      <div className="header-text">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actionButton && (
        <div className="header-action">
          {actionButton}
        </div>
      )}
    </header>
  );
}