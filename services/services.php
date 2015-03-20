<?php
require_once 'RESTService.php';
require_once 'mysql.php';
require_once 'roster.php';
require_once 'player.php';

class Services extends RESTService
{
    public function __construct( $request, $origin )
	{
        parent::__construct( $request );
    }

	protected function example()
	{
		if( $this->method == 'GET' )
		{
			$player = array( "firstname" => "LeRoy", "middlename" => "W.", "lastname" => "Ellis", "jersey" => "7" );
			return $player;
		}
		else
		{
		    return "Only accepts GET requests";
		}
	}

	use RosterService;
	use PlayerService;
}

// Requests from the same server don't have a HTTP_ORIGIN header
if( !array_key_exists( 'HTTP_ORIGIN', $_SERVER ) )
{
	/*
	if( !isset( $_SERVER['SERVER_NAME'] ) )
	{
		$_SERVER['SERVER_NAME'] = 'pipooh';
	}
	if( !isset( $_SERVER['REQUEST_METHOD'] ) )
	{
		$_SERVER['REQUEST_METHOD'] = 'GET';
	}
	*/

    $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
}

try
{
	/*
	if( !isset( $_REQUEST['request'] ) )
	{
		$_REQUEST['request'] = "roster/1";
	}
	*/
    $services = new Services( $_REQUEST['request'], $_SERVER['HTTP_ORIGIN'] );
    echo $services->processAPI();
}
catch (Exception $e)
{
    echo json_encode( Array( 'error' => $e->getMessage() ) );
}

