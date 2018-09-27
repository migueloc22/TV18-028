<?php
include "Conexion.php";
include "CsCita.php";
class DatoCita{
    public $cnn;
    function __construct()
    {
        $conexion = new conexion();
        $this->cnn=$conexion ->conectar();
    }
    
    function AgregarCita(CsCita $CsCita){  
        try {
            $stmt = mysqli_prepare($this->cnn, "INSERT INTO cita (fecha_registro, fecha_cita, hora_inicia, hora_final, latitud, longitud, fk_id_tomador) VALUES (?,?,?,?,?,?,?)");
            mysqli_stmt_bind_param($stmt, 'sssssss',  $fecha_registro, $fecha_cita, $hora_inicia, $hora_final, $latitud, $longitud, $fk_id_tomador);
            $fecha_registro=$CsCita->fecha_registro;
            $fecha_cita=$CsCita->fecha_cita;
            $hora_inicia=$CsCita->hora_inicia;
            $hora_final=$CsCita->hora_final;
            $latitud=$CsCita->latitud;
            $longitud=$CsCita->longitud;
            $fk_id_tomador=$CsCita->fk_id_tomador;

        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            $id=$this->cnn->insert_id;
            echo json_encode($id) ;
        } catch (mysqli_sql_exception $e) {
            echo json_encode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }

    function ModificarDemanda($id_cita,$fk_id_tomador){
        try {
            $stmt = mysqli_prepare($this->cnn, "UPDATE cita SET fk_estado_cita = ?, fk_id_tomador = ? WHERE id_cita = ?");
            mysqli_stmt_bind_param($stmt, 'sss',  $fk_estado_cita,$fk_id_tomador2,$id_cita2);
            $fk_estado_cita="2";
            $fk_id_tomador2=$fk_id_tomador;
            $id_cita2=$id_cita;

        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            $id=$this->cnn->insert_id;
            echo json_encode("1") ;
        } catch (mysqli_sql_exception $e) {
            echo json_encode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }

    function CambiarEstado(){

    }

    function BuscarUsuario(){
        $Query = "SELECT * FROM usuario";
        $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
    }
    function FilterCita($filter){
        $Query = "SELECT * FROM cita  $filter";
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