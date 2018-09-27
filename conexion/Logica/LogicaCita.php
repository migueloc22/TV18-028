<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
include "..\Datos\DatoCita.php";
$DatoCita = new DatoCita();
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $option = $request->option;
        switch ($option) {
            case 'AgregarCita':
                $id_cita=null;
                $codigo=null;
                $toltal=null;
                $duracion=null;
                $fecha_registro=date("Y-m-d H:i:s");
                $fecha_cita=$request->fecha_cita;
                $hora_inicia=$request->hora_inicia;
                $hora_final=null;
                $latitud=$request->latitud;
                $longitud=$request->longitud;
                $comentario=null;
                $fk_id_tomador=$request->fk_id_tomador;
                $fk_id_prestador=null;
                $fk_estado_cita=1;
                $visto=0;
                $csCita=new CsCita($id_cita, $codigo, $toltal, $duracion, $fecha_registro, $fecha_cita, $hora_inicia, $hora_final, $latitud, $longitud, $comentario,$visto, $fk_id_tomador, $fk_id_prestador, $fk_estado_cita);
                $DatoCita->AgregarCita($csCita);
                break;
                case 'ModificarDemanda':
                $id_cita=$request->id_cita;
                $fk_id_tomador=$request->fk_id_tomador;
                $DatoCita->ModificarDemanda($id_cita,$fk_id_tomador);
                break;
                case 'FilterCita':
                $filter=$request->filter;
                $DatoCita->FilterCita($filter);
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