package com.proyectofinal.proyectofinal.usuarios;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UsuariosService {

     HashMap<String, Object> datos;

    private final UsuariosRepository usuariosRepository;

    @Autowired
    public UsuariosService(UsuariosRepository usuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    //método que devuelve o lista los datos en la tabla de la BD
    public List<usuario> getUsuarios(){
		return this.usuariosRepository.findAll();
	}

    //método que almacena y actualiza la información en la tabla de la BD
    public ResponseEntity<Object> newUsuario(usuario usuario) {

       Optional<usuario> res = usuariosRepository.findUsuarioByUsername(usuario.getUsername());
       datos = new HashMap<>();
       
       if (res.isPresent() && usuario.getId() == null){
        datos.put("Error",true);
        datos.put("message","Ya existe el usuario en el sistema");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
                
       }

       datos.put("message","La información del usuario ha sido almacenada de forma exitosa");
       if (usuario.getId() != null){
        datos.put("message","La información del usuario ha sido actualizada de forma exitosa");
       }
       usuariosRepository.save(usuario);
       datos.put("data",usuario);
       return new ResponseEntity<>(
            datos,
            HttpStatus.CREATED
       );
    }


    public ResponseEntity<Object> deleteUsuarios(Long id){
        datos = new HashMap<>();
        boolean existe = this.usuariosRepository.existsById(id);

        if (!existe){
            datos.put("Error",true);
            datos.put("message","No existe un usuario con ese código");
            return new ResponseEntity<>(
                datos,
                HttpStatus.CONFLICT 
            );
        }
        usuariosRepository.deleteById(id);
        datos.put("message","El usuario ha sido eliminado de forma exitosa");
        return new ResponseEntity<>(
            datos,
            HttpStatus.ACCEPTED
        );

    }

}
