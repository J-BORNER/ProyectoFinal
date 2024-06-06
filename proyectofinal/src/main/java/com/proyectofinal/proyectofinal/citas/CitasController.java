package com.proyectofinal.proyectofinal.citas;

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
@RequestMapping(path = "citas")
@CrossOrigin("*")
public class CitasController {

    private final CitasService citasService;

    @Autowired
    public CitasController(CitasService citasService){
        this.citasService = citasService;
    }

    //método que muestra todos los datos de la tabla    
    @GetMapping
    public List<citas> getCitas(){
        return citasService.getCitas();
    }


    //método para almacenar información en la base de datos
    @PostMapping
    public ResponseEntity<Object> registrarCitas(@RequestBody citas citas){
        return this.citasService.newCita(citas);
    }


    //método para actualizar información en la base de datos
    @PutMapping
    public ResponseEntity<Object> actualizarCitas(@RequestBody citas citas){
        return this.citasService.newCita(citas);
    }

    //método para eliminar información en la base de datos
    @DeleteMapping(path = "{citaId}")
    public ResponseEntity<Object> eliminarCitas(@PathVariable("citasId") Long id){
        return this.citasService.deleteCitas(id);
    }

}
