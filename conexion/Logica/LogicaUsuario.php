<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json'); 
include "..\Datos\DatoUsuario.php";
include "util.php";
$dtUsuario = new DatoUsuario();
$util = new util();
$postdata = file_get_contents("php://input");
if (isset($postdata)) {
    $request = json_decode($postdata);
    $option = $request->option;
    switch ($option) {
        case 'CrearUsuario':
            $num_documento=$request->num_documento;
            $nombre=$request->nombre;
            $apellido=$request->apellido;
            $correo=$request->correo;
            $fecha_nac=$request->fecha_nac;
            $fecha_registro=date("Y-m-d");
            $hora_registro=date("H:i:s");
            $direccion=$request->direccion;
            $contrasena=$util->encode ( $request->contrasena) ;
            $celular=$request->celular;
            $latitud=null;
            $longitud=null;
            $foto=$request->foto;
            $hoja_vida='0';
            $certificacion_estudio='0';
            $fk_id_rol_usuario='1';
            $fk_id_tipo_doc=$request->fk_id_tipo_doc;
            $fk_id_ciudad=$request->fk_id_ciudad;
            $fk_estado_usuario='1'; 
            
            $csUsuario=new CsUsuario( $num_documento, $nombre, $apellido, $correo, $fecha_nac, $fecha_registro, $hora_registro, $direccion, $contrasena, $celular, $latitud, $longitud, $foto, $hoja_vida, $certificacion_estudio, $fk_id_rol_usuario, $fk_id_tipo_doc, $fk_id_ciudad, $fk_estado_usuario);
            $dtUsuario->AgregarUsuario($csUsuario);
        break;

        case 'logueoUser':
            $num_documento=$request->num_documento;
            $PassUsu=$util->encode ( $request->contrasena) ;
            $dtUsuario->logueoUser($num_documento,$PassUsu);
        
        break;
        case 'BuscarUsuario':
            $num_documento=$request->num_documento;
            $PassUsu=$util->encode ( $request->contrasena) ;
            $dtUsuario->logueoUser($num_documento,$PassUsu);
        
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