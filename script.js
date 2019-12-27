let frames = document.getElementsByClassName('frames');
let framesText = document.getElementsByClassName('framesText');

Array.from(frames).forEach(item => {
  item.style.color = '#78CDD7';
});

frames[0].addEventListener('click', () => {
  frames[1].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.display = 'none';
  frames[0].style.width = '100%';
  frames[0].style.height = '100%';
  framesText[0].classList.toggle('framesTextUpLeft');
});

frames[1].addEventListener('click', () => {
  frames[0].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.display = 'none';
  frames[1].style.width = '100%';
  frames[1].style.height = '100%';
});

