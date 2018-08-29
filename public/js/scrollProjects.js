$(document).ready(function() {
    console.log('test')
    if($(window).width() <= 769) {
        $(".name").removeClass("shrink"); 
        $(".main-nav").removeClass("shrink"); 
    }
});

$(window).resize(function() {
    if($(window).width() <= 769) {
        $(".name").removeClass("shrink"); 
        $(".main-nav").removeClass("shrink"); 
    }
    else {
        $(".name").addClass("shrink"); 
        $(".main-nav").addClass("shrink"); 
    }
});
