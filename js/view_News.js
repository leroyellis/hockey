View_News = { News: {
    
    show: function()
    {
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

             HOCKEY.setView( '#newsView' );
         });
    },
}}
