package com.proyectofinal.proyectofinal.medicos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicosRepository extends JpaRepository<medicos, Long> {

    Optional<medicos> findMedicosByColegiado(String colegiado);

}
