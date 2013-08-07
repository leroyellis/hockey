<?php
    $output = "[";

    for( $i = 0; $i < 30; $i++ )
    {
        $output .= "    { \"date\": \"7/12/2013\", \"homeTeam\": \"Mixed Nuts\", \"awayTeam\": \"Zambaloni\", \"location\": \"Family Sports Center\" },";
    }

    $output = trim( $output, ',' );
    $output .= "]";

    echo $output;
