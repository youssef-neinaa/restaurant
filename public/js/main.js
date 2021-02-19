$(() => {

    // hide loading page
    setTimeout(() => {
        $('.loading').fadeOut(700);
        $('body').css({
            overflow:'visible'
        })
    }, 500);

    // navigation scroll to sections
    $('.nav-item').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('active').addClass("active").siblings('li').removeClass('active');
        let $scrollTo = $($(this).find('a').data('section'));

        console.log($('html,body'));

        $('html,body').animate({
            scrollTop: parseInt($scrollTo.offset().top - 50),
        }, 700);

    });

    // logo click scroll to 0
    $('#logo,#to-top').on('click', function (e) {
        e.preventDefault();
        
        $('html,body').animate({
            scrollTop: 0
        }, 500);

        // set active link to home link
        $('.nav-item.home').click();
    });

    // check if the offset top >800 to show button scroll top

    function checkWindowOffset() {
        
        if ($(this).scrollTop() > 600) {
            $('#to-top').fadeIn(500);
        } else {
            $('#to-top').fadeOut(500);

        }
    }

    checkWindowOffset();

    $(window).on('scroll', function () {
        checkWindowOffset();
    });

    // use slim scroll
    // $('html').niceScroll({
    //     cursorcolor:"aquamarine",
    //     cursorwidth:"8px",
    //     zindex: "9998"
    // })

})