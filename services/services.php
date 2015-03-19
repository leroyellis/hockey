<?php
require_once 'RESTService.php';

class p
{
	public $firstName = "";
	public $lastName = "";
	public $middleName = "";
	public $number = "";
}

class Services extends RESTService
{
    protected $User;

    public function __construct( $request, $origin )
	{
        parent::__construct( $request );
    }

	protected function example()
	{
		if( $this->method == 'GET' )
		{
			$player = array("player" => array( "firstName" => "LeRoy", "middleName" => "W.", "lastName" => "Ellis", "number" => "7" ) );
			return $player;
		}
		else
		{
		    return "Only accepts GET requests";
		}
	}
}
