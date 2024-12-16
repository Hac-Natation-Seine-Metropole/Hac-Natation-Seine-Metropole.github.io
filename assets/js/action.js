//carousel 
//$('.carousel').carousel()


//carousel 
/*
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
*/

//movement of the dividers 
var container = document.getElementById('containersq');
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var scrollArea = 1000 - windowHeight;
	var square1 = document.getElementsByClassName('square')[0];
	var square2 = document.getElementsByClassName('square')[1];

	// update position of square 1 and square 2 when scroll event fires.
	window.addEventListener('scroll', function() {
	  var scrollTop = window.pageYOffset || window.scrollTop;
	  var scrollPercent = scrollTop/scrollArea || 0;

	  square1.style.left = scrollPercent*window.innerWidth + 'px';
	  square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
});


//movement of the wave
var container = document.getElementById('wavy');
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var scrollArea = 1000 - windowHeight;
	var wave1 = document.getElementsByClassName('wave')[0];
	//var square2 = document.getElementsByClassName('square')[1];

	// update position of square 1 and square 2 when scroll event fires.
	window.addEventListener('scroll', function() {
	  var scrollTop = window.pageYOffset || window.scrollTop;
	  var scrollPercent = scrollTop/scrollArea || 0;

	  wave1.style.left = scrollPercent*window.innerWidth + 'px';
	  //square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
});



