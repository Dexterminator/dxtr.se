function startImageFades() {
  var meImages = document.getElementById('me-images').children;
  var i = 0;
  setInterval(function () {
    meImages[i].classList.toggle('active-image');
    i = (i + 1) % meImages.length;
    meImages[i].classList.toggle('active-image');
  }, 4000);
}

document.addEventListener("DOMContentLoaded", function (event) {
  startImageFades()
});