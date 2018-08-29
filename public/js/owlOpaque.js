function changeOpacity() {
    $('.active').eq(1).css('opacity', 1);
    $('.active').eq(0).css('opacity', 0.5);
}

setInterval(changeOpacity, 1500);
