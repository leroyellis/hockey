
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
                               '<div class="navButton" onClick="' + this.click + '">' + this.text + '</div>' +
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
                                    '<td class="playerName" onClick="HOCKEY.showProfile(' + this.playerId + ');">' +
                                        this.firstName + ' ' + this.lastName +
                                    '</td>' +
                                '</tr>';

                 $( '#roster' ).append( itemHtml );
             });
         })
         .fail( function( e ) { console.log( e.responseText ); });
    },

    showSchedule: function()
    {
        this.setView( '#scheduleView' );

        var options = {
            url: 'services/schedule.php',
            dataType: 'json'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             $( '#schedule ul' ).empty();

             $.each( data, function() {
                 var itemHtml = '<li>' + 
                                    '<span class="scheduleDate">' + this.date + '</span>' + 
                                    '<span class="scheduleTeam">' + this.homeTeam + '</span>' + 
                                    '<span class="scheduleTeam">' + this.awayTeam + '</span>' + 
                                    '<span class="scheduleLocation">' + this.location + '</span>' +
                                '<li>';

                 $( '#schedule ul' ).append( itemHtml );
             });
         });
    },

    showNews: function()
    {
        this.setView( '#newsView' );

        var options = {
            url: 'services/news.php',
            dataType: 'json'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             $( '#news ul' ).empty();
             $.each( data, function() {
                 var itemHtml = '<li>' +
                                    '<span class="newsTitle">' + this.title + ' - ' + this.date + '</span>' +
                                    '<div class="newsArticle">' + this.article + '</div>' +
                                '</li>';

                 $( '#news ul' ).append( itemHtml );
             });
         });
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
