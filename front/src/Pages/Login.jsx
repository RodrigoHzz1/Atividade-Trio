import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulação assíncrona de autenticação segura
    setTimeout(() => {
      setLoading(false);
      console.log("Autenticado com sucesso:", email);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Autenticação</h2>
        <p style={styles.subtitle}>Insira as credenciais para acessar o ecossistema.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail Corporativo</label>
            <input
              type="email"
              placeholder="seu-nome@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha Corporativa</label>
            <input
              type="password"
              placeholder="••••••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={{ textAlign: 'right', marginTop: '-4px' }}>
            <Link to="/recuperar" style={{ ...styles.link, fontSize: '13px' }}>
              Esqueceu sua credencial?
            </Link>
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Validando Token..." : "Entrar no Sistema"}
          </button>
        </form>

        <p style={styles.footerText}>
          Novo na organização? <Link to="/cadastro" style={styles.link}>Solicitar Acesso</Link>
        </p>
      </div>
    </div>
  );
}

// Os estilos seguem exatamente o mesmo objeto central unificado do Cadastro
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh', fontFamily: 'sans-serif' },
  card: { backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', width: '100%', maxWidth: '400px', color: '#333' },
  title: { margin: '0 0 6px 0', color: '#111', textAlign: 'center', fontSize: '26px', fontWeight: '700' },
  subtitle: { margin: '0 0 28px 0', color: '#666', textAlign: 'center', fontSize: '14px' },
  form: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#444' },
  input: { padding: '11px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', outline: 'none' },
  button: { backgroundColor: '#007bff', color: '#fff', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' },
  footerText: { textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#555' },
  link: { color: '#007bff', textDecoration: 'none', fontWeight: '600' }
};