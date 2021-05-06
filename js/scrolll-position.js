$(function() {
    var MK = $("#MK").offset().top;
    $(".click-MK").click(function() {
        $("body,html").animate({ scrollTop: MK });

    })
})