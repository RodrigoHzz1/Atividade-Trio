package com.example.Atividade_trio.service;

import com.example.Atividade_trio.dto.ClienteRequestDTO;
import com.example.Atividade_trio.dto.ClienteResponseDTO;
import com.example.Atividade_trio.model.ClienteModel;
import com.example.Atividade_trio.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public List<ClienteResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(c -> new ClienteResponseDTO(
                        c.getId(),
                        c.getNome(),
                        c.getEmail(),
                        c.getTelefone(),
                        c.getCpf()
                ))
                .toList();
    }

    public ClienteResponseDTO salvarCliente(ClienteRequestDTO dto) {
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Cliente já cadastrado com este E-mail");
        }

        if (repository.findByCpf(dto.getCpf()).isPresent()) {
            throw new RuntimeException("Cliente já cadastrado com este CPF");
        }

        ClienteModel novoCliente = new ClienteModel();
        novoCliente.setNome(dto.getNome());
        novoCliente.setEmail(dto.getEmail());
        novoCliente.setTelefone(dto.getTelefone());
        novoCliente.setCpf(dto.getCpf());

        repository.save(novoCliente);

        return new ClienteResponseDTO(
                novoCliente.getId(),
                novoCliente.getNome(),
                novoCliente.getEmail(),
                novoCliente.getTelefone(),
                novoCliente.getCpf()
        );
    }

    public void deletarCliente(Long id) {
        ClienteModel cliente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado:"));

        repository.delete(cliente);
    }

    public ClienteResponseDTO atualizarCliente(Long id, ClienteRequestDTO dto) {
        ClienteModel clienteExistente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Optional<ClienteModel> clienteComEmail = repository.findByEmail(dto.getEmail());
        if (clienteComEmail.isPresent() && clienteComEmail.get().getId() != id) {
            throw new RuntimeException("Este E-mail já está em uso por outro cliente");
        }

        Optional<ClienteModel> clienteComCpf = repository.findByCpf(dto.getCpf());
        if (clienteComCpf.isPresent() && clienteComCpf.get().getId() != id) {
            throw new RuntimeException("Este CPF já está em uso por outro cliente");
        }

        clienteExistente.setNome(dto.getNome());
        clienteExistente.setEmail(dto.getEmail());
        clienteExistente.setTelefone(dto.getTelefone());
        clienteExistente.setCpf(dto.getCpf());

        repository.save(clienteExistente);

        return new ClienteResponseDTO(
                clienteExistente.getId(),
                clienteExistente.getNome(),
                clienteExistente.getEmail(),
                clienteExistente.getTelefone(),
                clienteExistente.getCpf()
        );
    }
}