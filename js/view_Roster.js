View_Roster = { Roster: {
    
    show: function( teamId )
    {
        HOCKEY.setView( '#rosterView' );

        if( isNaN( teamId ) ) teamId = 1;

        var options = {
            url: 'services/roster.php',
            data: 'tid=' + teamId,
            dataType: 'json'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
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
         })
         .fail( function( e ) { console.log( e.responseText ); });
    },
}}
