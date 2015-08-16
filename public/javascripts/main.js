$(function () {
  var $body = $('html, body');
  var $projectsHeader = $('#projects-header');
  var $cvHeader = $('#cv-header');
  var $contactHeader = $('#contact-header');
  var scrollDuration = 700;
  setScrollOnNavClicks($body, scrollDuration, $projectsHeader, $cvHeader, $contactHeader);
});

function setScrollOnNavClicks($body, scrollDuration, $projectsHeader, $cvHeader, $contactHeader) {
  $('#me-nav').click(function () {
    $body.animate({
      scrollTop: 0
    }, scrollDuration);
  });
  setSectionScroll('#projects-nav', $projectsHeader, $body, scrollDuration);
  setSectionScroll('#cv-nav', $cvHeader, $body, scrollDuration);
  setSectionScroll('#contact-nav', $contactHeader, $body, scrollDuration);
}

function setSectionScroll(sectionNavId, sectionHeader, $body, scrollDuration) {
  $(sectionNavId).click(function () {
    var topOffset = sectionHeader.offset().top;
    $body.animate({
      scrollTop: topOffset
    }, scrollDuration);
  });
}

