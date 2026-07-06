import React, { useState } from 'react';
import Navbar from '../Componentes/Navbar';
import Header from '../Componentes/Header';
import Input from '../Componentes/input';
import Card from '../Componentes/card';
import Footer from '../Componentes/Footer';

export default function GerenciamentoPage() {
  // Estado para o formulário de cadastro
  const [formData, setFormData] = useState({ nome: '', email: '' });
  
  // Estado simulando a lista que vem do Back-end
  const [lista, setLista] = useState([
    { id: 1, nome: 'João Silva', email: 'joao@email.com' },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    // Aqui entra a integração com o Back-end (ex: axios.post)
    const novoItem = { id: Date.now(), ...formData };
    setLista([...lista, novoItem]);
    setFormData({ nome: '', email: '' }); // Limpa os inputs
  };

  const handleDeletar = (id) => {
    // Aqui entra o axios.delete para o Back-end
    setLista(lista.filter(item => item.id !== id));
  };

  return (
    <div className="page-container">
      <Navbar />
      
      <main className="content">
        <Header title="Gerenciamento de Usuários" />
        
        {/* Formulário de Cadastro usando seu componente de Input */}
        <form onSubmit={handleCadastrar} className="cadastro-form">
          <Input 
            label="Nome Completo" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            placeholder="Digite o nome"
          />
          <Input 
            label="E-mail" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Digite o e-mail"
          />
          <button type="submit" className="btn-submit">Salvar Cadastro</button>
        </form>

        <hr />

        {/* Listagem dos cadastros usando seu componente de Card */}
        <div className="cards-grid">
          {lista.map(item => (
            <Card 
              key={item.id}
              id={item.id}
              title={item.nome}
              subtitle={item.email}
              onDelete={handleDeletar}
              onEdit={(id) => console.log('Editar o id:', id)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}