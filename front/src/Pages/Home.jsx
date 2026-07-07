import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.welcomeBox}>
        <div style={styles.iconContainer}>⚙️</div>
        <h1 style={styles.title}>AdminDashboard Ecosystem</h1>
        <p style={styles.subtitle}>
          Bem-vindo à plataforma central de governança. Aqui você gerencia acessos, 
          analisa métricas de desempenho e edita configurações corporativas de forma integrada.
        </p>
        
        <div style={styles.buttonGroup}>
          <button onClick={() => navigate('/login')} style={styles.primaryButton}>
            Acessar o Painel
          </button>
          <button onClick={() => navigate('/cadastro')} style={styles.secondaryButton}>
            Cadastrar Novo Operador
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', fontFamily: '"Inter", sans-serif', color: '#fff' },
  welcomeBox: { textAlign: 'center', maxWidth: '600px', padding: '40px 20px' },
  iconContainer: { fontSize: '64px', marginBottom: '20px', animation: 'pulse 2s infinite' },
  title: { fontSize: '36px', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-0.5px' },
  subtitle: { fontSize: '16px', color: '#aaa', lineHeight: '1.6', margin: '0 0 32px 0' },
  buttonGroup: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  primaryButton: { backgroundColor: '#007bff', color: '#fff', padding: '14px 28px', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' },
  secondaryButton: { backgroundColor: 'transparent', color: '#fff', padding: '14px 28px', border: '1px solid #2d3341', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }
};