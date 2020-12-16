

/***---- ZMIENNIE ----***/

var WinSzer = $(window).width();					// Szerokość okna Aktualna
var WinWyso = $(window).height();

var menuNAV = $("#navMenu");
var $pasMenuUP = $("#pasekMenu");

var hambPower = false;

var HamburgBox = $("#hambMaster");

	var kr1 = $("#hamb1");
    var kr2 = $("#hamb2");
    var kr3 = $("#hamb3");

	var kr1Baza = $("#hamb1").position().top;
	var kr3Baza	= $("#hamb3").position().top;
	var kr2Baza;

var czyX = false;

/*--- READY for .ready() called. ---*/

$(function() {
	chcecOkno();
	menuWysoko();			// ustawia wysokość MobNavi względem ekranu
	ustawHambDoWin();		// ustawia wysokość MobHamburgera względem Scroll
//	naviBazowo();
	$(window).on("resize", function(){
		chcecOkno();
		menuWysoko();			// ustawia wysokość MobNavi względem ekranu
	//ustawHambDoWin();

	});

});



/**--- FUNKCJE DOPASOWANIA OKNA ---**/

function chcecOkno() {  // dopasowuje body do okna
	WinSzer = $(window).width();
	WinWyso = $(window).height();
	//var wysoko = WinWyso - $pasMenuUP.height()-50;
//	$('body').css({				 // Ustawienie Body na cały ekran
	//		"height" :  wysoko +"px",
	//		"width" :  WinSzer +"px",

	//	});
}


/***---- MENU pojawia się i znika ----***/

function naviBazowo() {  // SCroll Navi do na podtsawie pozycji paska

	var menuTop = $pasMenuUP.position().top + $pasMenuUP.height();

	menuNAV.css({				// Ustawienie pozycji Menu względem Paska
			"top" :  menuTop +"px",
		});
}

function menuWysoko(){		// Ustawienie Navi na wyskokośc ponad ekran

	/*if (WinSzer < 800) {*/
		var menuWyso = 50//WinWyso + 100;
	/*} else {
		var menuWyso = 50;
	}*/
if (WinSzer < 768) {
	menuNAV.css({				// Ustawienie pozycji Menu względem Paska
		//	"height" :  menuWyso +"px",
			"right" : "-"+ WinSzer*10 +"px",

		});

} else {
	menuNAV.css({				// Ustawienie pozycji Menu względem Paska
		//	"height" :  menuWyso +"px",
			"right" : "0px",

		});
}
}

function menuBrak(){
	menuNAV.animate({				// Ustawienie pozycji Menu względem Paska
		"right" : "-"+ WinSzer*10 +"px",
		}
		,{duration: 200, queue:false}
		);

}

function menuWidac(){
	menuNAV.animate({				// Ustawienie pozycji Menu względem Paska
		"right" : "0px",
		}
		,{duration: 200, queue:false}
		);
}

/*** FUNKCJE HABURGERA ***/

function ustawHambDoWin(){		// ustawienie bazowe HABURGERA do okna /800/

	/*if (WinSzer < 800) {*/
HamburgBox.on("click", function(){ HambMasterFunc() });
/*		if (!hambPower) {


			HamburgBox.css({"opacity" : "1"});
		}

		hambPower = true;*/


/*	} else {*/

	/*	if (hambPower) {
			HamburgBox.off("click");
			HamburgBox.css({"opacity" : "0"});
		}

		hambPower = false;*/
	/*}*/
}


function HambMasterFunc() { // CLICK HAMB sprawdza czy menu on/off i uruchamia odpowiednią animacje

	if (czyX) {
		czyX = false;
		menuBrak();
		hambOffMenu();

	} else {

		czyX = true;
		menuWidac();
		hambOnMenu();


	}

}


	function hambOnMenu(){	// robi X

				kr2.fadeOut(100);

                var ball = $('#hambMaster');
                document.getElementById('hambMaster').style.lineHeight = 0;
                ball.animate({ lineHeight : 45},{
                    step: function(now,fx){
                        kr1.css("transform","rotate(" + now + "deg)");
												kr3.css("transform","rotate(-" + now + "deg)");

                    },duration:200, queue:false
                }, 'linear');

				kr1.animate({ "top": "12px"}
					,{duration: 200, queue:false}, 'linear');
				kr3.animate({ "top": "12px"}
					,{duration: 200, queue:false}, 'linear');

    } //hambOnMenu()

	function hambOffMenu(){	// Wraca do =

                var ball = $('#hambMaster');
                document.getElementById('hambMaster').style.lineHeight = -45;
                ball.animate({ lineHeight : 0},{
                    step: function(now,fx){

											var sral = now - (now*2);
            					kr1.css("transform","rotate(" + now + "deg)");
											kr3.css("transform","rotate(" + sral + "deg)");

                    },duration:200, queue:false
                }, 'linear');

								kr1.animate({ "top":/* kr1Baza  + */"8px"}
									,{duration: 200, queue:false}, 'linear');

								kr3.animate({ "top": /*kr3Baza  + */"24px"}
										,{duration: 200, queue:false}, 'linear');

								kr2.delay(100).fadeIn(100);
    } //hambOffMenu()
