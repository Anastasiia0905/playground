// Burger menu
let humburger = {
    navToggle: document.querySelector('.nav-toggle'),
    navMenu: document.querySelector('.nav-menu'),
    onToggle: function(e){
        e.preventDefault();
        this.navToggle.classList.toggle('expanted');
        this.navMenu.classList.toggle('expanted');
    }
};
humburger.navToggle.addEventListener('click', function(e){
    humburger.onToggle(e);
});
// Accordion on burger menu
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
  dropMain[i].addEventListener('mouseenter', function(){
        accord.call(dropMain[i]);
    });
    dropMain[i].addEventListener('mouseleave', function(){
        accord.call(dropMain[i]);
    });
}
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

		showSlide();