
$(function() {
    $(window).on("scroll", function() {
        altura = 649;
        if($(window).scrollTop() < altura) {
            $(".bx-home").addClass("visualizando");
        } else {
            $(".bx-home").removeClass("visualizando");
        }
        if($(window).scrollTop() >= altura && $(window).scrollTop() < 2*altura) {
            $(".bx-body").addClass("visualizando");
        } else {
            $(".bx-body").removeClass("visualizando");
        }
        if($(window).scrollTop() >= 2*altura && $(window).scrollTop() < 3*altura) {
            $(".bx-desktop").addClass("visualizando");
        } else {
            $(".bx-desktop").removeClass("visualizando");
        }
        if($(window).scrollTop() >= 3*altura ) {
            $(".bx-id-card").addClass("visualizando");
        } else {
            $(".bx-id-card").removeClass("visualizando");
        }
    });
});
