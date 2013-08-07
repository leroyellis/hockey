<?php
    $output = "[";

    for( $i = 0; $i < 20; $i++ )
    {
        $output .= "{ \"playerId\": $i, \"lastName\": \"$i\", \"firstName\": \"Player\", \"middleName\": \"M.\", \"jersey\": $i },";
    }

    $output = trim( $output, ',' );
    $output .= "]";

    print $output;
?>
