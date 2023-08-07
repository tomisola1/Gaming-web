// const nav = document.getElementById('nav');
// const links = nav.getElementsById('nav-link');
const navigation = document.getElementById('navigation');

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navigation.classList.add('nav-header')
  } else {
    navigation.classList.remove('nav-header')
  }
}

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function() {
//     const current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     });
// }