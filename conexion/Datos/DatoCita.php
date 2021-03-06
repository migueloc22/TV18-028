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
            $stmt = mysqli_prepare($this->cnn, "INSERT INTO cita (fecha_registro, fecha_cita, hora_inicia, hora_final, latitud, longitud, fk_id_tomador,codigo) VALUES (?,?,?,?,?,?,?,?)");
            mysqli_stmt_bind_param($stmt, 'ssssssss',  $fecha_registro, $fecha_cita, $hora_inicia, $hora_final, $latitud, $longitud, $fk_id_tomador,$codigo);
            $fecha_registro=$CsCita->fecha_registro;
            $fecha_cita=$CsCita->fecha_cita;
            $hora_inicia=$CsCita->hora_inicia;
            $hora_final=$CsCita->hora_final;
            $latitud=$CsCita->latitud;
            $longitud=$CsCita->longitud;
            $fk_id_tomador=$CsCita->fk_id_tomador;
            $codigo=$CsCita->codigo;

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
            $stmt = mysqli_prepare($this->cnn, "UPDATE cita SET fk_estado_cita = ?, fk_id_prestador = ? WHERE id_cita = ?");
            mysqli_stmt_bind_param($stmt, 'sss',  $fk_estado_cita,$fk_id_tomador2,$id_cita2);
            $fk_estado_cita="2";
            $fk_id_tomador2=$fk_id_tomador;
            $id_cita2=$id_cita;

        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            $id=$this->cnn->insert_id;
            echo json_encode(1) ;
        } catch (mysqli_sql_exception $e) {
            echo json_encode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }

    function CambiarEstado($id_cita,$fk_estado_cita){
        try {
            $stmt = mysqli_prepare($this->cnn, "UPDATE cita SET fk_estado_cita = ? WHERE id_cita = ?");
            mysqli_stmt_bind_param($stmt, 'ss',  $fk_estado_cita2,$id_cita2);
            $fk_estado_cita2=$fk_estado_cita;
            $id_cita2=$id_cita;

        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            $id=$this->cnn->insert_id;
            echo json_encode(1) ;
        } catch (mysqli_sql_exception $e) {
            echo json_encode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }
    function ConfirmarCita($id_cita,$fk_estado_cita,$toltal,$visto){
        try {
            $stmt = mysqli_prepare($this->cnn, "UPDATE cita SET fk_estado_cita = ?, toltal=?, visto=? WHERE id_cita = ?");
            mysqli_stmt_bind_param($stmt, 'ssss',  $fk_estado_cita2,$toltal2,$visto2,$id_cita2);
            $toltal2=$toltal;
            $fk_estado_cita2=$fk_estado_cita;
            $visto2=$visto;
            $id_cita2=$id_cita;

        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            $id=$this->cnn->insert_id;
            echo json_encode(1) ;
        } catch (mysqli_sql_exception $e) {
            echo json_encode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
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
    function reportePrestador($filter){
        $Query = "SELECT COUNT(id_cita) as numCita , SUM(toltal) as Ganancia FROM  cita  $filter";
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