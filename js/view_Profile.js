
View_Profile = { Profile: {

    show: function( pid )
    {
        if( isNaN( pid ) ) return;

        var options = {
			method: 'GET',
            url: 'services/player.php',
            //url: 'services/v1/example/',
            data: 'pid=' + pid,
            dataType: 'json'
        };

/*
		$.ajax( options )
		 .success( function( data ) {
             console.log( data );
             data.url = 'http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif';
             $( '#playerPhoto' ).html( '<img src="' + data.url + '">' );
             $( '#playerName' ).html( data.firstname + ' ' + data.middlename + ' ' + data.lastname );
             $( '#playerNumber' ).html( data.jersey );

             HOCKEY.setView( '#profileView' );
         })
		 .ajaxError( function( event, jqXHR, ajaxSettings, thrownError ) {
             data.url = 'http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif';
             $( '#playerPhoto' ).html( '<img src="' + data.url + '">' );
             $( '#playerName' ).html( "Error!" );
             $( '#playerNumber' ).html( thrownError );

             HOCKEY.setView( '#profileView' );
		 });
		 */
        $.when( $.ajax( options ) )
         .then( function( data ) {
             console.log( data );
             data.url = 'http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif';
             $( '#playerPhoto' ).html( '<img src="' + data.url + '">' );
             $( '#playerName' ).html( data.firstname + ' ' + data.middlename + ' ' + data.lastname );
             $( '#playerNumber' ).html( data.jersey );

             HOCKEY.setView( '#profileView' );
         })
		 .fail( function( event, jqXHR, ajaxSettings, thrownError ) {
             url = 'http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif';
             $( '#playerPhoto' ).html( '<img src="' + url + '">' );
             $( '#playerName' ).html( jqXHR );
             $( '#playerNumber' ).html( ajaxSettings );

             HOCKEY.setView( '#profileView' );
		 });
    },
}}
