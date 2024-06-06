package com.proyectofinal.proyectofinal.citas;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class citas {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     @Column(unique = true)
     private String fechayhora;
     private Integer paciente_id;
     private Integer medico_id;
     private Integer estado_cita;


     public citas() {
    }

     public citas(String fechayhora, String hora_cita, int paciente_id, int medico_id, int estado_cita) {
                
        this.fechayhora = fechayhora;
        this.paciente_id = paciente_id;
        this.medico_id = medico_id;
        this.estado_cita = estado_cita;
    }


     public citas(Long id, String fechayhora, String hora_cita, int paciente_id, int medico_id, int estado_cita) {
                
        this.id = id;
        this.fechayhora = fechayhora;
        this.paciente_id = paciente_id;
        this.medico_id = medico_id;
        this.estado_cita = estado_cita;
    }


     public Long getId() {
         return this.id;
     }

     public void setId(Long id) {
         this.id = id;
     }

     public String getFechayhora() {
         return this.fechayhora;
     }

     public void setFechayhora(String fechayhora) {
         this.fechayhora = fechayhora;
     }

     public Integer getPaciente_id() {
         return this.paciente_id;
     }

     public void setPaciente_id(Integer paciente_id) {
         this.paciente_id = paciente_id;
     }

     public Integer getMedico_id() {
         return this.medico_id;
     }

     public void setMedico_id(Integer medico_id) {
         this.medico_id = medico_id;
     }

     public Integer getEstado_cita() {
         return this.estado_cita;
     }

     public void setEstado_cita(Integer estado_cita) {
         this.estado_cita = estado_cita;
     }

         
}
