let frames = document.querySelectorAll('.frames');
let framesText = document.querySelectorAll('.framesText');
let mePic = document.getElementById('mePic');
let backBtn = document.querySelectorAll('.backBtn');

Array.from(frames).forEach(item => {
  item.style.color = '#78CDD7';
});

const click1 = par => {
  frames[par].classList.add(`framesClicked${par}`);

  Array.from(frames).forEach(item => {
    if (Array.from(frames).indexOf(item) !== par) {
      item.style.display = 'none';
    }
  });

  framesText[par].classList.add(`framesText${par}Move`);
  mePic.style.display = 'none';
  backBtn[par].style.display = 'block';

  backBtn[par].addEventListener('click', () => {
    backToNormal(par);
  });
};

const backToNormal = par => {
  frames[par].classList.remove(`framesClicked${par}`);
  framesText[par].classList.remove(`framesText${par}Move`);

  Array.from(frames).forEach(item => {
    item.style.display = 'block';
  });

  mePic.style.display = 'block';
  backBtn[par].style.display = 'none';
  console.log('ding');
};

framesText[0].addEventListener('click', () => {
  click1(0);
});

framesText[1].addEventListener('click', () => {
  click1(1);
});

framesText[2].addEventListener('click', () => {
  click1(2);
});

framesText[3].addEventListener('click', () => {
  click1(3);
});
/*
framesText[0].addEventListener('click', () => {
  frames[0].classList.add('framesClickedTopLeft');
  frames[1].style.display = 'none';
  frames[2].style.display = 'none';
  frames[3].style.display = 'none';
  framesText[0].classList.add('framesTextUpLeftMove');
  mePic.style.display = 'none';
  backBtn.style.display = 'block';
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
*/
