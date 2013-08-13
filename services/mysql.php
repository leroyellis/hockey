<?php

class myDB extends mysqli
{
    public function __constructor()
    {
        return( new mysqli( "localhost", "ion", "Wtdip01", "hockey" ) );
    }
}
