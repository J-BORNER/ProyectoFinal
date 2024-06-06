package com.proyectofinal.proyectofinal.citas;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CitasService {

    HashMap<String, Object> datos;

    private final CitasRepository citasRepository;

    @Autowired
    public CitasService(CitasRepository citasRepository){
        this.citasRepository = citasRepository;
    }

    //método que devuelve o lista los datos en la tabla de la BD
    public List<citas> getCitas(){
		return this.citasRepository.findAll();
	}

    //método que almacena y actualiza la información en la tabla de la BD
    public ResponseEntity<Object> newCita(citas citas) {

       Optional<citas> res = citasRepository.findCitasByFechayhora(citas.getFechayhora());
       datos = new HashMap<>();
       
       if (res.isPresent() && citas.getId() == null){
        datos.put("Error",true);
        datos.put("message","Ya existe una cita médica para esta fecha y hora en el sistema");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
                
       }

       datos.put("message","La información de la cita médica ha sido almacenada de forma exitosa");
       if (citas.getId() != null){
        datos.put("message","La información de la cita médica ha sido actualizada de forma exitosa");
       }
       citasRepository.save(citas);
       datos.put("data",citas);
       return new ResponseEntity<>(
            datos,
            HttpStatus.CREATED
       );
    }


    public ResponseEntity<Object> deleteCitas(Long id){
        datos = new HashMap<>();
        boolean existe = this.citasRepository.existsById(id);

        if (!existe){
            datos.put("Error",true);
            datos.put("message","No existe una cita médica con ese código");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
        }
        citasRepository.deleteById(id);
        datos.put("message","La cita médica ha sido elminado de forma exitosa");
        return new ResponseEntity<>(
            datos,
            HttpStatus.ACCEPTED
        );

    }

}
