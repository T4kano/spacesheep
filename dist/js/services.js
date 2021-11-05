window.addEventListener("scroll", reveal);
if (window.innerWidth >= 1200) {
  var social = document.querySelectorAll(".social .midia > img");
  for (var x = 0; 0 < social.length; x++) {
    social[x].classList.add("reveal");
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".midia > img");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop <= windowHeight - revealPoint) {
      reveals[i].classList.add("reveal");
    } else {
      reveals[i].classList.remove("reveal");
    }
  }
}