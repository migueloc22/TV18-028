<?php
    class CsTipo_servicio 
    {
        public $id_tipo_servicio;
        public $tipo_servicio;
        function __construct($id_tipo_servicio,$tipo_servicio){
            $this->id_tipo_servicio=$id_tipo_servicio;
            $this->tipo_servicio=$tipo_servicio;
        }
    }
    
?>