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

        $stmt = mysqli_prepare($this->cnn, "INSERT INTO usuarios(IdTipoUsuario, IdTipoDocu,  NumDocumento, NombresUsu, ApellidosUsu, GeneroUsu, FechaNacUsu, CorreoUsu, PassUsu, CelUsu, FechRegUsu, FotoUsu, IdCiudad, FirmaDoc, TarjetaDoc, EstadoUsuario, LatitudUsu, LongUsu) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        mysqli_stmt_bind_param($stmt, 'ssssssssssssssssss', $IdTipoUsuario, $IdTipoDocu, $NumDocumento, $NombresUsu, $ApellidosUsu, $GeneroUsu, $FechaNacUsu, $CorreoUsu, $PassUsu, $CelUsu, $FechRegUsu, $FotoUsu, $IdCiudad, $FirmaDoc, $TarjetaDoc, $EstadoUsuario, $LatitudUsu, $LongUsu);


        $IdTipoUsuario=$CsUsuario->IdTipoUsuario;
        $IdTipoDocu=$CsUsuario->IdTipoDocu;
        $NumDocumento=$CsUsuario->NumDocumento;
        $NombresUsu=$CsUsuario->NombresUsu;
        $ApellidosUsu=$CsUsuario->ApellidosUsu;
        $GeneroUsu=$CsUsuario->GeneroUsu;
        $FechaNacUsu=$CsUsuario->FechaNacUsu;
        $CorreoUsu=$CsUsuario->CorreoUsu;
        $PassUsu=$CsUsuario->PassUsu;
        $CelUsu=$CsUsuario->CelUsu;
        $FechRegUsu=$CsUsuario->FechRegUsu;
        $FotoUsu=$CsUsuario->FotoUsu;
        $IdCiudad=$CsUsuario->IdCiudad;
        $FirmaDoc=$CsUsuario->FirmaDoc;
        $TarjetaDoc=$CsUsuario->TarjetaDoc;
        $EstadoUsuario=$CsUsuario->EstadoUsuario;
        $LatitudUsu=$CsUsuario->LatitudUsu;
        $LongUsu=$CsUsuario->LongitudUsu;

        /* ejecuta sentencias preparadas */
        mysqli_stmt_execute($stmt);
        echo "Agregado";

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