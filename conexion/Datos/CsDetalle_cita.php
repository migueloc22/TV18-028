<?php
    class CsDetalle_cita 
    {
        public $id_detalle_cita;
        public $fk_id_cita;
        public $fk_id_tipo_servicio;
        function __construct( $id_detalle_cita,  $fk_id_cita,  $fk_id_tipo_servicio){
            $this->id_detalle_cita=$id_detalle_cita;
            $this->fk_id_cita=$fk_id_cita;
            $this->fk_id_tipo_servicio=$fk_id_tipo_servicio;
        }
    }
    
?>