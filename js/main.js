document.addEventListener("DOMContentLoaded", function() {
    // bien su dung .declick
    // var nut = document.getElementsByClassName("item-device"),
    //     nd = document.getElementsByClassName("box-show"),
    var click = document.querySelector('.click-menu'),
        show_menu = document.querySelector('.show-menu');
    // for (var i = 0; i < nut.length; i++) {
    //     nut[i].addEventListener("click", function() {
    //         if (this.classList[1] == "blue") {
    //             // click vao cai da hien thi roi

    //             this.classList.remove("blue"); // bo mau trang o chinh no
    //             // 3 dong duoi la cho div cua doi tuong dc click an di
    //             var ndhienra = this.getAttribute("data-toggle");
    //             var phan_tu_hien_ra = document.getElementById(ndhienra);
    //             phan_tu_hien_ra.classList.remove("show_hidden");
    //         } // click vao cac cai con lai
    //         else {
    //             // cho tat ca bo mau trang di
    //             for (var k = 0; k < nut.length; k++) {
    //                 nut[k].classList.remove("blue");
    //             }

    //             // doi tuong dc click (this) thanh mau trang
    //             this.classList.add("blue");

    //             //lay ve cai data-hienlien
    //             var ndhienra = this.getAttribute("data-toggle");
    //             var phan_tu_hien_ra = document.getElementById(ndhienra);
    //             // console.log(phan_tu_hien_ra);
    //             // cho tat ca cac div  .dehienthi khac an di
    //             for (var i = 0; i < nd.length; i++) {
    //                 nd[i].classList.remove("show_hidden");
    //             }
    //             // cho div cua doi tuong dc click hien thi ra
    //             phan_tu_hien_ra.classList.add("show_hidden");

    //         }
    //     });
    // }
    // window.addEventListener('scroll', function() {
    //     if (window.pageYOffset > 500) {
    //         click.classList.add('show-menu');
    //         // round.classList.add('show-Round');
    //     } else {
    //         click.classList.remove('show-menu');
    //         // round.classList.remove('show-Round');
    //     }
    // })


});
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

// var detector = new MobileDetect(window.navigator.userAgent);
// console.log("Mobile:" + detector.mobile());
$("#slideNews").on("slid.bs.carousel", function() {
    $(".carousel-indicators li.item-li").each(function() {
        if ($(this).hasClass("active")) {
            let location = $(this).attr("data-slide-to");
            console.log("Location: ", location);

            // Cách 1
            checkShowItem(parseInt(location)); // Phải parseInt chuyển ra dạng number mới so sánh dc

            // Cách 2        
            $(".menu-news_desktop li.menu-item").removeClass('act');

            $(".menu-news_desktop li.menu-item").eq(location).addClass("act");
        }
    });
});

function checkShowItem(location) {
    $(".menu-news_mobile li.menu-item").each(function(index) {
        if (index === location) {
            console.log("run");
            $(".menu-news_mobile li.menu-item").removeClass("active");
            $(this).addClass("active");
        }
    });
}

$("#slideNews").carousel({
    interval: 2000,
    cycle: true,
});



$(document).ready(function(e) {

    $(".language_drop").msDropdown({ roundedBorder: false });
    $("#tech").data("dd");

});
// Xử Lý Quy Trình Thực Hiện
$(document).ready(function($) {
    // mobile
    $("#step1").css({
        "background-color": "#2A42A7",
        color: "white",
    });

    $("#textstep2").css({
        display: "none",
    });

    $("#textstep3").css({
        display: "none",
    });

    $("#img2").css({
        display: "none",
    });

    $("#img3").css({
        display: "none",
    });
    // pc
    $("#step1pc").css({
        "background-color": "#2A42A7",
        color: "white",
    });
    $("#img2pc").css({
        display: "none",
    });

    $("#img3pc").css({
        display: "none",
    });

    // Xử lí click nút trên Desktop
    $("#step1pc").click(function() {
        // Nút
        $("#step1pc").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step2pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step3pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Ảnh
        $("#img1pc").css({
            display: "block",
        });
        $("#img2pc").css({
            display: "none",
        });

        $("#img3pc").css({
            display: "none",
        });
    });
    $("#step2pc").click(function() {
        // Nút
        $("#step2pc").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step1pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step3pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Ảnh
        $("#img2pc").css({
            display: "block",
        });
        $("#img1pc").css({
            display: "none",
        });

        $("#img3pc").css({
            display: "none",
        });
    });
    $("#step3pc").click(function() {
        // Nút
        $("#step3pc").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step1pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step2pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Ảnh
        $("#img3pc").css({
            display: "block",
        });
        $("#img2pc").css({
            display: "none",
        });

        $("#img1pc").css({
            display: "none",
        });
    });
    // ============================
    $("#text-step1pc").click(function() {
        // Nút
        $("#step1pc").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step2pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step3pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Ảnh
        $("#img1pc").css({
            display: "block",
        });
        $("#img2pc").css({
            display: "none",
        });

        $("#img3pc").css({
            display: "none",
        });
    });
    $("#text-step2pc").click(function() {
        // Nút
        $("#step2pc").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step1pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step3pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Ảnh
        $("#img2pc").css({
            display: "block",
        });
        $("#img1pc").css({
            display: "none",
        });

        $("#img3pc").css({
            display: "none",
        });
    });
    $("#text-step3pc").click(function() {
        // Nút
        $("#step3pc").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step1pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step2pc").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Ảnh
        $("#img3pc").css({
            display: "block",
        });
        $("#img2pc").css({
            display: "none",
        });

        $("#img1pc").css({
            display: "none",
        });
    });

    // Xử lí click nút trên Mobile
    $("#step1").click(function() {
        // Nút
        $("#step1").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step2").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step3").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Nội Dung
        $("#textstep1").css({
            display: "block",
        });
        $("#textstep2").css({
            display: "none",
        });
        $("#textstep3").css({
            display: "none",
        });
        // Ảnh
        $("#img1").css({
            display: "block",
        });
        $("#img2").css({
            display: "none",
        });

        $("#img3").css({
            display: "none",
        });
    });
    $("#step2").click(function() {
        // Nút
        $("#step2").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step1").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step3").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Nội Dung
        $("#textstep2").css({
            display: "block",
        });
        $("#textstep1").css({
            display: "none",
        });
        $("#textstep3").css({
            display: "none",
        });
        // Ảnh
        $("#img2").css({
            display: "block",
        });
        $("#img1").css({
            display: "none",
        });

        $("#img3").css({
            display: "none",
        });
    });
    $("#step3").click(function() {
        // Nút
        $("#step3").css({
            "background-color": "#2A42A7",
            color: "white",
        });
        $("#step1").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        $("#step2").css({
            "background-color": "white",
            color: "#2A42A7",
        });
        // Nội Dung
        $("#textstep3").css({
            display: "block",
        });
        $("#textstep2").css({
            display: "none",
        });
        $("#textstep1").css({
            display: "none",
        });
        // Ảnh
        $("#img3").css({
            display: "block",
        });
        $("#img2").css({
            display: "none",
        });

        $("#img1").css({
            display: "none",
        });
    });
});