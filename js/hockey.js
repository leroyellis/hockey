
HOCKEY = {
    
    curView: 'none',

    init: function()
    {
        $LAB.script( "js/jquery-2.0.3.min.js" )
            .script( "js/less-1.4.1.min.js" ).wait( function() {
                HOCKEY.ready();
            });
    },

    ready: function()
    {
        var navList = [ 
                          { text: 'Schedule', icon: '', click: 'HOCKEY.showSchedule();' },
                          { text: 'Roster', icon: '', click: 'HOCKEY.showRoster();' },
                          { text: 'News', icon: '', click: 'HOCKEY.showNews();' }
                      ];

        $.each( navList, function() { 
            var itemHtml = '<li>' +
                               '<div class="navButton" onClick="' + this.click + '"><a href="#">' + this.text + '</a></div>' +
                           '</li>';

            $( '#navBar > ul' ).append( itemHtml );
        });

        $( '#teamLogo' ).css( 'background-image', 'url("http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif")' );

        HOCKEY.showSchedule();
    },

    showRoster: function()
    {
        this.setView( '#rosterView' );

        var options = {
            url: 'services/roster.php',
            dataType: 'json'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             $( '#roster' ).html( '<tr><th>#</th><th>Name</th></tr>' );
             $.each( data, function() {
                 var itemHtml = '<tr>' + 
                                    '<td class="playerJersey">' + this.jersey + '</td>' +
                                    '<td class="playerName" onClick="HOCKEY.showProfile(' + this.playerId + ');"><a href="#">' + this.firstName + ' ' + this.lastName + '</a></td>' +
                                '</tr>';

                 $( '#roster' ).append( itemHtml );
             });
         });
    },

    showSchedule: function()
    {
        this.setView( '#scheduleView' );
    },

    showNews: function()
    {
        this.setView( '#newsView' );
    },

    showProfile: function( pid )
    {
        if( isNaN( pid ) ) return;

        this.setView( '#profileView' );

        var options = {
            url: 'services/player.php',
            data: pid,
            dataType: 'json'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             $( '#playerName' ).html( data.firstName + ' ' + data.middleName + ' ' + data.lastName );
             $( '#playerJersey' ).html( data.jersey );
         });
    },

    setView: function( newView )
    {
        if( this.curView == newView ) return;
        
        $( this.curView ).hide();

        this.curView = newView;

        $( this.curView ).show();
    },
}
