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

// window.onload = setActive

// const elem = document.querySelector('.trending-box');
// const filtersElem = document.querySelector('.trending-filter');
// if (elem) {
//     const rdn_events_list = new Isotope(elem, {
//         itemSelector: '.trending-items',
//         layoutMode: 'masonry'
//     });
//     if (filtersElem) {
//         filtersElem.addEventListener('click', function(event) {
//             if (!matchesSelector(event.target, 'a')) {
//                 return;
//             }
//             const filterValue = event.target.getAttribute('data-filter');
//             rdn_events_list.arrange({
//                 filter: filterValue
//             });
//             filtersElem.querySelector('.is_active').classList.remove('is_active');
//             event.target.classList.add('is_active');
//             event.preventDefault();
//         });
//     }
// }