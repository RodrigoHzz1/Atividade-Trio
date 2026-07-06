package com.example.Atividade_trio.repository;

import com.example.Atividade_trio.model.FornecedoresModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FornecedoresRepository extends JpaRepository<FornecedoresModel, Long> {

    Optional<FornecedoresModel> findByCnpj(String cnpj);

    Optional<FornecedoresModel> findByEmail(String email);
}