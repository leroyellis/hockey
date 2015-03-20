<?php

trait PlayerService
{
	protected function player( $args )
	{
		$player = array();

		if( $this->method == 'GET' )
		{
			$playerId = $args[0];
			
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

		}
		else
		{
			$player["error"] = "This service does not accept " . $this->method . " requests.";
		}

		return $player;
	}
}
