$('.indexHeadshot').on('click', function(){
    console.log("clicked");
    $('.indexHeadshot').addClass('spin');
    setTimeout(function(){
        $('.indexHeadshot').removeClass('spin');
    }, 1000)
});

$(document).on('scroll',function(){
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /4;
    if ($(document).scrollTop() >= h) {
        $('.banner').addClass('fixed');
    } else {
        $('.banner').removeClass('fixed');
    }
});
