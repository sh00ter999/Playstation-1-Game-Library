var folder = "https://raw.githubusercontent.com/sh00ter999/Playstation-1-Game-Library/main/covers/"; 

$(document).ready( function () {

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $(".gallery").append( "<img src='"+ folder + val +"'>" );
                } 
            });
        }
    });
    
});
