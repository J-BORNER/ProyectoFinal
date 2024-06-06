package com.proyectofinal.proyectofinal.citas;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitasRepository extends JpaRepository<citas, Long> {

    Optional<citas> findCitasByFechayhora(String fechayhora);

}
