$(function () {
  var $body = $('html, body');
  var $projectsHeader = $('#projects-header');
  var $cvHeader = $('#cv-header');
  var $contactHeader = $('#contact-header');
  var scrollDuration = 700;
  setScrollOnNavClicks($body, scrollDuration, $projectsHeader, $cvHeader, $contactHeader);
  setNavActiveStatusOnScroll($contactHeader, $cvHeader, $projectsHeader);
  startImageFades();
});

function startImageFades() {
  var meImages = _.map($('#me-images').children(), function(child) {return $(child)})
  var i = 0;
  setInterval(function() {
    meImages[i].toggleClass('disabled-image')
    i = (i + 1) % meImages.length;
    meImages[i].toggleClass('disabled-image')
  }, 4000);
}

function setScrollOnNavClicks($body, scrollDuration, $projectsHeader, $cvHeader, $contactHeader) {
  $('#me-nav').click(function () {
    $body.animate({scrollTop: 0}, scrollDuration);
  });
  setSectionScroll('#projects-nav', $projectsHeader, $body, scrollDuration);
  setSectionScroll('#cv-nav', $cvHeader, $body, scrollDuration);
  setSectionScroll('#contact-nav', $contactHeader, $body, scrollDuration);
}

function setSectionScroll(sectionNavId, sectionHeader, $body, scrollDuration) {
  $(sectionNavId).click(function () {
    var topOffset = sectionHeader.offset().top - 20;
    $body.animate({
      scrollTop: topOffset
    }, scrollDuration);
  });
}

function setNavActiveStatusOnScroll($contactHeader, $cvHeader, $projectsHeader) {
  var $window = $(window);
  var currentNav = '#me-nav';
  $window.scroll(function () {
    var scrolled = $window.scrollTop() + 40;
    var newNav;
    if (scrolled > $contactHeader.offset().top) {
      newNav = '#contact-nav';
    } else if (scrolled > $projectsHeader.offset().top) {
      newNav = '#projects-nav';
    } else if (scrolled > $cvHeader.offset().top) {
      newNav = '#cv-nav';
    } else {
      newNav = '#me-nav';
    }

    if (newNav !== currentNav) {
      $(currentNav).removeClass('active');
      currentNav = newNav;
      $(currentNav).addClass('active');
    }
  });
}
