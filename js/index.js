window.onload = function(){

	var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');
	var canvas = oCanvas.create({
		canvas: "#canvas",
		background: "#DFDCE0",
	});
	var log = document.getElementById('log');
	var log2 = document.getElementById('log2');
	var log3 = document.getElementById('log3');

	var ancho = "100%",
	    alto = "100px";

	    var posx = 150;
	    var btn_activo = false;

	canvas.width = 360;
	canvas.height = 511;


    	var articulos = canvas.display.rectangle({
    		x: Math.floor((Math.random() * 300) + 1),
    		y: Math.floor((Math.random() * 200) + 1),
    		width: 50,
    		height: 50,
    		fill: "#BF08FF"
    	   })
    	//canvas.addChild(articulos);

	var contenedor = canvas.display.rectangle({
		x: 0,
		y: 431,
		width: 360,
		height: 80,
		fill: "#E0183A",
	});
	var flecha = canvas.display.image({
		x: 165,
		y: 515,
		width: 24,
		height:24,
		//fill: "#ccc",
		image: "img/botones/arrow-down.png"
	});
    var altura = 431;
	var contenedor_1 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
	var contenedor_2 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
	var contenedor_3 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
	var contenedor_4 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
	var contenedor_5 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
    var contenedor_6 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
	var contenedor_7 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});
	var contenedor_8 = canvas.display.rectangle({
		x: 0,
	    y: altura,
		width: 360,
		height: 80,
		fill: "#0AE0DA",
	});

			var flecha_izquierda = canvas.display.image({
			x: 325,
	        y: 460,
	        width: 24,
	        height: 24,
	        image: "img/botones/skip-forward.png"
		});
			var flecha_derecha = canvas.display.image({
				x: 10,
				y: 460,
				width: 24,
				height: 24,
				image: "img/botones/skip-back.png"
			});
		var cuadro1 = canvas.display.rectangle({
			x: 310,
	        y: 448,
	        width: 50,
	        height: 50,
	        fill: "#E0183A",
		});
		var cuadro2 = canvas.display.rectangle({
				x: 0,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E0183A",
			});

			var contenidos_1 = canvas.display.rectangle({
				x: 60,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E0CF48"
			})
			var contenidos_2 = canvas.display.rectangle({
				x: 123,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E00FCC"
			})
			var contenidos_3 = canvas.display.rectangle({
				x: 185,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E07406"
			})
			var contenidos_4 = canvas.display.rectangle({
				x: 250,
				y: 448,
				width: 50,
				height: 50,
				fill: "#22E00E"
			})
			var contenidos_5 = canvas.display.rectangle({
				x: 360,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E0CF48"
			})
			var contenidos_6 = canvas.display.rectangle({
				x: 425,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E00FCC"
			})
			var contenidos_7 = canvas.display.rectangle({
				x: 490,
				y: 448,
				width: 50,
				height: 50,
				fill: "#E07406"
			})
			var contenidos_8 = canvas.display.rectangle({
				x: 550,
				y: 448,
				width: 50,
				height: 50,
				fill: "#22E00E"
			})

    canvas.bind("touchmove", function(){

    log.value = "x " + canvas.touch.x.toFixed();
    log2.value = "y " + canvas.touch.y.toFixed();

    if (canvas.bind("touchmove") && canvas.touch.x >= 180){
    	log3.value = "esto es mayor";
    }else if(canvas.bind("touchmove") && canvas.touch.x <= 180){
    	log3.value = "esto es menor";
    };

    });
contenidos_1.bind('click tap', function(){
    for_init();
});

