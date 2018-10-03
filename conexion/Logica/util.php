<?php
    class util
    {
        public $skey = "yourSecretKey"; // you can change it

        
        public  function encode($value){ 
            $hash = crypt($value,$this->skey);
            return $hash;
        }
        function generarCodigo($longitud) {
            $key = '';
            $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
            $max = strlen($pattern)-1;
            for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
            return $key;
           }
        public function decode($value){
            if(!$value){return false;}
            $crypttext = $this->safe_b64decode($value); 
            $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
            $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
            $decrypttext = mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $this->skey, $crypttext, MCRYPT_MODE_ECB, $iv);
            return trim($decrypttext);
        }

    }
?>