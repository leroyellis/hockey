<?php
   	$output = "[";

   	for( $i = 0; $i < 3; $i++ )
   	{
   	    $output .= "    { \"date\": \"7/12/2013\", \"title\": \"Mixed Nuts Win!\", \"article\": \"This should have some text in it to show that there is a news article here but right now this is all I have, random statements. Should pull this data from and RSS and make appropriate JSON to handle and dispaly on screen. This service will be rather in-depth and tricky later on.\" },";
   	}

   	$output = trim( $output, ',' );
   	$output .= "]";

   	echo $output;
