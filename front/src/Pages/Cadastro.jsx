import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Cadastro() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '', confirmarSenha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    // Simula uma requisição para a API do backend
    setTimeout(() => {
      setLoading(false);
      alert("Conta administrativa criada com sucesso!");
      navigate('/login');
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Criar Conta</h2>
        <p style={styles.subtitle}>Registre um novo administrador no sistema.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome Completo</label>
            <input
              type="text"
              name="nome"
              placeholder="Ex: João Silva"
              value={formData.nome}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail Institucional</label>
            <input
              type="email"
              name="email"
              placeholder="nome@empresa.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha de Acesso</label>
            <input
              type="password"
              name="senha"
              placeholder="No mínimo 8 caracteres"
              value={formData.senha}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirmar Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Repita a senha digitada"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Criando credenciais..." : "Finalizar Cadastro"}
          </button>
        </form>

        <p style={styles.footerText}>
          Já tem uma credencial? <Link to="/login" style={styles.link}>Fazer Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh', fontFamily: 'sans-serif' },
  card: { backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', width: '100%', maxWidth: '400px', color: '#333' },
  title: { margin: '0 0 6px 0', color: '#111', textAlign: 'center', fontSize: '26px', fontWeight: '700' },
  subtitle: { margin: '0 0 28px 0', color: '#666', textAlign: 'center', fontSize: '14px' },
  form: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#444' },
  input: { padding: '11px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', transition: 'border 0.2s' },
  button: { backgroundColor: '#007bff', color: '#fff', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' },
  footerText: { textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#555' },
  link: { color: '#007bff', textDecoration: 'none', fontWeight: '600' }
};