View_Roster = { Roster: {
    
    show: function( teamId )
    {
        if( isNaN( teamId ) ) teamId = 1;

        var options = {
			method: 'GET',
            dataType: 'json',
            //url: 'services/roster.php',
            //data: 'tid=' + teamId,
            url: 'services/v1/roster/' + teamId,
			crossDomain: true,
			xhrFields: {
				withCredentials: false
			}
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
//			 console.log( data );
             $( '#roster' ).html( '<tr><th>#</th><th>Name</th></tr>' );
             $.each( data, function() {
                 var itemHtml = '<tr>' + 
                                    '<td class="playerJersey">' + this.jersey + '</td>' +
                                    '<td class="playerName" onClick="HOCKEY.Views.Profile.show(' + this.playerid + ');">' +
                                        this.firstname + ' ' + this.lastname +
                                    '</td>' +
                                '</tr>';

                 $( '#roster' ).append( itemHtml );
             });

             HOCKEY.setView( '#rosterView' );
         })
         .fail( function() {
			 alert( "Unable to retrieve roster data!" );
		 });
    },
}}
