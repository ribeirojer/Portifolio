function myFun() {
            
    var ob = document.getElementById("raiz");
    var imagebutton = document.getElementById("img-dark-mode");
    var terceirofundo = document.getElementById("segundasecao");

    if(ob.classList.contains("dark-mode")) {
        imagebutton.src = 'assets/lua.png';
        ob.classList.remove("dark-mode");
        terceirofundo.style.backgroundImage="url(assets/ffflux-claro.svg)";
    }
    else{
        imagebutton.src = 'assets/sol.png';
        ob.classList.add("dark-mode");
        terceirofundo.style.backgroundImage="url(assets/ffflux-escuro.svg)";
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