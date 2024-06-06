package com.proyectofinal.proyectofinal.usuarios;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;
    private String nombre;
    private String email;
    private String telefono;
    private String rol;

    public usuario() {
    }

     public usuario(String username, String password, String nombre, String email, String telefono, String rol) {
                
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.rol = rol;
    }


     public usuario(Long id, String username, String password, String nombre, String email, String telefono, String rol) {
           
        this.id = id;
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.rol = rol;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return this.telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getRol() {
        return this.rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

  


    

    
}