/*esto seria donde comienso con mi funcion que da pie al ciclo for que contiene el array*/
function for_init(){

       var img1;
	   img1 = new Image();
       img1.src = "img/capitan.png";

       var img2;
	   img2 = new Image();
       img2.src = "img/hulk.png";

       var img3;
	   img3 = new Image();
       img3.src = "img/iron.png";

       var img4;
	   img4 = new Image();
       img4.src = "img/thor.png";

       var iniciar = false;

    var img = new Array(4);

	img[1] = img1;
	img[2] = img2;
	img[3] = img3;
	img[4] = img4;

	 for (var i=1; i <= 4; i++){
       var posx = 6;
       var posy = 500;
       vely = 135;

    var figura_2 = canvas.display.image({
    	x: posx + (i*60),
    	y: posy,
    	width: 50,
    	height: 50,
    	image: img[i],
    })
    canvas.addChild(figura_2);

//aqui es donde estoy animando mis objetos estoy tomando el obj numero 1 del ciclo for esto es lo que quiero hacer cuando le de click a un boton pero a qui lo tengo en automatico por defecto
    if (i == 1){
    	figura_2.x = posx + (i*54);
        figura_2.animate({ y: figura_2.y - vely},"ease-in-out-expo");
        figura_2.dragAndDrop({});
        	if (i == 1){
        		inicio();
        }else{
        	console.log("valor nulo");
        };
    }else{
    }

    if (i == 2){
    	figura_2.x = posx + (i*58);
    	figura_2.animate({ y: figura_2.y - vely},"ease-in-out-expo");
    	figura_2.dragAndDrop({});
    	if (i == 2){
        		inicio();
        }else{
        	console.log("valor nulo");
        };
    }else{
    }

    if (i == 3){
    	figura_2.x = posx + (i*59.5);
    	figura_2.animate({ y: figura_2.y - vely},"ease-in-out-expo");
    	figura_2.dragAndDrop({});
    	if (i == 3){
        		inicio();
        }else{
        	console.log("valor nulo");
        };
    }else{
    }
    
    if (i == 4){
    	figura_2.x = posx + (i*61);
    	figura_2.animate({ y: figura_2.y - vely},"ease-in-out-expo");
    	figura_2.dragAndDrop({});
    	if (i == 4){
    		inicio();
        		function inicio(){
        			figura_2.animate({ y: figura_2.y - 50},"ease-in-out-expo");
        		}//function que me hace la animacion de todos mis objetos del ciclo for 
        }else{
        	console.log("valor nulo");
        };
    }else{
    }
    //asta qui mis animaciones 
 } // ciclo for

} // funcion for_init();

/*esto seria donde comienso con mi funcion que da pie al ciclo for que contiene el array*/

menu_1();
function menu_1(){
	flecha_izquierda.bind("click tap", function(){
		var velx = 250;
		var velx_2 = 300;
		contenidos_1.animate({ x: contenidos_1.x - velx},"ease-in-out-expo");
		contenidos_2.animate({ x: contenidos_2.x - velx,},"ease-in-out-expo");
		contenidos_3.animate({ x: contenidos_3.x - velx,},"ease-in-out-expo");
		contenidos_4.animate({ x: contenidos_4.x - velx,},"ease-in-out-expo");
		//segundos cuadros
		contenidos_5.animate({ x: contenidos_5.x - velx_2,},"ease-in-out-expo");
		contenidos_6.animate({ x: contenidos_6.x - velx_2,},"ease-in-out-expo");
		contenidos_7.animate({ x: contenidos_7.x - velx_2,},"ease-in-out-expo");
		contenidos_8.animate({ x: contenidos_8.x - velx_2,},"ease-in-out-expo");
		this.unbind('click tap');
		menu_2();
	});
}
function menu_2(){
		flecha_derecha.bind("click tap", function(){
		var velx = 250;
		var velx_2 = 300;
		contenidos_1.animate({ x: contenidos_1.x + velx,},"ease-in-out-expo");
		contenidos_2.animate({ x: contenidos_2.x + velx,},"ease-in-out-expo");
		contenidos_3.animate({ x: contenidos_3.x + velx,},"ease-in-out-expo");
		contenidos_4.animate({ x: contenidos_4.x + velx,},"ease-in-out-expo");
		//segundos cuadros
		contenidos_5.animate({ x: contenidos_5.x + velx_2,},"ease-in-out-expo");
		contenidos_6.animate({ x: contenidos_6.x + velx_2,},"ease-in-out-expo");
		contenidos_7.animate({ x: contenidos_7.x + velx_2,},"ease-in-out-expo");
		contenidos_8.animate({ x: contenidos_8.x + velx_2,},"ease-in-out-expo");
		this.unbind('click tap');
		menu_1();
	});
}

