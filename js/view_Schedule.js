View_Schedule = { Schedule: {
    
    show: function()
    {
        var options = {
			method: 'GET',
            dataType: 'json',
            //url: 'services/schedule.php'
            url: 'services/v1/schedule/'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             $( '#schedule > ul' ).empty();

             $.each( data, function() {
                 var itemHtml = '<li>' + 
                                    '<span class="scheduleDate">' + this.date + '</span>' + 
                                    '<span class="scheduleDate">' + this.time + '</span>' + 
                                    '<span class="scheduleTeam">' + this.homeTeam + '</span>' + 
                                    '<span class="scheduleTeam">' + this.awayTeam + '</span>' + 
                                    '<span class="scheduleLocation">' + this.location + '</span>' +
                                '<li>';

                 $( '#schedule ul' ).append( itemHtml );
             });

             HOCKEY.setView( '#scheduleView' );
         });
    },
}}
