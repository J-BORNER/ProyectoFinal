package com.proyectofinal.proyectofinal.usuarios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UsuariosRepository extends JpaRepository<usuario, Long> {

     Optional<usuario> findUsuarioByUsername(String username);

}
