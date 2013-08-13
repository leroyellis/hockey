<?php

include 'mysql.php';

$items = array();

$teamid = $_GET['tid'];
if( $teamid == null )
{
    $items['error'] = "No team ID was supplied!";
}
else
{
    $mysqli = new myDB( "localhost", "ion", "Wtdip01", "hockey" );
    if( $mysqli->connect_errno )
    {
        $items["error"] = "Failed to connect to the DB: $mysqli->connect_error";
    }
    else
    {
        if( $result = $mysqli->query( "SELECT playerid, firstname, middlename, lastname, jersey FROM player WHERE teamid=$teamid" ) )
        {
            for( $i = 0; $i < $result->num_rows; $i++ )
            {
                array_push( $items, $result->fetch_assoc() );
            }
            $result->close();
        }
        else
        {
            $items["error"] = "QUERY error: $mysqli->error";
        }
    
        $mysqli->close();
    }
}

printf( json_encode($items) );

