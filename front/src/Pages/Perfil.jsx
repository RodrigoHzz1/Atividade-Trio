import React, { useState } from 'react';

export default function Perfil() {
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('Administrador');
  const [email, setEmail] = useState('admin@dashboard.com');

  const handleSalvar = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Configurações do perfil atualizadas com sucesso!");
    }, 1200);
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <div style={styles.avatarSection}>
          <div style={styles.largeAvatar}>A</div>
          <div>
            <h2 style={styles.userName}>{nome}</h2>
            <p style={styles.userRole}>Super Administrador</p>
          </div>
        </div>

        <hr style={styles.divider} />

        <form onSubmit={handleSalvar} style={styles.form}>
          <h3 style={styles.sectionTitle}>Informações Pessoais</h3>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome de Exibição</label>
            <input 
              type="text" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)}
              style={styles.input} 
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail de Contato</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input} 
              required
            />
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: '12px' }}>Segurança da Conta</h3>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nova Senha (deixe em branco para manter)</label>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              style={styles.input} 
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Salvando alterações..." : "Salvar Configurações"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh', fontFamily: 'sans-serif' },
  profileCard: { backgroundColor: '#fff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px', color: '#333' },
  avatarSection: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' },
  largeAvatar: { width: '64px', height: '64px', backgroundColor: '#007bff', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontSize: '24px', fontWeight: 'bold' },
  userName: { margin: '0', fontSize: '20px', fontWeight: '700', color: '#111' },
  userRole: { margin: '4px 0 0 0', fontSize: '14px', color: '#666' },
  divider: { border: '0', height: '1px', backgroundColor: '#eee', margin: '20px 0' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  sectionTitle: { fontSize: '15px', fontWeight: '700', color: '#007bff', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#555' },
  input: { padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', color: '#333' },
  button: { backgroundColor: '#007bff', color: '#fff', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s', marginTop: '12px' }
};