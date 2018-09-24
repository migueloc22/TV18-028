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
    function BuscarUsuariof($filter){
        $Query = "SELECT * FROM usuario WHERE $filter";
        $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
    }
    public function logueoUser($num_documento,$password){
     
        $Query = "SELECT `num_documento`, `nombre`, `apellido`, `correo`, `fecha_nac`,  `direccion`,  `celular`, `foto`, `hoja_vida`, `certificacion_estudio`,  `fk_id_tipo_doc`, `fk_id_ciudad`, `fk_estado_usuario`,fk_id_rol_usuario FROM usuario WHERE num_documento= '$num_documento' AND contrasena='$password'";
            $result = mysqli_query($this->cnn,$Query);
            $array_dpto = array();

            while($data = mysqli_fetch_assoc($result)){
                $array_dpto[]=$data;
            }
          //  die;
            echo json_encode($array_dpto);
        }


        


}
// $DatoUsuario= new DatoUsuario();
// $DatoUsuario ->logueoUser("mas@gmail.com","hola"); 
?>