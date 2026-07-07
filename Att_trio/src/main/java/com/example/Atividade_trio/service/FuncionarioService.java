package com.example.Atividade_trio.service;

import com.example.Atividade_trio.dto.FuncionarioRequestDTO;
import com.example.Atividade_trio.dto.FuncionarioResponseDTO;
import com.example.Atividade_trio.model.FuncionarioModel;
import com.example.Atividade_trio.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository repository;

    public List<FuncionarioResponseDTO> listarTodos() {
        return repository.findAll().stream()
                .map(f -> new FuncionarioResponseDTO(
                        f.getId(),
                        f.getNome(),
                        f.getTelefone(),
                        f.getEmail(),
                        f.getCargo(),
                        f.getSetor()
                ))
                .toList();
    }

    public FuncionarioResponseDTO salvarFuncionario(FuncionarioRequestDTO dto) {
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Funcionário já cadastrado com este E-mail");
        }

        FuncionarioModel novoFuncionario = new FuncionarioModel();
        novoFuncionario.setNome(dto.getNome());
        novoFuncionario.setTelefone(dto.getTelefone());
        novoFuncionario.setEmail(dto.getEmail());
        novoFuncionario.setCargo(dto.getCargo());
        novoFuncionario.setSetor(dto.getSetor());

        repository.save(novoFuncionario);

        return new FuncionarioResponseDTO(
                novoFuncionario.getId(),
                novoFuncionario.getNome(),
                novoFuncionario.getTelefone(),
                novoFuncionario.getEmail(),
                novoFuncionario.getCargo(),
                novoFuncionario.getSetor()
        );
    }

    public void deletarFuncionario(Long id) {
        FuncionarioModel funcionario = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));

        repository.delete(funcionario);
    }

    public FuncionarioResponseDTO atualizarFuncionario(Long id, FuncionarioRequestDTO dto) {
        FuncionarioModel funcionarioExistente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));

        Optional<FuncionarioModel> funcionarioComEmail = repository.findByEmail(dto.getEmail());
        if (funcionarioComEmail.isPresent() && funcionarioComEmail.get().getId() != id) {
            throw new RuntimeException("Este E-mail já está em uso por outro funcionário");
        }

        funcionarioExistente.setNome(dto.getNome());
        funcionarioExistente.setTelefone(dto.getTelefone());
        funcionarioExistente.setEmail(dto.getEmail());
        funcionarioExistente.setCargo(dto.getCargo());
        funcionarioExistente.setSetor(dto.getSetor());

        repository.save(funcionarioExistente);

        return new FuncionarioResponseDTO(
                funcionarioExistente.getId(),
                funcionarioExistente.getNome(),
                funcionarioExistente.getTelefone(),
                funcionarioExistente.getEmail(),
                funcionarioExistente.getCargo(),
                funcionarioExistente.getSetor()
        );
    }
}