package com.proyectofinal.proyectofinal.medicos;

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
@RequestMapping(path = "medicos")
@CrossOrigin("*")
public class MedicoController {

    private final MedicosService medicosService;

    @Autowired
    public MedicoController(MedicosService medicosService){
        this.medicosService = medicosService;
    }

    //método que muestra todos los datos de la tabla    
    @GetMapping
    public List<medicos> getMedicos(){
        return medicosService.getMedicos();
    }


    //método para almacenar información en la base de datos
    @PostMapping
    public ResponseEntity<Object> registrarMedicos(@RequestBody medicos medicos){
        return this.medicosService.newMedico(medicos);
    }


    //método para actualizar información en la base de datos
    @PutMapping
    public ResponseEntity<Object> actualizarMedicos(@RequestBody medicos medicos){
        return this.medicosService.newMedico(medicos);
    }

    //método para eliminar información en la base de datos
    @DeleteMapping(path = "{medicoId}")
    public ResponseEntity<Object> eliminarMedicos(@PathVariable("medicoId") Long id){
        return this.medicosService.deleteMedico(id);
    }
	

}
