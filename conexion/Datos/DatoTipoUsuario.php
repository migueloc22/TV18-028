<?php
include "Conexion.php";
include "CsTipoUsuario.php";
class DatoTipoUsuario{
    public $cnn;
        function __construct()
        {
            $conexion = new conexion();
            $this->cnn=$conexion ->conectar();
        }
        function CargarTipoUsuario(){
            
            $Query = "SELECT * FROM tipousuario";
            $result = mysqli_query($this->cnn,$Query);
            $array_tipoUser = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_tipoUser[]=$data;
            }
            echo json_encode($array_tipoUser);
          
        }
    
   
    }
    // $DatoUsuario = new DatoUsuario();
    // $DatoUsuario -> CargarTipos();
    ?>