inicio_btn();
inicio_btn2();
inicio_btn3();
inicio_btn4();
inicio_btn5();
inicio_btn6();
inicio_btn7();
inicio_btn8();
function inicio_btn(){
	contenidos_1.bind("click tap", function(){
		contenedor_1.animate({ y: contenedor_1.y - 80},600);
		if (contenidos_1.bind("click tap")){
			contenidos_1.animate({ x: contenidos_1.x - 250});
		    contenidos_2.animate({ x: contenidos_2.x - 250});
		    contenidos_3.animate({ x: contenidos_3.x + 300});
		    contenidos_4.animate({ x: contenidos_4.x + 300});
		    flecha.animate({y: flecha.y - 55},600);
		    flecha_izquierda.animate({y: flecha_izquierda.y - 83},600);
		    flecha_derecha.animate({y: flecha_derecha.y - 83},600);
		    if(flecha.animate({y: flecha.y - 55},600)){
		    	flecha.bind("click tap", function(){
		    		//log3.value = "init boton";
		    		 flecha_izquierda.animate({y: flecha_izquierda.y + 83},600);
		             flecha_derecha.animate({y: flecha_derecha.y + 83},600);
		             contenidos_1.animate({ x: contenidos_1.x + 250});
		             contenidos_2.animate({ x: contenidos_2.x + 250});
		             contenidos_3.animate({ x: contenidos_3.x - 300});
		             contenidos_4.animate({ x: contenidos_4.x - 300});
		             contenedor_1.animate({ y: contenedor_1.y + 80},600);
		             this.unbind('click tap');
		             inicio_btn();
		             flecha.animate({y: flecha.y + 55},600);
		             this.unbind('click tap');

		    	})
		    };
		}
		this.unbind("click tap");
		
	});
}
function inicio_btn2(){
	contenidos_2.bind("click tap", function(){
		contenedor_2.animate({ y: contenedor_2.y - 80},600);
		this.unbind("click tap");
		end_boton2();
	})
}
function inicio_btn3(){
	contenidos_3.bind("click tap", function(){
		contenedor_3.animate({ y: contenedor_3.y - 80},600);
		this.unbind("click tap");
		end_boton3();
	})
}
function inicio_btn4(){
	contenidos_4.bind("click tap", function(){
		contenedor_4.animate({ y: contenedor_4.y - 80},600);
		this.unbind("click tap");
		end_boton4();
	})
}
function inicio_btn5(){
	contenidos_5.bind("click tap", function(){
		contenedor_5.animate({ y: contenedor_5.y - 80},600);
		this.unbind("click tap");
		end_boton5();
	})
}
function inicio_btn6(){
	contenidos_6.bind("click tap", function(){
		contenedor_6.animate({ y: contenedor_6.y - 80},600);
		this.unbind("click tap");
		end_boton6();
	})
}
function inicio_btn7(){
	contenidos_7.bind("click tap", function(){
		contenedor_7.animate({ y: contenedor_7.y - 80},600);
		this.unbind("click tap");
		end_boton7();
	})
}
function inicio_btn8(){
	contenidos_8.bind("click tap", function(){
		contenedor_8.animate({ y: contenedor_8.y - 80},600);
		this.unbind("click tap");
		end_boton8();
	})
}

//separador----------------------------------------------------

function end_boton2(){
	contenidos_2.bind("click tap", function(){
		contenedor_2.animate({ y: contenedor_2.y + 80},600);
		this.unbind('click tap');
		inicio_btn2();
		});
}
function end_boton3(){
	contenidos_3.bind("click tap", function(){
		contenedor_3.animate({ y: contenedor_3.y + 80},600);
		this.unbind('click tap');
		inicio_btn3();
		});
}
function end_boton4(){
	contenidos_4.bind("click tap", function(){
		contenedor_4.animate({ y: contenedor_4.y + 80},600);
		this.unbind('click tap');
		inicio_btn4();
		});
}
function end_boton5(){
	contenidos_5.bind("click tap", function(){
		contenedor_5.animate({ y: contenedor_5.y + 80},600);
		this.unbind('click tap');
		inicio_btn5();
		});
}
function end_boton6(){
	contenidos_6.bind("click tap", function(){
		contenedor_6.animate({ y: contenedor_6.y + 80},600);
		this.unbind('click tap');
		inicio_btn6();
		});
}
function end_boton7(){
	contenidos_7.bind("click tap", function(){
		contenedor_7.animate({ y: contenedor_7.y + 80},600);
		this.unbind('click tap');
		inicio_btn7();
		});
}
function end_boton8(){
	contenidos_8.bind("click tap", function(){
		contenedor_8.animate({ y: contenedor_8.y + 80},600);
		this.unbind('click tap');
		inicio_btn8();
		});
}
canvas.addChild(contenedor_1);
canvas.addChild(contenedor_2);
canvas.addChild(contenedor_3);
canvas.addChild(contenedor_4);
canvas.addChild(contenedor_5);
canvas.addChild(contenedor_6);
canvas.addChild(contenedor_7);
canvas.addChild(contenedor_8);
	canvas.addChild(contenedor);
	            canvas.addChild(contenidos_1);
	                canvas.addChild(contenidos_2);
	                    canvas.addChild(contenidos_3);
	                        canvas.addChild(contenidos_4);
		                        canvas.addChild(contenidos_5);
			                        canvas.addChild(contenidos_6);
				                        canvas.addChild(contenidos_7);
					                        canvas.addChild(contenidos_8);

		    canvas.addChild(cuadro1);
	        canvas.addChild(cuadro2);
			canvas.addChild(flecha_izquierda);
	        canvas.addChild(flecha_derecha);
	        canvas.addChild(flecha);

	//contenedor.dragAndDrop({});





}//function mayor
