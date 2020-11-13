//------------------------------- PRIMER CAROUSEL INDEX-------------------------------------
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel1__lista'), {
	slidesToShow: 1,
	slidesToScroll: 1,	
  	dots: '.carousel1__indicadores',
  	arrows: {
		prev: '.carousel1__anterior',
		next: '.carousel1__siguiente'
		},
		responsive: [
    	{
      	// screens greater than >= 775px
      	breakpoint: 450,
      	settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
        duration: 0.25
      	}
    	},{
      	// screens greater than >= 1024px
      	breakpoint: 800,
      	settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        duration: 0.25
      	}
		}
  		]
	})
	
})

//------------------------------- SEGUNDO CAROUSEL INDEX-------------------------------------
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel2__lista'), {
	slidesToShow: 1,
	slidesToScroll: 1,
  	dots: '.carousel2__indicadores',
  	arrows: {
		prev: '.carousel2__anterior',
		next: '.carousel2__siguiente'
		},
		responsive: [
    	{
      	// screens greater than >= 775px
      	breakpoint: 650,
      	settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
      	}
    	},{
      	// screens greater than >= 1024px
      	breakpoint: 958,
      	settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        duration: 0.25
      	}
		}
  		]
	})
	
})

//PARA MENU RESPONSIVE--------------------------------------------------------------------------------
addEventListener('DOMContentLoaded', () =>{
	const btn_menu = document.querySelector('.btn_menu')
	if (btn_menu){
		btn_menu.addEventListener('click', () => {
			const menu_items = document.querySelector('.menu_items')
			menu_items.classList.toggle('show')
		})
	}
})

//------------------------------------------------------------------------------------------------------


var dmenu;
var dnosotros;
var dgaleria;
var dcontacto;


window.onload = function(){

	dmenu = document.getElementById("pes__menu");
	dnosotros = document.getElementById("pes__nosotros");
	dgaleria = document.getElementById("pes__galeria");
	dcontacto = document.getElementById("pes__contacto");
	

	var menu_id = document.getElementById("menu_id");
	menu_id.onclick = mostrar__menu;
	var nosotros_id = document.getElementById("nosotros_id");
	nosotros_id.onclick = mostrar__nosotros;
	var galeria_id = document.getElementById("galeria_id");
	galeria_id.onclick = mostrar__galeria;
	var contacto_id = document.getElementById("contacto_id");
	contacto_id.onclick = mostrar__contacto;
	
	dmenu.classList.add("escondido");
	dnosotros.classList.add("escondido");
	dgaleria.classList.add("escondido");
	dcontacto.classList.add("escondido");
}
function mostrar__menu(){
	dmenu.classList.remove("escondido");
	dnosotros.classList.add("escondido");
	dgaleria.classList.add("escondido");
	dcontacto.classList.add("escondido");
	
	document.getElementById('pes__home').style.display="none";
	document.getElementById("img__carta").style.display="none";
		
//	menu_id.style.color = "#f9c893";
//	menu_id.style.borderBottom =  "4px solid #F9C893";
//	nosotros_id.style.color = "#D39542";
//	nosotros_id.style.borderBottom =  "none";
//	galeria_id.style.color = "#D39542";
//	galeria_id.style.borderBottom =  "none";
//	contacto_id.style.color = "#D39542";
//	contacto_id.style.borderBottom =  "none";	
	
}
function mostrar__nosotros(){
	dnosotros.classList.remove("escondido");
	dmenu.classList.add("escondido");
	dgaleria.classList.add("escondido");
	dcontacto.classList.add("escondido");
	
	document.getElementById('pes__home').style.display="none";
	document.getElementById("img__carta").style.display="none";
	
//	menu_id.style.color = "#D39542";
//	menu_id.style.borderBottom =  "none";
//	nosotros_id.style.color = "#f9c893";
//	nosotros_id.style.borderBottom =  "4px solid #F9C893";
//	galeria_id.style.color = "#D39542";
//	galeria_id.style.borderBottom =  "none";
//	contacto_id.style.color = "#D39542";
//	contacto_id.style.borderBottom =  "none";		
}
function mostrar__galeria(){
	dgaleria.classList.remove("escondido");
	dmenu.classList.add("escondido");
	dnosotros.classList.add("escondido");
	dcontacto.classList.add("escondido");
	
	document.getElementById('pes__home').style.display="none";
	document.getElementById("img__carta").style.display="none";
	
//	menu_id.style.color = "#D39542";
//	menu_id.style.borderBottom =  "none";
//	nosotros_id.style.color = "#D39542";
//	nosotros_id.style.borderBottom =  "none";
//	galeria_id.style.color = "#f9c893";
//	galeria_id.style.borderBottom =  "4px solid #F9C893";
//	contacto_id.style.color = "#D39542";
//	contacto_id.style.borderBottom =  "none";	
}
function mostrar__contacto(){
	dcontacto.classList.remove("escondido");
	dmenu.classList.add("escondido");
	dnosotros.classList.add("escondido");
	dgaleria.classList.add("escondido");
	
	document.getElementById('pes__home').style.display="none";
	document.getElementById("img__carta").style.display="none";
	
//	menu_id.style.color = "#D39542";
//	menu_id.style.borderBottom =  "none";
//	nosotros_id.style.color = "#D39542";
//	nosotros_id.style.borderBottom =  "none";
//	galeria_id.style.color = "#D39542";
//	galeria_id.style.borderBottom =  "none";
//	contacto_id.style.color = "#f9c893";
//	contacto_id.style.borderBottom =  "4px solid #F9C893";	
	
}


//para ocultar carta

const btn_carta = document.getElementById("carta_id");
const carta = document.getElementById("img__carta");

document.getElementById("img__carta").style.display="none";

btn_carta.onclick = function(){
	carta.style.display = "block";
}
