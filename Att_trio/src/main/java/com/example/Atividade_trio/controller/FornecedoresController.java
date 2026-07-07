package com.example.Atividade_trio.controller;

import com.example.Atividade_trio.dto.FornecedorRequestDTO;
import com.example.Atividade_trio.dto.FornecedorResponseDTO;
import com.example.Atividade_trio.service.FornecedoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/fornecedores")
@CrossOrigin(origins = "*") // Proteção de CORS habilitada para o front-end
public class FornecedoresController {

    @Autowired
    private FornecedoresService service;

    @GetMapping
    public ResponseEntity<List<FornecedorResponseDTO>> listarTodos() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(service.listarTodos());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@RequestBody FornecedorRequestDTO dto) {
        FornecedorResponseDTO fornecedorSalvo = service.salvarFornecedor(dto);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of(
                        "Mensagem", "Fornecedor cadastrado com sucesso",
                        "id", fornecedorSalvo.getId()
                ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @RequestBody FornecedorRequestDTO dto) {
        FornecedorResponseDTO fornecedorAtualizado = service.atualizarFornecedor(id, dto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of(
                        "Mensagem", "Fornecedor atualizado com sucesso",
                        "id", fornecedorAtualizado.getId()
                ));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deletar(@PathVariable Long id) {
        service.deletarFornecedor(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("Mensagem", "Fornecedor deletado com sucesso"));
    }
}