<?php
    $output = "[";

    for( $i = 0; $i < 30; $i++ )
    {
        $output .= "    { \"date\": \"7/12/2013\", \"time\": \"3:00pm\", \"homeTeam\": \"Mixed Nuts\", \"awayTeam\": \"Zambaloni\", \"location\": \"Family Sports Center\" },";
    }

    $output = trim( $output, ',' );
    $output .= "]";

    echo $output;
