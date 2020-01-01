let frames = document.querySelectorAll('.frames');
let framesText = document.querySelectorAll('.framesText');
let mePic = document.getElementById('mePic');
let back1 = document.getElementById('back1');

Array.from(frames).forEach(item => {
  item.style.color = '#78CDD7';
});

/*
const click1 = () => {
  frames[0].classList.add('framesClickedTopLeft');
  frames[1].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.display = 'none';

  framesText[0].classList.add('framesTextUpLeftMove');
  mePic.style.display = 'none';
  back1.style.display = 'block';
  console.log('ding');
};

framesText[0].addEventListener('click', click1);
*/

framesText[0].addEventListener('click', () => {
  frames[0].classList.add('framesClickedTopLeft');
  frames[1].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.display = 'none';
  framesText[0].classList.add('framesTextUpLeftMove');
  mePic.style.display = 'none';
  back1.style.display = 'block';
});

framesText[1].addEventListener('click', () => {
  frames[1].classList.add('framesClickedTopRight');
  frames[0].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.display = 'none';

  framesText[1].classList.add('framesTextUpRightMove');
  mePic.style.display = 'none';
});

frames[2].addEventListener('click', () => {
  frames[2].classList.add('framesClickedDownLeft');
  frames[0].style.display = 'none';
  frames[1].style.display = 'none';
  frames[3].style.display = 'none';
  frames[2].style.width = '100%';
  frames[2].style.height = '100%';
  framesText[2].classList.add('framesTextDownLeftMove');
  mePic.style.display = 'none';
});

frames[3].addEventListener('click', () => {
  frames[3].classList.add('framesClickedDownRight');
  frames[0].style.display = 'none';
  frames[1].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.width = '100%';
  frames[3].style.height = '100%';
  framesText[3].classList.add('framesTextDownRightMove');
  mePic.style.display = 'none';
});

back1.addEventListener('click', () => {
  frames[0].classList.remove('framesClickedTopLeft');
  framesText[0].classList.remove('framesTextUpLeftMove');
  frames[1].style.display = 'block';
  frames[2].style.display = 'block';
  frames[3].style.display = 'block';
  mePic.style.display = 'block';
  back1.style.display = 'none';
});
