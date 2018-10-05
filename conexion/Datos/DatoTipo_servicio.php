<?php
include "Conexion.php";
include "CsTipo_servicio.php";
ini_set('default_charset', 'utf-8');
class DatoTipo_servicio{
    public $cnn;
        function __construct()
        {
            $conexion = new conexion();
            $this->cnn=$conexion ->conectar();
        }
        function CargarTipo_servicio(){
            
            $Query = "SELECT * FROM tipo_servicio ";
            $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                
                html_entity_decode($data['tipo_servicio']);

                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
            
        }
        function FilterTipo_servicio($filter){
            
            $Query = "SELECT * FROM tipo_servicio $filter";
            $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                
                html_entity_decode($data['tipo_servicio']);

                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
            
        }

    
   
    }

    ?>