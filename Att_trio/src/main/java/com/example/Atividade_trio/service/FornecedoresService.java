package com.example.Atividade_trio.service;

import com.example.Atividade_trio.dto.FornecedorRequestDTO;
import com.example.Atividade_trio.dto.FornecedorResponseDTO;
import com.example.Atividade_trio.model.FornecedoresModel;
import com.example.Atividade_trio.repository.FornecedoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FornecedoresService {

    @Autowired
    private FornecedoresRepository repository;

    public List<FornecedorResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(f -> new FornecedorResponseDTO(
                        f.getId(), // Injetando o ID na listagem
                        f.getNome(),
                        f.getCnpj(),
                        f.getEmail(),
                        f.getTelefone(),
                        f.getCategoria()
                ))
                .toList();
    }

    public FornecedorResponseDTO salvarFornecedor(FornecedorRequestDTO dto) {
        if (repository.findByCnpj(dto.getCnpj()).isPresent()) {
            throw new RuntimeException("Fornecedor já cadastrado com este CNPJ");
        }

        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Fornecedor já cadastrado com este E-mail");
        }

        FornecedoresModel novoFornecedor = new FornecedoresModel();
        novoFornecedor.setNome(dto.getNome());
        novoFornecedor.setCnpj(dto.getCnpj());
        novoFornecedor.setEmail(dto.getEmail());
        novoFornecedor.setTelefone(dto.getTelefone());
        novoFornecedor.setCategoria(dto.getCategoria());

        repository.save(novoFornecedor);

        return new FornecedorResponseDTO(
                novoFornecedor.getId(), // Enviando o novo ID gerado
                novoFornecedor.getNome(),
                novoFornecedor.getCnpj(),
                novoFornecedor.getEmail(),
                novoFornecedor.getTelefone(),
                novoFornecedor.getCategoria()
        );
    }

    public void deletarFornecedor(Long id) {
        FornecedoresModel fornecedor = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fornecedor não encontrado"));

        repository.delete(fornecedor);
    }

    public FornecedorResponseDTO atualizarFornecedor(Long id, FornecedorRequestDTO dto) {
        FornecedoresModel fornecedorExistente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fornecedor não encontrado"));

        Optional<FornecedoresModel> fornecedorComCnpj = repository.findByCnpj(dto.getCnpj());
        if (fornecedorComCnpj.isPresent() && fornecedorComCnpj.get().getId() != id) {
            throw new RuntimeException("Este CNPJ já está em uso por outro fornecedor");
        }

        Optional<FornecedoresModel> fornecedorComEmail = repository.findByEmail(dto.getEmail());
        if (fornecedorComEmail.isPresent() && fornecedorComEmail.get().getId() != id) {
            throw new RuntimeException("Este E-mail já está em uso por outro fornecedor");
        }

        fornecedorExistente.setNome(dto.getNome());
        fornecedorExistente.setCnpj(dto.getCnpj());
        fornecedorExistente.setEmail(dto.getEmail());
        fornecedorExistente.setTelefone(dto.getTelefone());
        fornecedorExistente.setCategoria(dto.getCategoria());

        repository.save(fornecedorExistente);

        return new FornecedorResponseDTO(
                fornecedorExistente.getId(), // Mantendo o ID na resposta de atualização
                fornecedorExistente.getNome(),
                fornecedorExistente.getCnpj(),
                fornecedorExistente.getEmail(),
                fornecedorExistente.getTelefone(),
                fornecedorExistente.getCategoria()
        );
    }
}