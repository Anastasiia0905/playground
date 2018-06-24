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