'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}




const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

function showImage(imageUrl, backgroundImageUrl) {
  var bannerImage = document.getElementById('banner-img');
  var heroSection = document.getElementById('home');
  bannerImage.src = imageUrl; // I-set ang URL ng larawan sa hero banner
  heroSection.style.backgroundImage = "url('" + backgroundImageUrl + "')"; // I-set ang background image ng hero section
  document.getElementById('hero-banner').style.display = 'block'; // Ipakita ang hero banner
}

 // Simulan ang bilangan mula 1 hanggang 10
 let count = 1;

 // Itakda ang interval para sa pag-update ng countdown
 let interval = setInterval(function() {
   // Baguhin ang teksto sa loob ng span na may bilang
   document.querySelector('.countdown-text .span').innerText = count;
   count++; // Taasan ang bilang para sa susunod na pag-update
 
   // Kung umabot na sa 11, itigil ang interval
   if (count > 6) {
     clearInterval(interval);
   }
 }, 500); // Ang oras ng bawat pag-update (sa milisecond), ginawang 500 para mas mabilis
 


  window.onload = function() {
    // Kunin ang hero-banner element
    var heroBanner = document.getElementById('hero-banner');
    // Kunin ang banner-img element
    var bannerImage = document.getElementById('banner-img');

    // I-set ang URL ng unang larawan
    var firstImageUrl = './assets/img/(1).jpg';
    bannerImage.src = firstImageUrl; // I-set ang URL ng larawan sa hero banner
    heroBanner.style.backgroundImage = "url('" + firstImageUrl + "')"; // I-set ang background image ng hero section
  };


  window.onload = function() {
    var subtitleElement = document.querySelector('.hero-subtitle');
    var words = [ 'Special', 'Beloved', 'Cherished', 'Treasured', 'Adored']; // Mga posibleng salita

    var currentIndex = 0; // Simulan sa unang index
    setInterval(function() {
      // Baguhin ang teksto ng subtitle element sa kasalukuyang index sa listahan ng mga salita
      subtitleElement.textContent = 'My ' + words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length; // Pumunta sa susunod na index
    }, 1500); // Palitan ang teksto kada 1.5 segundo
  };



  // Kumuha ng reference sa element gamit ang id
let heroBanner = document.getElementById('hero-banner');

// Itago ang element gamit ang inline style
heroBanner.style.display = 'none';


document.addEventListener("DOMContentLoaded", function() {
  var video = document.querySelector('.video-container video');
  video.play();
});

function toggleMute() {
  var video = document.getElementById('video1');
  var button = document.getElementById('muteUnmuteBtn');
  
  if (video.muted) {
      video.muted = false;
      button.classList.remove('unmuted');
  } else {
      video.muted = true;
      button.classList.add('unmuted');
  }
}

function toggleFullscreen(video) {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

 // Kunin ang video element
 const scene3Video = document.getElementById('scene3Video');

 // Kapag ang video ay naka-ready, ipasa ang oras na pag-skip
 scene3Video.addEventListener('loadedmetadata', function() {
   // Mag-set ng oras na pag-skip sa 8 segundo
   scene3Video.currentTime = 4;
 });

 function showBigImage(src, textInsideBackground, textInsideBackgroundBottom) {
  var bigImage = document.getElementById("bigImage");
  bigImage.src = src;
  bigImage.classList.remove("show"); // Alisin ang show class mula sa kasalukuyang larawan
  setTimeout(function() {
      bigImage.classList.add("show"); // Idagdag ang show class pagkatapos ng isang maliit na delay
  }, 50); // I-adjust ang delay kung kinakailangan
  var smallImages = document.querySelectorAll(".small-images img");
  
  // Alisin ang active class mula sa lahat ng mga larawan sa small-images
  smallImages.forEach(function(img) {
      img.classList.remove("active");
  });
  
  // Idagdag ang active class sa larawang pinindot
  event.target.classList.add("active");
  
  // Ilagay ang mga teksto sa kanilang tamang lugar
  document.querySelector('.text-inside-background p').innerText = textInsideBackground;
  document.querySelector('.text-inside-background-bottom p').innerText = textInsideBackgroundBottom;
}

$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });

  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});