<?php
include "Conexion.php";
include "CsTipoDocumento.php";
class DatoTipoDocumento{
    public $cnn;
        function __construct()
        {
            $conexion = new conexion();
            $this->cnn=$conexion ->conectar();
        }
        function CargarTipoDocu(){
            
            $Query = "SELECT * FROM tipodocumento";
            $result = mysqli_query($this->cnn,$Query);
            $array_tipoDocu = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_tipoDocu[]=$data;
            }
            echo json_encode($array_tipoDocu);
          
        }
    
   
    }
    // $DatoUsuario = new DatoUsuario();
    // $DatoUsuario -> CargarTipos();
    ?>