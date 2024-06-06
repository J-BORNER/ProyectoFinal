package com.proyectofinal.proyectofinal.usuarios;

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
@RequestMapping(path = "usuarios")
@CrossOrigin("*")
public class UsuariosController {

    private final UsuariosService usuariosService;

    @Autowired
    public UsuariosController(UsuariosService usuariosService){
        this.usuariosService = usuariosService;
    }

    //método que muestra todos los datos de la tabla    
    @GetMapping
    public List<usuario> getUsuarios(){
        return usuariosService.getUsuarios();
    }


    //método para almacenar información en la base de datos
    @PostMapping
    public ResponseEntity<Object> registrarUsuarios(@RequestBody usuario usuarios){
        return this.usuariosService.newUsuario(usuarios);
    }


    //método para actualizar información en la base de datos
    @PutMapping
    public ResponseEntity<Object> actualizarUsuarios(@RequestBody usuario usuarios){
        return this.usuariosService.newUsuario(usuarios);
    }

    //método para eliminar información en la base de datos
    @DeleteMapping(path = "{usuarioId}")
    public ResponseEntity<Object> eliminarUsuarios(@PathVariable("usuarioId") Long id){
        return this.usuariosService.deleteUsuarios(id);
    }

}
