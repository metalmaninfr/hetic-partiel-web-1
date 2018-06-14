//smooth scrolling to top
var scrolltotop = document.querySelector('.scrolltotop');

scrolltotop.addEventListener('click', function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

//burgermenu

var burgermenu = document.querySelector('.burgermenu');
var menu = document.querySelector('#topbar');
counter = 0

burgermenu.addEventListener('click', function(){
  counter++
  console.log(counter);
  if (counter === 1) {
    menu.style.display = 'flex';
  }
  if (counter === 2) {
    menu.style.display = 'none';
    counter = 0
  }
});

//scollup to show Header (grave chiant pour l'animation xD)
var header = document.querySelector('.row1');
var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      header.style.position = "";
   } else {
     header.style.position = "fixed";
     header.style.top = "0";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
