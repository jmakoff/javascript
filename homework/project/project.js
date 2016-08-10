
window.onload=function(){
		var sliderBtnNext = document.getElementsByClassName("btn1")[0];
		var sliderBtnPrev = document.getElementsByClassName("btn2")[0];
		var menu = document.getElementsByClassName("slider")[0];
		var slides = ["url('image/mountains.jpg')", "url('image/fjord.jpg')", "url('image/forest.jpg')","url('image/norway.jpg')"]
		menu.style.backgroundImage = slides[0];
		var imageIndex=0;
		
		var timer = setInterval(function(){
			menu.style.backgroundImage = slides[imageIndex];
			imageIndex+=1;
			
			if (imageIndex>=slides.length){
				imageIndex=0;
			}
		}, 1000)
		
		sliderBtnPrev.onclick = function(){

			menu.style.backgroundImage = slides[imageIndex];
			imageIndex-=1;
			
			if (imageIndex<0){
				imageIndex=slides.length;
		}
		clearInterval(timer);


		
		}
		sliderBtnNext.onclick = function(){
			
			menu.style.backgroundImage = slides[imageIndex];
			imageIndex+=1;
			
			if (imageIndex>=slides.length){
				imageIndex=0;
			}
			clearInterval(timer);
			
		}
	var home = document.getElementById("home");
	var srv  = document.getElementById("srv");
	var work = document.getElementById("work");
	var about = document.getElementById("about");
	var clients = document.getElementById("clients");
	var contact = document.getElementById("contact");
	var contactUs = document.getElementsByClassName("btn_like")[0];
	 var scroll = function (y){
		var _now = window.pageYOffset
		var i = _now;
		var int = setInterval(function(){
			if (i<y){
			i+=5;}
			else {
				i-=5;
			}
			window.scrollTo(0, i)
			if(i===y){
				clearInterval(int)
			}

		}, 1)
		
	};
	home.onclick = function () {
		 scroll(0);
	}
	srv.onclick = function () {
		 scroll(750);
	}
	work.onclick = function () {
		 scroll(1450);
	}
	about.onclick = function () {
		 scroll(2560);
	}
	clients.onclick = function () {
		 scroll(4100);
	}

	contact.onclick = function () {
		 scroll(4600);
	}
	contactUs.onclick = function(){
		scroll(4600);
	}

	var srv_btn1 = document.getElementById('webDesign');
	 	srv_btn1.addEventListener('mouseover', function () {
	 		 alert(getComputedStyle(srv_btn1).getPropertyValue("height"))
	 	})
	 	srv_btn1.addEventListener("mouseout", function(){
	 		this.style.height = "75px";
	 		 this.style.width = "75px";
	 		 this.style.top = "52%";
	 		 this.style.left = "25.5%";
	 	})
	 

	 

	}
	