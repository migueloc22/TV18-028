<?php
include "Conexion.php";
include "CsDetalle_cita.php";
class DatoDetalle_cita{
    public $cnn;
    function __construct()
    {
        $conexion = new conexion();
        $this->cnn=$conexion ->conectar();
    }
    
    function AgregarDtCita(CsDetalle_cita $CsDetalle_cita){  
        try {
            $stmt = mysqli_prepare($this->cnn, "INSERT INTO detalle_cita (fk_id_cita, fk_id_tipo_servicio) VALUES (?,?)");
            mysqli_stmt_bind_param($stmt, 'ss',  $fk_id_cita, $fk_id_tipo_servicio);
            $fk_id_cita=$CsDetalle_cita->fk_id_cita;
            $fk_id_tipo_servicio=$CsDetalle_cita->fk_id_tipo_servicio;
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

    function CambiarEstado(){

    }

    function BuscarDtCita(){
        $Query = "SELECT * FROM usuario";
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