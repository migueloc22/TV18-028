<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
include "..\Datos\DatoUsuario_servicio.php";
$DatoUsuario_servicio = new DatoUsuario_servicio();
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $option = $request->option;
        switch ($option) {
            case 'AgregarDtCita':
                // $id_detalle_cita="";
                // $fk_id_cita=$request->fk_id_cita;
                // $fk_id_tipo_servicio=$request->fk_id_tipo_servicio;
                // $CsUsuario_servicio=new CsUsuario_servicio($id_detalle_cita,  $fk_id_cita,  $fk_id_tipo_servicio);
                // $DatoUsuario_servicio->AgregarDtCita($CsUsuario_servicio);
                break;
            case 'FilterUsuario_servicio':
                $filter=$request->filter;
                $DatoUsuario_servicio->FilterUsuario_servicio($filter);
                break;
            
            default:
                # code...
                break;
        }
       
    }
    else {
        echo "Not called properly with username parameter!";
    }
?>