<?php
class conexion
{
    private $servidor;
    private $user;
    private $pass;
    private $data;
    private $cnn;
    
      function __construct()
      {   
            $this->user="root";
            $this->pass="";
            $this->data="vethouse_bd";
            $this->servidor="localhost";
            $this->cnn= mysqli_connect($this->servidor,$this->user,$this->pass,$this->data);
            mysqli_set_charset($this->cnn, "utf8");
            //echo mysqli_error($this->cnn);
      }
      
        public function conectar()
        {	
            return $this->cnn;

        }
        public function cerrarConectar()
        {
            mysql_close($this->cnn);
        }	
       

}
$cnn= new conexion();
$cnn->conectar();
    

?>