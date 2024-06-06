package com.proyectofinal.proyectofinal.pacientes;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacientesRepository extends JpaRepository<pacientes, Long> {

    Optional<pacientes> findPacientesByNombre(String nombre);
    
}
