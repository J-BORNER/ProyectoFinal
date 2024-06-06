package com.proyectofinal.proyectofinal.pacientes;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PacientesService {

    HashMap<String, Object> datos;

    private final PacientesRepository pacientesRepository;

    @Autowired
    public PacientesService(PacientesRepository pacientesRepository){
        this.pacientesRepository = pacientesRepository;
    }

    //método que devuelve o lista los datos en la tabla de la BD
    public List<pacientes> getPacientes(){
		return this.pacientesRepository.findAll();
	}

    //método que almacena y actualiza la información en la tabla de la BD
    public ResponseEntity<Object> newPaciente(pacientes pacientes) {

       Optional<pacientes> res =  pacientesRepository.findPacientesByNombre(pacientes.getNombre());
       datos = new HashMap<>();
       
       if (res.isPresent() && pacientes.getId() == null){
        datos.put("Error",true);
        datos.put("message","Ya existe un paciente con este nombre registrado en el sistema");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
                
       }

       datos.put("message","La información del paciente ha sido almacenada de forma exitosa");
       if (pacientes.getId() != null){
        datos.put("message","La información del paciente ha sido actualizada de forma exitosa");
       }
       pacientesRepository.save(pacientes);
       datos.put("data",pacientes);
       return new ResponseEntity<>(
            datos,
            HttpStatus.CREATED
       );
    }


    public ResponseEntity<Object> deletePaciente(Long id){
        datos = new HashMap<>();
        boolean existe = this.pacientesRepository.existsById(id);

        if (!existe){
            datos.put("Error",true);
            datos.put("message","No existe ningun paciente con este nombre");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
        }
        pacientesRepository.deleteById(id);
        datos.put("message","El paciente ha sido elminado de forma exitosa");
        return new ResponseEntity<>(
            datos,
            HttpStatus.ACCEPTED
        );

    }

}
