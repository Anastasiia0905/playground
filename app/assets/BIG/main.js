// Burger menu
let humburger = {
    navToggle: document.querySelector('.nav-toggle'),
	navMenu: document.querySelector('.nav-menu'),
	body: document.querySelector('body'),
    onToggle: function(e){
        e.preventDefault();
        this.navToggle.classList.toggle('expanted');
		this.navMenu.classList.toggle('expanted');
		this.body.classList.toggle('expanted');
    }
};
humburger.navToggle.addEventListener('click', function(e){
    humburger.onToggle(e);
});
/*// Accordion on burger menu
let dropMain = document.querySelectorAll('.drop');
function accord(){
    let ar = this.querySelector('.menu-array');
    let dropMenu = this.lastElementChild;
    ar.classList.toggle('expanted');
    if(dropMenu.style.maxHeight){
      dropMenu.style.maxHeight = null;
  } else {
      dropMenu.style.maxHeight = dropMenu.scrollHeight +"px";
  }
}
for( let i = 0; i < dropMain.length; i++){
	if (window.matchMedia('(min-width: 780px)').matches) {
		dropMain[i].addEventListener("mouseenter", function(){
			this.lastElementChild.classList.add('exp');
		});
		dropMain[i].addEventListener("mouseleave", function(){
			this.lastElementChild.classList.remove('exp');
		});
  	
	} else {
		dropMain[i].addEventListener('mouseenter', function(){
			accord.call(dropMain[i]);
		});
		dropMain[i].addEventListener('mouseleave', function(){
			accord.call(dropMain[i]);
		});
	}
}
//Sticky nav-bar 
window.onscroll = function(){
	fixNav();
}
let header = document.querySelector('.header');
let sticky = header.offsetTop;
function fixNav(){
		if(window.pageYOffset > sticky){
			header.classList.add('sticky');
		}
		else {
			header.classList.remove('sticky');
		}
}
///Drop menu on a big screen

///// Open drop menu on big screen



//// Slide-in in with scroll
function debounce(fn, wait = 20, imadiate =true){
    let timeout;
    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!imadiate) fn.apply(context, args);
        };
        let callNow = imadiate && !timeout;
        clearTimeout(timeout);
        timeout =setTimeout(later, wait);
        if(callNow) fn.apply(context, args);
    };
};
const slideImages = document.querySelectorAll('.slide-in');
function checkScroll(e){
	for(let i = 0; i < slideImages.length; i++){
    const slideInUp =  (window.scrollY + window.innerHeight) - slideImages[i].offsetHeight/2;
	const isHasHalf = slideInUp > slideImages[i].offsetTop;
	if(isHasHalf) slideImages[i].classList.add('show');
	}

}
window.addEventListener("scroll", debounce(checkScroll));
	

//// Carousel

let slideSec = document.querySelectorAll(".slide");
		let	prevArrow = document.querySelector(".prev");
		let	nextArrow = document.querySelector(".next");
		let dot = document.querySelector('.dot-group');
		let	current = 0;
		//Clear images
		function reset(){
			for(let i = 0; i < slideSec.length; i++){
				slideSec[i].style.display = "none";
				dot.children[i].classList.remove('active');
			}
		}
		//Init Slide	
		function showSlide(){
			reset();
			slideSec[current].style.display = "block";
			dot.children[current].classList.add('active');
		}
		//Show prev 
		function slideLeft(){
			reset();
			slideSec[current-1].style.display = "block";
			dot.children[current-1].classList.add('active');
			current --;
			
		}
		//Show next
		function slideRight(){
			reset();
			slideSec[current+1].style.display = "block";
			dot.children[current+1].classList.add('active');
			current ++;
		}
		//Show dot
		function showDot(){
			reset();
			slideSec[current].style.display = "block";
		}
		//add active class to the dot
		

		prevArrow.addEventListener('click', function(){
			if(current === 0){
				current = slideSec.length;
			}
			slideLeft();
		});
		nextArrow.addEventListener('click', function(){
			if(current === slideSec.length-1){
				current = -1;
			}
			slideRight();
		});
		dot.addEventListener('click', function(e){
			let tar = e.target;
			for(let j in dot.children){
				if(dot.children[j] == tar){

					current = Number(j);
					showSlide();
				}
			}
		});
		document.addEventListener('keydown', function(ev){
			if(ev.keyCode == 37){
				if(current === 0){
				current = slideSec.length;
			}
			slideLeft();
			}
		 });
		 document.addEventListener('keydown', function(ev){
			if(ev.keyCode == 39){
				if(current === slideSec.length-1){
				current = -1;
			}
			slideRight();
			}
		 })

		showSlide();*/