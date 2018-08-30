<?php

    class CsUsuario{
        public $IdTipoUsuario;
        public $IdTipoDocu;
        public $NumDocumento;
        public $NombresUsu;
        public $ApellidosUsu;
        public $GeneroUsu;
        public $FechaNacUsu;
        public $CorreoUsu;
        public $PassUsu;
        public $CelUsu;
        public $FechRegUsu;
        public $FotoUsu;
        public $IdCiudad;
        public $FirmaDoc;
        public $TarjetaDoc;
        public $EstadoUsuario;
        public $LatitudUsu;
        public $LongitudUsu;

        function __construct($IdTipoUsuario,$IdTipoDocu,$NumDocumento,$NombresUsu,$ApellidosUsu,$GeneroUsu,$FechaNacUsu,$CorreoUsu,$PassUsu,$CelUsu,$FechRegUsu,$FotoUsu,$IdCiudad,$FirmaDoc,$TarjetaDoc,$EstadoUsuario,$LatitudUsu,$LongitudUsu)
            {   
                $this->IdTipoUsuario=$IdTipoUsuario;
                $this->IdTipoDocu=$IdTipoDocu;       
                $this->NumDocumento=$NumDocumento;
                $this->NombresUsu=$NombresUsu;
                $this->ApellidosUsu=$ApellidosUsu;
                $this->GeneroUsu=$GeneroUsu;
                $this->FechaNacUsu=$FechaNacUsu;
                $this->CorreoUsu=$CorreoUsu;
                $this->PassUsu=$PassUsu;
                $this->CelUsu=$CelUsu;
                $this->FechRegUsu=$FechRegUsu;
                $this->FotoUsu=$FotoUsu;
                $this->IdCiudad=$IdCiudad;
                $this->FirmaDoc=$FirmaDoc;
                $this->TarjetaDoc=$TarjetaDoc;
                $this->EstadoUsuario=$EstadoUsuario;
                $this->LatitudUsu=$LatitudUsu;
                $this->LongitudUsu=$LongitudUsu;  
        
            }
    }
  
?>