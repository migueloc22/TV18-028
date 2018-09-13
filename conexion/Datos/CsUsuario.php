<?php

    class CsUsuario{
        public $num_documento;
        public $nombre;
        public $apellido;
        public $correo;
        public $fecha_nac;
        public $fecha_registro;
        public $hora_registro;
        public $direccion;
        public $contrasena;
        public $celular;
        public $latitud;
        public $longitud;
        public $foto;
        public $hoja_vida;
        public $certificacion_estudio;
        public $fk_id_rol_usuario;
        public $fk_id_tipo_doc;
        public $fk_id_ciudad;
        public $fk_estado_usuario;
        
        function __construct( $num_documento, $nombre, $apellido, $correo, $fecha_nac, $fecha_registro, $hora_registro, $direccion, $contrasena, $celular, $latitud, $longitud, $foto, $hoja_vida, $certificacion_estudio, $fk_id_rol_usuario, $fk_id_tipo_doc, $fk_id_ciudad, $fk_estado_usuario)
            {   
                $this->num_documento=$num_documento;
                $this->nombre=$nombre;
                $this->apellido=$apellido;
                $this->correo=$correo;
                $this->fecha_nac=$fecha_nac;
                $this->fecha_registro=$fecha_registro;
                $this->hora_registro=$hora_registro;
                $this->direccion=$direccion;
                $this->contrasena=$contrasena;
                $this->celular=$celular;
                $this->latitud=$latitud;
                $this->longitud=$longitud;
                $this->foto=$foto;
                $this->hoja_vida=$hoja_vida;
                $this->certificacion_estudio=$certificacion_estudio;
                $this->fk_id_rol_usuario=$fk_id_rol_usuario;
                $this->fk_id_tipo_doc=$fk_id_tipo_doc;
                $this->fk_id_ciudad=$fk_id_ciudad;
                $this->fk_estado_usuario=$fk_estado_usuario; 
        
            }
    }
  
?>