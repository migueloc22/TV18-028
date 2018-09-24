<?php
    class CsCita 
    {
        public $id_cita;
        public $codigo;
        public $toltal;
        public $duracion;
        public $fecha_registro;
        public $fecha_cita;
        public $hora_inicia;
        public $hora_final;
        public $latitud;
        public $longitud;
        public $comentario;
        public $fk_id_tomador;
        public $fk_id_prestador;
        public $fk_estado_cita;
        public $visto;
        function __construct($id_cita, $codigo, $toltal, $duracion, $fecha_registro, $fecha_cita, $hora_inicia, $hora_final, $latitud, $longitud, $comentario,$visto, $fk_id_tomador, $fk_id_prestador, $fk_estado_cita){
             $this->id_cita=$id_cita;
             $this->codigo=$codigo;
             $this->toltal=$toltal;
             $this->duracion=$duracion;
             $this->fecha_registro=$fecha_registro;
             $this->fecha_cita=$fecha_cita;
             $this->hora_inicia=$hora_inicia;
             $this->hora_final=$hora_final;
             $this->latitud=$latitud;
             $this->longitud=$longitud;
             $this->comentario=$comentario;
             $this->fk_id_tomador=$fk_id_tomador;
             $this->fk_id_prestador=$fk_id_prestador;
             $this->fk_estado_cita=$fk_estado_cita;
             $this->visto=$visto;
        }
    }
    
?>