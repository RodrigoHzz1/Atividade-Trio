import React from 'react';

export default function Dashboard() {
  // Mock de dados simulando uma resposta de API profissional
  const usuariosRecentes = [
    { id: 1, nome: "Carlos Eduardo", email: "carlos.edu@empresa.com", perfil: "Admin", status: "Ativo" },
    { id: 2, nome: "Ana Beatriz Ramos", email: "ana.ramos@empresa.com", perfil: "Editor", status: "Ativo" },
    { id: 3, nome: "Rodrigo Souza", email: "rodrigo.s@empresa.com", perfil: "Usuário", status: "Inativo" },
  ];

  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Visão Geral do Sistema</h1>
        <p style={styles.subtitle}>Métricas de desempenho e gerenciamento de acessos em tempo real.</p>
      </header>

      {/* Grid de Cards de Indicadores */}
      <section style={styles.metricsGrid}>
        <div style={styles.metricCard}>
          <span style={styles.metricLabel}>Usuários Ativos</span>
          <h3 style={styles.metricValue}>1,248</h3>
          <span style={{ ...styles.metricBadge, color: '#28a745' }}>+12% este mês</span>
        </div>
        <div style={styles.metricCard}>
          <span style={styles.metricLabel}>Novos Cadastros</span>
          <h3 style={styles.metricValue}>84</h3>
          <span style={{ ...styles.metricBadge, color: '#007bff' }}>Meta: 100</span>
        </div>
        <div style={styles.metricCard}>
          <span style={styles.metricLabel}>Taxa de Retenção</span>
          <h3 style={styles.metricValue}>94.2%</h3>
          <span style={{ ...styles.metricBadge, color: '#28a745' }}>Estável</span>
        </div>
      </section>

      {/* Seção da Tabela de Dados */}
      <section style={styles.tableSection}>
        <h2 style={styles.sectionTitle}>Últimos Usuários Cadastros</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.theadRow}>
                <th style={styles.th}>Nome</th>
                <th style={styles.th}>E-mail</th>
                <th style={styles.th}>Nível de Acesso</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {usuariosRecentes.map((user, index) => (
                <tr key={user.id} style={index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                  <td style={styles.td}><strong>{user.nome}</strong></td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}><span style={styles.roleTag}>{user.perfil}</span></td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusDot,
                      backgroundColor: user.status === 'Ativo' ? '#28a745' : '#dc3545'
                    }} />
                    {user.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

const styles = {
  dashboardContainer: { fontFamily: '"Inter", sans-serif', maxWidth: '1200px', margin: '0 auto', color: '#fff' },
  header: { marginBottom: '32px' },
  mainTitle: { fontSize: '28px', fontWeight: '700', margin: '0 0 4px 0' },
  subtitle: { color: '#aaa', margin: '0', fontSize: '14px' },
  metricsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' },
  metricCard: { backgroundColor: '#1e222b', padding: '24px', borderRadius: '12px', border: '1px solid #2d3341', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  metricLabel: { fontSize: '14px', color: '#aaa', fontWeight: '500' },
  metricValue: { fontSize: '32px', fontWeight: '700', margin: '12px 0 4px 0', color: '#fff' },
  metricBadge: { fontSize: '12px', fontWeight: '600' },
  tableSection: { backgroundColor: '#1e222b', borderRadius: '12px', border: '1px solid #2d3341', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  sectionTitle: { fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' },
  tableWrapper: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' },
  theadRow: { borderBottom: '2px solid #2d3341' },
  th: { padding: '14px', color: '#aaa', fontWeight: '600' },
  td: { padding: '14px', verticalAlign: 'middle' },
  tableRowEven: { backgroundColor: '#1e222b', borderBottom: '1px solid #2d3341' },
  tableRowOdd: { backgroundColor: '#252a36', borderBottom: '1px solid #2d3341' },
  roleTag: { backgroundColor: '#2d3341', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' },
  statusDot: { display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', marginRight: '8px' }
};