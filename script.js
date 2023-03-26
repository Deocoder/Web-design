// Script for navigation bar
var menuitems = document.getElementById("menuitems")

menuitems.style.maxHeight = "0px"

function menutoggle() {
  if (menuitems.style.maxHeight == "0px") {
    menuitems.style.maxHeight = "200px"
  } else {
    menuitems.style.maxHeight = "0px"
  }
}
// script for why websites fail
var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}

// 
const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkboxes)

checkboxes()

function checkboxes() {
  const trigger = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxtop = box.getBoundingClientRect().top

    if (boxtop < trigger) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}
