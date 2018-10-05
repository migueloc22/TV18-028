<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
include "..\Datos\DatoTipo_servicio.php";
header('Content-Type: text/html; charset=ISO-8859-1');  
$DatoTipo_servicio = new DatoTipo_servicio();
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $option = $request->option;
        switch ($option) {
            case 'CargarTipo_servicio':
            $DatoTipo_servicio->CargarTipo_servicio();
                break;
            case 'FilterTipo_servicio':
                $filter=$request->filter;
                $DatoTipo_servicio->FilterTipo_servicio($filter);
                    break;
            default:
                # code...
                break;
        }
       
    }
    else {
        echo "Not called properly with username parameter!";
    }
//


?>