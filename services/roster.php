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
    $mysqli = new myDB();
    if( $mysqli->connect_errno )
    {
        $items["error"] = "Failed to connect to the DB: $mysqli->connect_error";
    }
    else
    {
        if( $result = $mysqli->query( "SELECT playerid, firstname, middlename, lastname, jersey FROM player WHERE teamid=$teamid" ) )
        {
			while( $row = $result->fetch_assoc() )
			{
				$items[] = $row;
			}
            $result->close();
        }
        else
        {
            $items["error"] = "QUERY error: $mysqli->error";
        }
    }
}

printf( json_encode($items) );

