View_News = { News: {
    
    show: function()
    {
        var options = {
			method: 'GET',
            dataType: 'json',
//            url: 'services/news.php'
            url: 'services/v1/news/'
        };

        $.when( $.ajax( options ) )
         .then( function( data ) {
             $( '#news ul' ).empty();
             $.each( data, function() {
                 var itemHtml = '<li title="' + this.title + '">' +
                                    '<span class="newsTitle">' + this.title + ' - ' + this.date + '</span>' +
                                    '<div class="newsArticle">' + this.article + '</div>' +
                                '</li>';

                 $( '#news ul' ).append( itemHtml );
             });

             HOCKEY.setView( '#newsView' );
         });
    },
}}
