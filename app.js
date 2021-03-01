var folder = "covers/"; 

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
