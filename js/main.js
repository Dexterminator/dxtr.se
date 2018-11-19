function scrollToId(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

var navs = ['contact', 'projects', 'cv'];

function getCurrentActiveNav() {
  var scrolled = window.scrollY + 40;
  var currentNavName = navs.find(function (navName) {
    return scrolled > document.getElementById(navName + '-header').offsetTop;
  });

  if (currentNavName) {
    return currentNavName + '-nav'
  }

  return 'me-nav'
}

function setNavActiveStatusOnScroll() {
  var currentNav = 'me-nav';
  window.addEventListener('scroll', function (e) {
    var newNav = getCurrentActiveNav();
    if (newNav !== currentNav) {
      document.getElementById(currentNav).classList.toggle('active');
      document.getElementById(newNav).classList.toggle('active');
      currentNav = newNav;
    }
  })
}

document.addEventListener('DOMContentLoaded', function (event) {
  setNavActiveStatusOnScroll();
});