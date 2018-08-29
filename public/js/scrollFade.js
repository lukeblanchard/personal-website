$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
}); 

$(document).ready(function() {
    
    var pane = $('.pulsing-container'); 
    var arrow = $('#arrow-div'); 
    var object_bottom = pane.offset().top + pane.outerHeight(); 
    console.log($(window).width()); 
    $(window).scroll(function() {
        var window_top = $(window).scrollTop(); 
        if (window_top > 40) {
            pane.fadeOut(200); 
            arrow.fadeOut(200); 
        }
        else if (window_top <= 40)  {
            pane.fadeIn(200); 
        }
    });
});
