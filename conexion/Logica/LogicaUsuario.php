<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json'); 
include "..\Datos\DatoUsuario.php";
$dtUsuario = new DatoUsuario();
$postdata = file_get_contents("php://input");
if (isset($postdata)) {
    $request = json_decode($postdata);
    $option = $request->option;
    switch ($option) {
        case 'AgregarUsuario':
            $IdTipoUsuario=$request->IdTipoUsuario;
            $IdTipoDocu=$request->IdTipoDocu;
            $NumDocumento=$request->NumDocumento;
            $NombresUsu=$request->NombresUsu;
            $ApellidosUsu=$request->ApellidosUsu;
            $GeneroUsu=$request->GeneroUsu;
            $FechaNacUsu=$request->FechaNacUsu;
            $CorreoUsu=$request->CorreoUsu;
            $PassUsu=$request->PassUsu;
            $CelUsu=$request->CelUsu;
            $FechRegUsu="2018-07-07";
            $FotoUsu=$request->FotoUsu;
            $IdCiudad=$request->IdCiudad;
            $FirmaDoc=$request->FirmaDoc;
            $TarjetaDoc=$request->TarjetaDoc;
            $EstadoUsuario="activo";
            $LatitudUsu="2093";
            $LongitudUsu="6372";
            $csUsuario=new CsUsuario($IdTipoUsuario,$IdTipoDocu,$NumDocumento,$NombresUsu,$ApellidosUsu,$GeneroUsu,$FechaNacUsu,$CorreoUsu,$PassUsu,$CelUsu,$FechRegUsu,$FotoUsu,$IdCiudad,$FirmaDoc,$TarjetaDoc,$EstadoUsuario,$LatitudUsu,$LongitudUsu);
            $dtUsuario->AgregarUsuario($csUsuario);
        break;

        case 'logueoUser':
            $CorreoUsu=$request->Correo;
            $PassUsu=$request->Contrasena;
            $dtUsuario->logueoUser($CorreoUsu,$PassUsu);
        
        break;
        
        default:
            # code...
            break;
    }
   
}
else {
    echo "Not called properly with username parameter!";
}
// $DatoCrearUser->AgregarUsuario($val1);



?>