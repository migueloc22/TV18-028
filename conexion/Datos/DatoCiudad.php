<?php
include "Conexion.php";
include "CsCiudad.php";
class DatoCiudad{
    public $cnn;
        function __construct()
        {
            $conexion = new conexion();
            $this->cnn=$conexion ->conectar();
        }
        function CargarCiuDpto($idDpto){

    
            
            $Query = "SELECT * FROM ciudad WHERE IdDepto=$idDpto ";
            $result = mysqli_query($this->cnn,$Query);
            $array_Ciudad = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_Ciudad[]=$data;
            }
            echo json_encode($array_Ciudad);
          
        }
    
   
    }
  
    ?>