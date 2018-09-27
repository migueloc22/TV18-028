<?php
    class CsUsuario_servicio 
    {
        public $id_usuario_servicio;
        public $fk_id_usuario;
        public $fk_id_tipo_servicio;

        function __construct(  $id_usuario_servicio,  $fk_id_usuario,  $fk_id_tipo_servicio){
            $this->id_usuario_servicio=$id_usuario_servicio;
            $this->fk_id_usuario=$fk_id_usuario;
            $this->fk_id_tipo_servicio=$fk_id_tipo_servicio;
        }
    }
    
?>