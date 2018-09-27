<?php
include "Conexion.php";
include "CsDetalle_cita.php";
class DatoUsuario_servicio {
    public $cnn;
    function __construct()
    {
        $conexion = new conexion();
        $this->cnn=$conexion ->conectar();
    }
    
    function AgregarUsuario_servicio(Usuario_servicio  $Usuario_servicio ){  
        try {
            $stmt = mysqli_prepare($this->cnn, "INSERT INTO usuario_servicio (fk_id_usuario, fk_id_tipo_servicio) VALUES (?,?)");
            mysqli_stmt_bind_param($stmt, 'ss',  $fk_id_usuario, $fk_id_tipo_servicio);
            $fk_id_cita=$Usuario_servicio ->fk_id_usuario;
            $fk_id_tipo_servicio=$Usuario_servicio ->fk_id_tipo_servicio;
        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            echo json_encode("1") ;
        } catch (mysqli_sql_exception $e) {
            echo json_encode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }

    function Modificar(){

    }
    function BuscarUsuario_servicio(){
        $Query = "SELECT * FROM usuario_servicio";
        $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
    }
    function FilterUsuario_servicio($filter){
        $Query = "SELECT * FROM usuario_servicio  $filter";
        $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
    }
}
?>