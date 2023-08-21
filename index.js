const navigation = document.getElementById('navigation');

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navigation.classList.add('nav-header')
  } else {
    navigation.classList.remove('nav-header')
  }
}

function setActive() {
    link = document.getElementById('nav').getElementsByTagName('a');
    for(i=0;i<link.length;i++) {
      if(document.location.href.indexOf(link[i].href)>=0) {
        link[i].className='active';
      }
    }
}

window.onload = setActive
