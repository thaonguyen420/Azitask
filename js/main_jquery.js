jQuery(function($) {

    $('.card-bottom').slideUp();
    $('.box-card .card-header').click(function(event) {

        $(this).next('.card-bottom').slideToggle();
        $(this).toggleClass('xanh');
    });
});