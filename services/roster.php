<?php

trait RosterService
{
	protected function roster( $args )
	{
		$items = array();
		
		if( $this->method == 'GET' )
		{
			$teamid = $args[0];
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
		}
		else
		{
			$items["error"] = "This service does not accept " . $this->method . " requests.";
		}
		
		return $items;
	}
}
