<?php
include "Conexion.php";
include "CsUsuario.php";
class DatoUsuario{
    public $cnn;
    function __construct()
    {
        $conexion = new conexion();
        $this->cnn=$conexion ->conectar();
    }
    function AgregarUsuario(CsUsuario $CsUsuario){  

        
        try {
             $stmt = mysqli_prepare($this->cnn, "INSERT INTO usuario (num_documento, nombre, apellido, correo, fecha_nac, fecha_registro, hora_registro, direccion, contrasena, celular, latitud, longitud, foto, hoja_vida, certificacion_estudio, fk_id_rol_usuario, fk_id_tipo_doc, fk_id_ciudad, fk_estado_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            
             mysqli_stmt_bind_param($stmt, 'sssssssssssssssssss',  $num_documento, $nombre, $apellido, $correo, $fecha_nac, $fecha_registro, $hora_registro, $direccion, $contrasena, $celular, $latitud, $longitud, $foto, $hoja_vida, $certificacion_estudio, $fk_id_rol_usuario, $fk_id_tipo_doc, $fk_id_ciudad, $fk_estado_usuario);
           
            $num_documento=$CsUsuario->num_documento;
            $nombre=$CsUsuario->nombre;
            $apellido=$CsUsuario->apellido;
            $correo=$CsUsuario->correo;
            $fecha_nac=$CsUsuario->fecha_nac;
            $fecha_registro=$CsUsuario->fecha_registro;
            $hora_registro=$CsUsuario->hora_registro;
            $direccion=$CsUsuario->direccion;
            $contrasena=$CsUsuario->contrasena;
            $celular=$CsUsuario->celular;
            $latitud=$CsUsuario->latitud;
            $longitud=$CsUsuario->longitud;
            $foto=$CsUsuario->foto;
            $hoja_vida=$CsUsuario->hoja_vida;
            $certificacion_estudio=$CsUsuario->certificacion_estudio;
            $fk_id_rol_usuario=$CsUsuario->fk_id_rol_usuario;
            $fk_id_tipo_doc=$CsUsuario->fk_id_tipo_doc;
            $fk_id_ciudad=$CsUsuario->fk_id_ciudad;
            $fk_estado_usuario=$CsUsuario->fk_estado_usuario; 

        /* ejecuta sentencias preparadas */
            mysqli_stmt_execute($stmt);
            echo json_decode("1") ;
        } catch (mysqli_sql_exception $e) {
            echo json_decode('Excepción capturada: ',  $e->getMessage(), "\n");
        }
       
        
        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }
    function AgregarUsuario2(CsUsuario $CsUsuario){  

        
        try {
            $stmt = mysqli_prepare($this->cnn, "INSERT INTO usuario (num_documento, nombre, apellido, correo, fecha_nac,direccion, contrasena, celular,  foto,fk_id_tipo_doc, fk_id_ciudad,) VALUES ($,$,$,$,$,$,$,$,$,$,$)");
            mysqli_stmt_bind_param($stmt, 'sssssssssss',  $num_documento, $nombre, $apellido, $correo, $fecha_nac,  $direccion, $contrasena, $celular, $foto,$fk_id_tipo_doc, $fk_id_ciudad);
            $num_documento=$CsUsuario->num_documento;
            $nombre=$CsUsuario->nombre;
            $apellido=$CsUsuario->apellido;
            $correo=$CsUsuario->correo;
            $fecha_nac=$CsUsuario->fecha_nac;
            $direccion=$CsUsuario->direccion;
            $contrasena=$CsUsuario->contrasena;
            $celular=$CsUsuario->celular;
            $foto=$CsUsuario->foto;
            $fk_id_tipo_doc=$CsUsuario->fk_id_tipo_doc;
            $fk_id_ciudad=$CsUsuario->fk_id_ciudad;

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
        $stmt = mysqli_prepare($this->cnn, "SELECT IdTipoUsuario, NumDocumento, NombresUsu, ApellidosUsu FROM usuarios");
       
        mysqli_stmt_execute($stmt);

        /* cierra sentencia y conexión */
        mysqli_stmt_close($stmt);

        /* cierra la conexión */
        mysqli_close($this->cnn);
    }
    function BuscarUsuariof($filter){
        
    }
    public function logueoUser($correo,$password){
     
        $Query = "SELECT * FROM usuarios WHERE CorreoUsu= '$correo' AND PassUsu='$password'";
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