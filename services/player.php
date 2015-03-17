<?php

include 'mysql.php';

$player = array();

$playerId = $_GET['pid'];
if( $playerId == null )
{
    $player['error'] = "No player ID was supplied!";
}
else
{
    $mysqli = new myDB();
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
    }
}

printf( json_encode($player) );
