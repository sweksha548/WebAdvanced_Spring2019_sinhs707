window.addEventListener('DOMContentLoaded', function(e){
	e.preventDefault();


	var navOffset = $("body").offset().top;         //measuring the offset position
	 //i.e. distance from the top of the page to the top of the element
	 //("body") or ("#first/second/third") gives the position of the div of that id element
	 console.log(navOffset);


	//this is equal to window.addEventListener
	$(window).scroll(function(){                     //trigger the func when we scroll the window
		var scrollPos = $(window).scrollTop();       //measure the distance from TOP
		//console.log(scrollPos);

		var stickNav = $("nav");                     //substitute for document.getElementByClass("nav")
		scrollMenu(stickNav);

		var stickMenu = $(".menubar");
		scrollMenu(stickMenu);

		function scrollMenu(banana){
			if(scrollPos >= navOffset){
				banana.addClass("fixed"); 
				//$(".menubar").addClass("fixed");            //(".nav") and .addClass("nav")     
				//$("nav").addClass("fixed"); 
			}else{
				banana.removeClass("fixed");
				//$(".menubar").removeClass("fixed");
				//$("nav").removeClass("fixed");
			}
		}

	});
});


	
	function scrollEvent(){
		// I am looking for the link tag <a> inside the list inside the nav
		$('nav li a').click(function(){

			var myTarget = $(this.hash);            //.this -> reference to an argument, it looks for #
			//myTarget = myTarget.length && myTarget; 

			var targetOffset = myTarget.offset().top;   //position of myTarget w.r.t the top
			$('html , body').animate({scrollTop : targetOffset}, 1000);
		});
		
	}


















