function myFun() {
            
    var ob = document.getElementById("raiz");
    var imagebutton = document.getElementById("img-dark-mode");
    
    if(ob.classList.contains("dark-mode")) {
        imagebutton.src = 'assets/lua.png';
        ob.classList.remove("dark-mode");
    }
    else{
        imagebutton.src = 'assets/sol.png';
        ob.classList.add("dark-mode");
    }
}

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});

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