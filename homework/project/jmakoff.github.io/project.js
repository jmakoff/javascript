

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
	 	var m =  window.pageYOffset
		var _now = m;
		
		var int = setInterval(function(){
		
			if (_now<y){
				_now+=10
				window.scrollTo(0, _now)
			if(_now>y){
				clearInterval(int);

			}}
			else {
				_now-=10;
				window.scrollTo(0, _now)
			if(_now<y){
				clearInterval(int);

			}
			}
			

		}, 0.1)
		
	};
	home.onclick = function () {
		 scroll(10);
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

	var srv_btn = document.getElementsByClassName("srv_icon");
	 	for(i=0;i<srv_btn.length;i++){
		srv_btn[i].addEventListener('mouseenter', function(){
			this.classList.toggle("bigIcons2")
			var lf = parseInt(window.getComputedStyle(this).left, 10)
			this.style.left= (lf-5)+"px";
			var top = parseInt(window.getComputedStyle(this).top, 10)
			this.style.top= (top-5)+"px";
		})
		srv_btn[i].addEventListener("mouseleave", function(){
			this.classList.toggle("bigIcons2")
			var lf = parseInt(window.getComputedStyle(this).left, 10)
			this.style.left= (lf+5)+"px";
			var top = parseInt(window.getComputedStyle(this).top, 10)
			this.style.top= (top+5)+"px";

		})}
	 var overlay1= document.createElement('div')
	 overlay1.className = 'overlay1';
	 var overlay2 = document.createElement('div')
	 overlay2.className = 'overlay2';
	 var overlay3 = document.createElement('div')
	 overlay3.className = 'overlay3';
	 var overlay4 = document.createElement('div')
	 overlay4.className = 'overlay4';

	 var photos =  document.getElementsByClassName("photos");
	 for (var i=0;i<photos.length;){
	 	
	 	photos[i].addEventListener("mouseenter", function () {
	 		 this.appendChild(overlay1)
	 	})
	 	photos[i].addEventListener("mouseleave", function () {
	 		 this.removeChild(overlay1)
	 	})
	 		 	i=i+4;

	 };
	 for (var i=1;i<photos.length;){
	 	
	 	photos[i].addEventListener("mouseenter", function () {
	 		 this.appendChild(overlay2)
	 	});
	 	
	 	photos[i].addEventListener("mouseleave", function () {
	 		 this.removeChild(overlay2)
	 	})
	 	i=i+4;
	 }
	 for (var i=2;i<photos.length;){
	 	
	 	photos[i].addEventListener("mouseenter", function () {
	 		 this.appendChild(overlay3)
	 	});
	 	
	 	photos[i].addEventListener("mouseleave", function () {
	 		 this.removeChild(overlay3)
	 	})
	 	i=i+4;
	 }
	 for (var i=3;i<photos.length;){
	 	
	 	photos[i].addEventListener("mouseenter", function () {
	 		 this.appendChild(overlay4)
	 	});
	 	
	 	photos[i].addEventListener("mouseleave", function () {
	 		 this.removeChild(overlay4)
	 	})
	 	i=i+4;
	 }
	 var navig = document.getElementsByClassName("navigation");
	 for (var i = 0; i < navig.length; i++) {
	 	
	 
	 	navig[i].addEventListener("mouseover", function () {
	 	 	this.style.color = '#ffe600';
	 	});
	 	navig[i].addEventListener("mouseleave", function () {
	 	 	this.style.color = 'black';
	 	});

	}	
	var webD = document.getElementById("webD");
	var count1=0;
		webD.onclick = function(){
			if (count1>0){
				return false;
			}

			photos[0].appendChild(overlay1);
			photos[3].appendChild(overlay1.cloneNode(false));
			photos[7].appendChild(overlay1.cloneNode(false));			
			photos[11].appendChild(overlay1.cloneNode(false));
		
			webD.addEventListener("mouseleave",function(){
				photos[0].removeChild(overlay1);
				photos[3].removeChild(photos[3].children[0]);
				photos[7].removeChild(photos[7].children[0]);			
				photos[11].removeChild(photos[11].children[0]);
				count1=0
			})
			count1++;
				
		}
	var grD = document.getElementById("grD");
	var count2=0
	 	grD.onclick = function(){
	 		if (count2>0){
				return false;
			}
			photos[1].appendChild(overlay2);
			photos[4].appendChild(overlay2.cloneNode(false));
			photos[8].appendChild(overlay2.cloneNode(false));			
			
		grD.onmouseleave = function(){
				photos[1].removeChild(photos[1].children[0]);
				photos[4].removeChild(photos[4].children[0]);
				photos[8].removeChild(photos[8].children[0]);
				count2 = 0			
				
			}
			count2++;
		}
	
	 var photo = document.getElementById("photo");
	 var count3 = 0;
	 	photo.onclick = function(){
	 		if (count3>0){
				return false;
			}
			photos[2].appendChild(overlay3);
			photos[5].appendChild(overlay3.cloneNode(false));
			photos[9].appendChild(overlay3.cloneNode(false));			
			
		photo.onmouseleave = function(){
				photos[2].removeChild(photos[2].children[0]);
				photos[5].removeChild(photos[5].children[0]);
				photos[9].removeChild(photos[9].children[0]);			
				count3 = 0;
			}
			count3++;
		}
	var ill =document.getElementById("illustr");
	count4 = 0;
		ill.onclick = function(){
			if (count4>0){
				return false;
			}
			photos[3].appendChild(overlay4);
			photos[6].appendChild(overlay4.cloneNode(false));
			photos[10].appendChild(overlay4.cloneNode(false));			
			
		ill.onmouseleave = function(){
				photos[3].removeChild(photos[3].children[0]);
				photos[6].removeChild(photos[6].children[0]);
				photos[10].removeChild(photos[10].children[0]);			
				count4 = 0
			}
			count4++;
		}	
	var all = document.getElementsByClassName("navigation")[0];
	count5 = 0
		all.onclick = function(){
			if (count5>0){
				return false;
			}
			photos[0].appendChild(overlay1);
			photos[3].appendChild(overlay1.cloneNode(false));
			photos[7].appendChild(overlay1.cloneNode(false));			
			photos[11].appendChild(overlay1.cloneNode(false));
			photos[1].appendChild(overlay2);
			photos[4].appendChild(overlay2.cloneNode(false));
			photos[8].appendChild(overlay2.cloneNode(false));
			photos[2].appendChild(overlay3);
			photos[5].appendChild(overlay3.cloneNode(false));
			photos[9].appendChild(overlay3.cloneNode(false));
			photos[3].appendChild(overlay4);
			photos[6].appendChild(overlay4.cloneNode(false));
			photos[10].appendChild(overlay4.cloneNode(false));		

			all.onmouseleave = function(){
				photos[0].removeChild(overlay1);
				photos[3].removeChild(photos[3].children[0]);
				photos[7].removeChild(photos[7].children[0]);			
				photos[11].removeChild(photos[11].children[0]);	
				photos[1].removeChild(photos[1].children[0]);
				photos[4].removeChild(photos[4].children[0]);
				photos[8].removeChild(photos[8].children[0]);
				photos[2].removeChild(photos[2].children[0]);
				photos[5].removeChild(photos[5].children[0]);
				photos[9].removeChild(photos[9].children[0]);	
				photos[3].removeChild(photos[3].children[0]);
				photos[6].removeChild(photos[6].children[0]);
				photos[10].removeChild(photos[10].children[0]);	
				count5 = 0;					
				}
			count5++;
		}
		var count = 0;
		var countC=0;
		window.onscroll = function(){
		var scrollw = window.pageYOffset
		if(count>0){
			return false;
		}

		
		if(scrollw>2000){
			
			var c = 0
			
			var intcoffee = setInterval(function(){
				c= c+(20000/200);
				document.getElementById("coffee").innerHTML = c;
				

			}, 15)
			setTimeout(function(){
				clearInterval(intcoffee)
				document.getElementById("coffee").innerHTML = 20000;
			}, 3001);
			var a = 0;
			var intaw = setInterval(function(){
				a= a+(Math.floor(40/20));
				
				document.getElementById("aw").innerHTML = a;
			}, 150)
			setTimeout(function(){
				clearInterval(intaw)
				document.getElementById("aw").innerHTML = 40;
			}, 3001);
			var p = 0;
			var prjint = setInterval(function(){
				p= p+(Math.floor(3200/50));
				
				document.getElementById("compl").innerHTML = p;
			}, 60)
			setTimeout(function(){
				clearInterval(prjint)
				document.getElementById("compl").innerHTML = 3200;
			}, 3001)
			var cl = 0;
			var clint = setInterval(function(){
				cl= cl+(Math.floor(1600/50));
				
				document.getElementById("happy").innerHTML = cl;
			}, 60)
			setTimeout(function(){
				clearInterval(clint)
				document.getElementById("happy").innerHTML = 1600;
			}, 3001)
			count++
			
			}else{
				document.getElementById("coffee").innerHTML = 0
				document.getElementById("aw").innerHTML = 0
				document.getElementById("compl").innerHTML = 0;
				document.getElementById("happy").innerHTML = 0;
			}

			
		
		
		}
		var aboutIcons = document.getElementsByClassName('aboutIcons')
		for(i=0;i<aboutIcons.length;i++){
		aboutIcons[i].addEventListener('mouseenter', function(){
			this.classList.toggle("bigIcons")
			var lf = parseInt(window.getComputedStyle(this).left, 10)
			this.style.left= (lf-10)+"px";
			var top = parseInt(window.getComputedStyle(this).top, 10)
			this.style.top= (top-10)+"px";
		})
		aboutIcons[i].addEventListener("mouseleave", function(){
			this.classList.toggle("bigIcons")
			var lf = parseInt(window.getComputedStyle(this).left, 10)
			this.style.left= (lf+10)+"px";
			var top = parseInt(window.getComputedStyle(this).top, 10)
			this.style.top= (top+10)+"px";

		})
		}
		var text = document.getElementsByClassName("text")[0];
		var secMan = document.getElementById("secMan")
		secMan.addEventListener("click", function () {
			var a=0
			 var timer=setInterval(function(){

			 	 a+=0.1;
			 	text.style.opacity=a;

			 }, 100)
			 setTimeout(function () {
			 	 clearInterval(timer)
			 	 text.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

			 }, 1000)

		})
		var thirdMan = document.getElementById("thirdMan")
		thirdMan.addEventListener("click", function () {
			var a=0
			 var timer=setInterval(function(){

			 	a+=0.1;
			 	text.style.opacity=a;

			 }, 100)
			 setTimeout(function () {
			 	 clearInterval(timer)
			 	 text.innerHTML="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.";

			 }, 1000)

		})
		var fourthMan = document.getElementById("fourthMan")
		fourthMan.addEventListener("click", function () {
			var a=0
			 var timer=setInterval(function(){

			 	a+=0.1;
			 	text.style.opacity=a;

			 }, 100)
			 setTimeout(function () {
			 	 clearInterval(timer)
			 	 text.innerHTML="Vim munere dictas quodsi id. Altera vivendum laboramus sit eu, nec ipsum vocibus ea. Duo mutat labores corrumpit ea, vel eruditi verterem ei. Ea nam dicant ceteros nusquam, has cu velit nominavi ponderum. Minimum appareat no duo, iisque mandamus an his. Dicunt vocent persecuti qui et.";

			 }, 1000)
			 })
			 var firstMan =  document.getElementById("firstMan")
			 firstMan.addEventListener('click', function(){
			 	
			 		var a=1
			 		var timer = setInterval(function(){
			 			a=a-0.1
			 			text.style.opacity = a;
			 		}, 100)
			 		setTimeout(function () {
			 			 clearInterval(timer)
			 		}, 1000);
			 	
			 })
		var dots = document.getElementsByClassName("dots");
		var quote = document.getElementsByClassName('quote')[0];
		var who = document.getElementsByClassName("who")[0];
		dots[0].addEventListener('click', function(){
			quote.style.opacity=0;
			who.style.opacity=0;

		})
		dots[1].addEventListener('click', function () {
				who.innerHTML = "Mark Colret"
			quote.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
			 quote.style.opacity=1;
			who.style.opacity=1;
		})
			dots[2].addEventListener('click', function () {
				who.innerHTML = "Will Dexter"
			quote.innerHTML = "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
			 quote.style.opacity=1;
			who.style.opacity=1;
		})
			 dots[3].addEventListener('click', function () {
				who.innerHTML = "Jim Henders"
			quote.innerHTML = "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
			 quote.style.opacity=1;
			who.style.opacity=1;
		})

	}
	
	