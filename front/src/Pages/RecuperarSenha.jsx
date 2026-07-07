import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleRecuperar = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulação assíncrona de envio de e-mail de recuperação
    setTimeout(() => {
      setLoading(false);
      setSucesso(true);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Recuperar Senha</h2>
        
        {!sucesso ? (
          <>
            <p style={styles.subtitle}>Insira o e-mail associado à sua conta. Enviaremos um link seguro para redefinir suas credenciais.</p>
            
            <form onSubmit={handleRecuperar} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Endereço de E-mail</label>
                <input
                  type="email"
                  placeholder="exemplo@dominio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>

              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? "Processando envio..." : "Enviar Link de Recuperação"}
              </button>
            </form>
          </>
        ) : (
          <div style={styles.successState}>
            <div style={styles.successIcon}>✓</div>
            <h3 style={styles.successTitle}>E-mail Enviado!</h3>
            <p style={styles.subtitle}>Se o endereço <strong>{email}</strong> estiver em nossa base de dados, você receberá as instruções em instantes.</p>
          </div>
        )}

        <p style={styles.footerText}>
          Lembrou a senha? <Link to="/login" style={styles.link}>Voltar para o Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh', fontFamily: 'sans-serif' },
  card: { backgroundColor: '#fff', padding: '35px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', color: '#333' },
  title: { margin: '0 0 10px 0', color: '#222', textAlign: 'center', fontSize: '24px', fontWeight: '700' },
  subtitle: { margin: '0 0 24px 0', color: '#666', textAlign: 'center', fontSize: '14px', lineHeight: '1.5' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '14px', fontWeight: '600', color: '#444' },
  input: { padding: '10px 12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none' },
  button: { backgroundColor: '#007bff', color: '#fff', padding: '12px', border: 'none', borderRadius: '5px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s' },
  successState: { display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' },
  successIcon: { width: '48px', height: '48px', backgroundColor: '#28a745', color: '#fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' },
  successTitle: { fontSize: '18px', margin: '0 0 8px 0', color: '#28a745' },
  footerText: { textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#555' },
  link: { color: '#007bff', textDecoration: 'none', fontWeight: '600' }
};