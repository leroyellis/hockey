
View_Profile = { Profile: {

    show: function( pid )
    {
        if( isNaN( pid ) ) return;

        var options = {
            url: 'services/player.php',
            data: 'pid=' + pid,
            dataType: 'json'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             console.log( data );
             data.url = 'http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif';
             $( '#playerPhoto' ).html( '<img src="' + data.url + '">' );
             $( '#playerName' ).html( data.firstname + ' ' + data.middlename + ' ' + data.lastname );
             $( '#playerNumber' ).html( data.jersey );

             HOCKEY.setView( '#profileView' );
         });
    },
}}
