$(function () {
  var $body = $('html, body');
  var $projectsHeader = $('#projects-header');
  var $cvHeader = $('#cv-header');
  var $contactHeader = $('#contact-header');
  var scrollDuration = 700;

  $('#me-nav').click(function () {
    $body.animate({
      scrollTop: 0
    }, scrollDuration);
  });

  $('#projects-nav').click(function () {
    var topOffset = $projectsHeader.offset().top - $projectsHeader.height();
    $body.animate({
      scrollTop: topOffset
    }, scrollDuration);
  });

  $('#cv-nav').click(function () {
    var topOffset = $cvHeader.offset().top - $cvHeader.height();
    $body.animate({
      scrollTop: topOffset
    }, scrollDuration);
  });

  $('#contact-nav').click(function () {
    var topOffset = $contactHeader.offset().top - $contactHeader.height();
    $body.animate({
      scrollTop: topOffset
    }, scrollDuration);
  });

});
