$(document).ready(function(){

	/* menu hamburgesa para que se despliege */ 

	$(".boton-menu span").click(function(e){
		e.preventDefault();
		if($(".boton-menu span").attr('class') == 'icon icon-menu'){
			$(".boton-menu span").removeClass('icon icon-menu').addClass('icon icon-cancel');
			$(".navegacion nav").animate({left:'0'})
		} else {
			$(".boton-menu span").removeClass('icon icon-cancel').addClass('icon icon-menu');
			$(".navegacion nav").animate({left:'-100%'})
		}
	});

	
/* icono para que se despliege */ 

	$(window).scroll(function(){;

		if($(window).scrollTop() > navTop){
			$('.navegacion').css({'position':'fixed','top':'0'})
			$('body').css({'padding-top':navHeight})
			$('.nav-responsive').css({'position':'fixed'})
		} else{
			$('.navegacion').css({'position':'','top':''})
			$('body').css({'padding-top':'0'})
			$('.nav-responsive').css({'position':'absolute'})
		}
	});
});