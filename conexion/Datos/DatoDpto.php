<?php
include "Conexion.php";
include "CsDepto.php";
ini_set('default_charset', 'utf-8');
class DatoDpto{
    public $cnn;
        function __construct()
        {
            $conexion = new conexion();
            $this->cnn=$conexion ->conectar();
        }
        function CargarDpto(){
            
            $Query = "SELECT * FROM departamento ";
            $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                
                html_entity_decode($data['Depto']);

                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
            
        }

    
   
    }

    ?>