View_SC = { SC: {
    
    show: function()
    {
		var services = [ "news.php",
						 "roster.php"
					   ];

        var options = {
			method: 'OPTIONS',
            dataType: 'json'
        };

       	$( '#news ul' ).empty();

		$.each( services, function() {
			var service = this;
			options.url = 'services/' + this;
        	$.when( $.ajax( options ) )
        	 .then( function( data ) {
                 var itemHtml = '<li title="' + service + '">' +
                                    '<span class="newsTitle">' + service + '</span>' +
                                    '<div class="newsArticle">' + JSON.stringify( data ) + '</div>' +
                                '</li>';
        	     $( '#news ul' ).append( itemHtml );
        	     HOCKEY.setView( '#newsView' );
        	 });
		});
    },
}}
