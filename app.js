const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#7d1079';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let slideIndex = 0;

function showSlides() {
	const slides = document.querySelectorAll('.plants-item');
	const dots = document.querySelectorAll('.dot');
	for (let i = 0; i < slides.length; i++) {
	  slides[i].style.display = 'none';
	}
	for (let i = 0; i < dots.length; i++) {
	  dots[i].classList.remove('active');
	}
	slides[slideIndex].style.display = 'flex';
	dots[slideIndex].classList.add('active');
  }
  
  function prevSlide() {
	const slides = document.querySelectorAll('.plants-item');
	if (slideIndex === 0) {
	  slideIndex = slides.length - 1;
	} else {
	  slideIndex--;
	}
	showSlides();
  }
  
  function nextSlide() {
	const slides = document.querySelectorAll('.plants-item');
	if (slideIndex === slides.length - 1) {
	  slideIndex = 0;
	} else {
	  slideIndex++;
	}
	showSlides();
  }
  
  const slides = document.querySelectorAll('.plants-item');
  const dotsContainer = document.querySelector('.dot-container');
  for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	dot.setAttribute('data-slide-index', i);
	dot.addEventListener('click', function() {
	  slideIndex = parseInt(this.getAttribute('data-slide-index'));
	  showSlides();
	});
	dotsContainer.appendChild(dot);
  }
  
  showSlides();
  