jQuery(document).ready(function(){
    $(".main_btn a").mPageScroll2id();
    $(".arr a").mPageScroll2id();
    $(".nav a").mPageScroll2id();
});

$('body').append('<div class="upbtn" id="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            bottom: '15px'
        });
        } else {
        $('.upbtn').css({
            bottom: '-80px'
        });
    }
});

$("#upbtn").click(function() {
    $('html, body').animate({
        scrollTop: $(".menu").offset().top
    }, 1000);
});