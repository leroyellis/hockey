<?php

class myDB extends mysqli
{
    public function __construct()
    {
		$config = parse_ini_file('/home/ion/db_config.ini');

		if( $config['server'] == "" )
		{
			printf( "Configuration Error: No server provided." );
		}
		else if( $config['username'] == "" )
		{
			printf( "Configuration Error: No username provided." );
		}
		else if( $config['password'] == "" )
		{
			printf( "Configuration Error: No password provided." );
		}
		else if( $config['database'] == "" )
		{
			printf( "Configuration Error: No database provided." );
		}
		else
		{
			$this->connect( $config['server'],
							$config['username'],
							$config['password'],
							$config['database'] );
		}
    }

	public function __destruct()
	{
		$this->close();
	}

	public function quote($value)
	{
		return "'" . $this->real_escape_string($value) . "'";
	}
}
