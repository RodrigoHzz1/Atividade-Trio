import React from 'react';
import './style.css';

export default function Card({ title, subtitle, infoTags = [], id, onEdit, onDelete }) {
  return (
    <div className="card-container">
      <div className="card-header-block">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
      
      {infoTags.length > 0 && (
        <div className="card-tags">
          {infoTags.map((tag, index) => (
            <span key={index} className="card-tag">{tag}</span>
          ))}
        </div>
      )}
      
      <div className="card-footer-actions">
        <button onClick={() => onEdit(id)} className="action-btn edit-btn">
          ✏️ Editar
        </button>
        <button onClick={() => onDelete(id)} className="action-btn delete-btn">
          🗑️ Excluir
        </button>
      </div>
    </div>
  );
}