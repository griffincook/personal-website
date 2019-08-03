$(document).on('scroll',function(){
    if ($(document).scrollTop() > 243) {
        $('.banner').addClass('fixed');
    } else {
        $('.banner').removeClass('fixed');
    }
});

$('#indexHeadshot').on('click', function(){
    console.log("clicked");
    $('#indexHeadshot').addClass('spin');
    setTimeout(function(){
        $('#indexHeadshot').removeClass('spin');
    }, 1000)
});