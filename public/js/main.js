$(() => {

    // navigation scroll to sections

    $('.nav-item').on('click', function () {

        $(this).removeClass('active').addClass("active").siblings('li').removeClass('active');
        let $scrollTo = $($(this).find('a').data('section'));

        console.log($('html,body'));

        $('html,body').animate({
            scrollTop: parseInt($scrollTo.offset().top - 50),
        }, 500);

    });

    // logo click scroll to 0
    $('#logo,#to-top').on('click', function () {

        $('html,body').animate({
            scrollTop: 0
        }, 500);
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

})