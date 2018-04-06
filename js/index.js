(function () {
    var timer = setTimeout(function () {
        $('.wrapper').addClass('init');
    }, 200);
    $('.item').click(function () {
        $('.wrapper').addClass('wrapper-active');
        $(this).addClass('active');
    })
    $('.close').click(function (e) {
        e.stopPropagation();
        $('.wrapper').removeClass('wrapper-active');
        $('.active').removeClass('active');
    })
}())