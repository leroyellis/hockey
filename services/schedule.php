<?php
trait ScheduleService
{
	protected function schedule( $args )
	{
    	$output = Array();

		if( $this->method == "GET" )
		{
    		for( $i = 0; $i < 10; $i++ )
    		{
				$output[$i] = Array( "date" => "7/12/2013",
									 "time" => "3:00pm",
									 "homeTeam" => "Mixed Nuts",
									 "awayTeam" => "Zambaloni",
									 "location" => "Family Sports Center" );
    		}
		}
		else
		{
			$output['error'] = "This service does not accept " . $this->method . "requests.";
		}

    	return $output;
	}
}
