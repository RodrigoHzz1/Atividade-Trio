package com.example.Atividade_trio.dto;

public class FornecedorResponseDTO {

    private Long id; // Adicionado para bater com a listagem e salvar do service
    private String nome;
    private String cnpj;
    private String email;
    private String telefone;
    private String categoria;

    public FornecedorResponseDTO() {
    }

    public FornecedorResponseDTO(Long id, String nome, String cnpj, String email, String telefone, String categoria) {
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.email = email;
        this.telefone = telefone;
        this.categoria = categoria;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCnpj() { return cnpj; }
    public void setCnpj(String cnpj) { this.cnpj = cnpj; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
}