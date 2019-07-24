
// variables
  // for the toggle buttons
  var toggleGrid = document.getElementById('toggleGrid');
  var toggleList = document.getElementById('toggleList');
  
    // the container of the articles
  var container = document.getElementById('articlesContainer');
  
    // for the articles
  var articles = document.getElementsByClassName('articles');

    // text in articles
  var text = document.getElementsByClassName('text-flex');
  var titles = document.getElementsByClassName('animate-h2');
  
    // for the images
  var img = document.getElementsByClassName('article-img');
  var gridImg = document.getElementsByClassName('grid-img');
  var arrow = document.getElementsByClassName('arrow');
  
  // menu
  var menuBtn = document.getElementById('hamburgerMenu');
  
  var closeMenu = document.getElementById('cross');
  
  var listItems = document.getElementsByClassName('list-items');
  
  // event listeners
  toggleGrid.addEventListener('click', toggleGridView);
  toggleList.addEventListener('click', toggleListView);
  
  closeMenu.addEventListener('click', closeTheMenu);
  
  menuBtn.addEventListener('click', openMenu);
  
  
  // functions
  
  function toggleListView() {
    container.classList.remove('grid-container');
    container.classList.add('list-container');

    toggleList.style.backgroundColor = 'black';
    toggleList.style.color = 'white';
    
    toggleGrid.style.backgroundColor = '#EDEDED';
    document.getElementById('gridIcon').style.stroke = 'black';
  
    articles[0].classList.add('list-articles');
    articles[1].classList.add('list-articles');
    articles[2].classList.add('list-articles');
    articles[3].classList.add('list-articles');
    articles[4].classList.add('list-articles');
    articles[5].classList.add('list-articles');
  
    arrow[0].style.opacity = '1';
    arrow[1].style.opacity = '1';
    arrow[2].style.opacity = '1';
    arrow[3].style.opacity = '1';
    arrow[4].style.opacity = '1';
    arrow[5].style.opacity = '1';
    
    text[0].style.marginLeft = '-30%';
    text[1].style.marginLeft = '-30%';
    text[2].style.marginLeft = '-30%';
    text[3].style.marginLeft = '-30%';
    text[4].style.marginLeft = '-30%';
    text[5].style.marginLeft = '-30%';
  }
  
  function toggleGridView() {
    container.classList.remove('list-container');
    container.classList.add('grid-container');

    toggleList.style.backgroundColor = '#EDEDED';
    toggleList.style.color = 'black';
    
    toggleGrid.style.backgroundColor = 'black';
    document.getElementById('gridIcon').style.stroke = 'white';
  
    articles[0].classList.remove('list-articles');
    articles[1].classList.remove('list-articles');
    articles[2].classList.remove('list-articles');
    articles[3].classList.remove('list-articles');
    articles[4].classList.remove('list-articles');
    articles[5].classList.remove('list-articles');
  
  
    arrow[0].style.opacity = '0';
    arrow[1].style.opacity = '0';
    arrow[2].style.opacity = '0';
    arrow[3].style.opacity = '0';
    arrow[4].style.opacity = '0';
    arrow[5].style.opacity = '0';

    text[0].style.marginLeft = '0%';
    text[1].style.marginLeft = '0%';
    text[2].style.marginLeft = '0%';
    text[3].style.marginLeft = '0%';
    text[4].style.marginLeft = '0%';
    text[5].style.marginLeft = '0%';
  }
  
  function openMenu() {
    document.getElementById('hiddenMenu').style.transform = 'translateY(0)';
    document.getElementById('hiddenMenu').style.opacity = '1';
  

    TweenMax.to(listItems[0], .8, {x: 0, ease: Power1.easeOut});
    TweenMax.to(listItems[1], .8, {x: 0, delay: .1, ease: Power1.easeOut});
    TweenMax.to(listItems[2], .8, {x: 0, delay: .2, ease: Power1.easeOut});
    TweenMax.to(listItems[3], .8, {x: 0, delay: .3, ease: Power1.easeOut});
    TweenMax.to(listItems[4], .8, {x: 0, delay: .4, ease: Power1.easeOut});

  }
  
  function closeTheMenu() {
    // document.getElementById('hiddenMenu').style.transform = 'translateY(-100%)';
    // document.getElementById('hiddenMenu').style.opacity = '0';
  
    // listItems[0].style.transform = 'translateX(100%)';
    // listItems[1].style.transform = 'translateX(100%)';
    // listItems[2].style.transform = 'translateX(100%)';
    // listItems[3].style.transform = 'translateX(100%)';
    // listItems[4].style.transform = 'translateX(100%)';

    TweenMax.to('#hiddenMenu', .6, {y: -1000, delay: .6, ease: Power1.ease});
    TweenMax.to('#hiddenMenu', .6, {opacity: 0, delay: .6, ease: Power1.ease});

    TweenMax.to(listItems[0], .6, {x: 1000, ease: Power1.easeOut});
    TweenMax.to(listItems[1], .6, {x: 1000, delay: .1, ease: Power1.easeOut});
    TweenMax.to(listItems[2], .6, {x: 1000, delay: .2, ease: Power1.easeOut});
    TweenMax.to(listItems[3], .6, {x: 1000, delay: .3, ease: Power1.easeOut});
    TweenMax.to(listItems[4], .6, {x: 1000, delay: .4, ease: Power1.easeOut});
  }
  
  