package com.proyectofinal.proyectofinal.pacientes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "pacientes")
@CrossOrigin("*")
public class PacientesController {

    private final PacientesService pacientesService;

    @Autowired
    public PacientesController(PacientesService pacientesService){
        this.pacientesService = pacientesService;
    }

    //método que muestra todos los datos de la tabla    
    @GetMapping
    public List<pacientes> getPacientes(){
        return pacientesService.getPacientes();
    }


    //método para almacenar información en la base de datos
    @PostMapping
    public ResponseEntity<Object> registrarPacientes(@RequestBody pacientes pacientes){
        return this.pacientesService.newPaciente(pacientes);
    }


    //método para actualizar información en la base de datos
    @PutMapping
    public ResponseEntity<Object> actualizarPacientes(@RequestBody pacientes pacientes){
        return this.pacientesService.newPaciente(pacientes);
    }

    //método para eliminar información en la base de datos
    @DeleteMapping(path = "{pacienteId}")
    public ResponseEntity<Object> eliminarPacientes(@PathVariable("pacienteId") Long id){
        return this.pacientesService.deletePaciente(id);
    }

}
