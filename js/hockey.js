
HOCKEY = {
    
    curView: 'none',
    Views: {},

    init: function()
    {
        $LAB.script( "js/jquery-2.0.3.min.js" ).wait()
            .script( "js/jquery-ui-1.10.3/ui/minified/jquery-ui.min.js" )
            .script( "js/view_Roster.js" ).wait( function() {
                $.extend( HOCKEY.Views, View_Roster );
                delete( View_Roster );
            })
            .script( "js/view_Schedule.js" ).wait( function() {
                $.extend( HOCKEY.Views, View_Schedule );
                delete( View_Schedule );
            })
            .script( "js/view_News.js" ).wait( function() {
                $.extend( HOCKEY.Views, View_News );
                delete( View_News );
            })
            .script( "js/view_Profile.js" ).wait( function() {
                $.extend( HOCKEY.Views, View_Profile );
                delete( View_Profile );
            })
            .script( "js/less-1.4.1.min.js" ).wait( function() {
                HOCKEY.ready();
            });
    },

    ready: function()
    {
        var navList = [ 
                          { text: 'Schedule', icon: '', click: 'HOCKEY.Views.Schedule.show();' },
                          { text: 'Roster', icon: '', click: 'HOCKEY.Views.Roster.show();' },
                          { text: 'News', icon: '', click: 'HOCKEY.Views.News.show();' }
                      ];

        $.each( navList, function() { 
            var itemHtml = '<li>' +
                               '<div class="navButton" onClick="HOCKEY.selectItem( this );' + this.click + '">' + this.text + '</div>' +
                           '</li>';

            $( '#navBar > ul' ).append( itemHtml );
        });

        // Toggle all the views to be slid off the screen.
        $.each( $( '#contentWrapper > div' ), function() {
            $( this ).toggle( "slide", {}, 5, null );
        });

        // Set the first buttong as selected (the schedule)
        $( '#navBar > ul > li:first-child > div' ).addClass( 'navButtonSelected' );
//        $( '#teamLogo' ).css( 'background-image', 'url("http://i404.photobucket.com/albums/pp126/ion_the_jester/dgir.gif")' );
        $( '#teamLogo' ).css( 'background-image', 'url("assets/devils.jpg")' );

        // Show the schedule as the base view
        HOCKEY.Views.Schedule.show();
    },

    selectItem: function( item )
    {
        $.each( $( '#navBar ul li div' ), function(){ $( this ).removeClass( 'navButtonSelected' ) } );

        $( item ).addClass( 'navButtonSelected' );
    },


    setView: function( newView )
    {
        if( this.curView == newView ) return;
        
        $( this.curView ).hide();
        $( newView ).toggle( "slide", {}, 500, null );

        this.curView = newView;

    },
}
