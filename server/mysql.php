<?php

class mysql
{
	private $link;
	private $current_query;

	public function __construct($adress,$name,$password)
	{
		return $this->link = mysql_connect($adress,$name,$password);

	}

	public function select_db($db_name)
	{
		return mysql_select_db($db_name,$this->link);
	}

	public function query($q)
	{
		return $this->current_query = mysql_query($q,$this->link);
	}

	public function fetch_array()
	{
		if( $this->current_query )
			return mysql_fetch_array($this->current_query);
		else
			return FALSE;
	}



	public function error()
	{
		return mysql_error($this->link);
	}

	public function destroy()
	{
		mysql_close($this->link);
		unset($this);
	}


};


?>