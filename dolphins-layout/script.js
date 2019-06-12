var toNextSlideTwo = document.getElementById('nextSlideTwo');
toNextSlideTwo.addEventListener('click', nextSlideTwo);

function nextSlideTwo() {
  console.log('yup');

  document.getElementById('palm').style.display = 'grid';
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('earth').style.display = 'none';

}

var toNextSlideThree = document.getElementById('nextSlideThree');
toNextSlideThree.addEventListener('click', nextSlideThree);

function nextSlideThree() {
  console.log('yes');

  document.getElementById('earth').style.display = 'grid';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('dolphin').style.display = 'none';

}

var toNextSlideOne = document.getElementById('nextSlideOne');
toNextSlideOne.addEventListener('click', nextSlideOne);

function nextSlideOne() {
  console.log('si');

  document.getElementById('earth').style.display = 'none';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('dolphin').style.display = 'grid';

}