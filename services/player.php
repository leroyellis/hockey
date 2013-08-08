<?php

$player = array();

$playerId = $_GET['pid'];
if( $playerId == null )
{
    $player['error'] = "No team ID was supplied!";
}
else
{
    $mysqli = new mysqli( "localhost", "ion", "Wtdip01", "hockey" );
    if( $mysqli->connect_errno )
    {
        $player["error"] = "Failed to connect to the DB: $mysqli->connect_error";
    }
    else
    {
        if( $result = $mysqli->query( "SELECT * FROM player WHERE playerid=$playerId" ) )
        {
            $player = $result->fetch_assoc();
        }
        else
        {
            $player["error"] = "QUERY error: $mysqli->error";
        }
    
        $mysqli->close();
    }
}

printf( json_encode($player) );

