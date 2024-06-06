package com.proyectofinal.proyectofinal.pacientes;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class pacientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String nombre;
    private LocalDate fecha_nacimiento;
    private String direccion;
    private Integer edad;
    private Integer estado;

    public pacientes( ) {
    }

    public pacientes( String nombre, LocalDate fecha_nacimiento, String direccion, int edad, int estado) {
                
        this.nombre = nombre;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.edad = edad;
        this.estado = estado;
    }

    public pacientes(Long id, String nombre, LocalDate fecha_nacimiento, String direccion, int edad, int estado) {
                
        this.id = id;
        this.nombre = nombre;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.edad = edad;
        this.estado = estado;
    }
    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFecha_nacimiento() {
        return this.fecha_nacimiento;
    }

    public void setFecha_nacimiento(LocalDate fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Integer getEdad() {
        return this.edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public Integer getEstado() {
        return this.estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }
    
}
