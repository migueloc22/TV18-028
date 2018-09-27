<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
include "..\Datos\DatoDetalle_cita.php";
$DatoDetalle_cita = new DatoDetalle_cita();
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $option = $request->option;
        switch ($option) {
            case 'AgregarDtCita':
                $id_detalle_cita="";
                $fk_id_cita=$request->fk_id_cita;
                $fk_id_tipo_servicio=$request->fk_id_tipo_servicio;
                $CsDetalle_cita=new CsDetalle_cita($id_detalle_cita,  $fk_id_cita,  $fk_id_tipo_servicio);
                $DatoDetalle_cita->AgregarDtCita($CsDetalle_cita);
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