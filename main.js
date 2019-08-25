var slides = document.querySelectorAll('.slide');
var controls = document.querySelector('.controls');

var currentSlide = 0;
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowLRight';

function previousSlide() {
  goToSlide(currentSlide - 1);
};

function nextSlide() {
  goToSlide(currentSlide + 1);
};

function goToSlide(n) {
  slides[currentSlide].classList.toggle('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.toggle('active');
  if (n === 0 || n === 5) {
    document.getElementById("next-num").innerHTML = 2;
    document.getElementById("slide-num").innerHTML = 1;
    document.getElementById("prev-num").innerHTML = 5;
  } else {
    if (n === 4) {
      document.getElementById("slide-num").innerHTML = 5;
      document.getElementById("next-num").innerHTML = 1;
      document.getElementById("prev-num").innerHTML = 4;
    } else {
      if (n === -1) {
        document.getElementById("next-num").innerHTML = 1;
        document.getElementById("slide-num").innerHTML = 5;
        document.getElementById("prev-num").innerHTML = 4;  
          } else {
          document.getElementById("next-num").innerHTML = n + 2;
          document.getElementById("slide-num").innerHTML = n + 1;
          document.getElementById("prev-num").innerHTML = n;
        };
      };
    };
};

function clickPrev() {
  previousSlide();
};

function clickNext() {
  nextSlide();
};

var previous = document.querySelector('#previous');
var next = document.querySelector('#next');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp')
  clickPrev();
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowDown')
  clickNext();
});







