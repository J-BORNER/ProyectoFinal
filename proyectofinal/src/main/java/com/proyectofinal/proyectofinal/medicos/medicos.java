package com.proyectofinal.proyectofinal.medicos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class medicos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String colegiado;
    private String nombre_completo;
    private String especialidad;
    private LocalDate fecha_registro;
    private String direccion;
    private String centro_hospitalario;
    private Integer edad;
    private String observacion;

    public medicos() {
    }

    public medicos(String colegiado, String nombre_completo, String especialidad, LocalDate fecha_registro, String direccion, String centro_hospitalario, int edad,
            String observacion) {
        this.colegiado = colegiado;
        this.nombre_completo = nombre_completo;
        this.especialidad = especialidad;
        this.fecha_registro = fecha_registro;
        this.direccion = direccion;
        this.centro_hospitalario = centro_hospitalario;
        this.edad = edad;
        this.observacion = observacion;
    }


    public medicos(Long id, String colegiado, String nombre_completo, String especialidad, LocalDate fecha_registro, String direccion, String centro_hospitalario,
            int edad, String observacion) {
                
                this.id = id;
                this.colegiado = colegiado;
                this.nombre_completo = nombre_completo;
                this.especialidad = especialidad;
                this.fecha_registro = fecha_registro;
                this.direccion = direccion;
                this.centro_hospitalario = centro_hospitalario;
                this.edad = edad;
                this.observacion = observacion;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColegiado() {
        return this.colegiado;
    }

    public void setColegiado(String colegiado) {
        this.colegiado = colegiado;
    }

    public String getNombre_completo() {
        return this.nombre_completo;
    }

    public void setNombre_completo(String nombre_completo) {
        this.nombre_completo = nombre_completo;
    }

    public String getEspecialidad() {
        return this.especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public LocalDate getFecha_registro() {
        return this.fecha_registro;
    }

    public void setFecha_registro(LocalDate fecha_registro) {
        this.fecha_registro = fecha_registro;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCentro_hospitalario() {
        return this.centro_hospitalario;
    }

    public void setCentro_hospitalario(String centro_hospitalario) {
        this.centro_hospitalario = centro_hospitalario;
    }

    public Integer getEdad() {
        return this.edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getObservacion() {
        return this.observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }



}