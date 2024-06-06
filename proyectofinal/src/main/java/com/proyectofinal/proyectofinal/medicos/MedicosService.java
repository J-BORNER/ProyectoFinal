package com.proyectofinal.proyectofinal.medicos;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MedicosService {

    HashMap<String, Object> datos;

    private final MedicosRepository medicosRepository;

    @Autowired
    public MedicosService(MedicosRepository medicosRepository){
        this.medicosRepository = medicosRepository;
    }

    //método que devuelve o lista los datos en la tabla de la BD
    public List<medicos> getMedicos(){
		return this.medicosRepository.findAll();
	}

    //método que almacena y actualiza la información en la tabla de la BD
    public ResponseEntity<Object> newMedico(medicos medicos) {

       Optional<medicos> res = medicosRepository.findMedicosByColegiado(medicos.getColegiado());
       datos = new HashMap<>();
       
       if (res.isPresent() && medicos.getId() == null){
        datos.put("Error",true);
        datos.put("message","Ya existe un médico con este colegiado registrado en el sistema");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
                
       }

       datos.put("message","La información del médico ha sido almacenada de forma exitosa");
       if (medicos.getId() != null){
        datos.put("message","La información del médico ha sido actualizada de forma exitosa");
       }
       medicosRepository.save(medicos);
       datos.put("data",medicos);
       return new ResponseEntity<>(
            datos,
            HttpStatus.CREATED
       );
    }


    public ResponseEntity<Object> deleteMedico(Long id){
        datos = new HashMap<>();
        boolean existe = this.medicosRepository.existsById(id);

        if (!existe){
            datos.put("Error",true);
            datos.put("message","No existe un médico con ese código");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
        }
        medicosRepository.deleteById(id);
        datos.put("message","El médico ha sido elminado de forma exitosa");
        return new ResponseEntity<>(
            datos,
            HttpStatus.ACCEPTED
        );

    }


}
