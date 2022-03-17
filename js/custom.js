/* 1. Proloder */
$(window).on('load', function () {
  $('#preloader-active').delay(500).fadeOut('slow');
  $('body').delay(500).css({
    'overflow': 'visible'
  });
});

        new WOW().init();
    
(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  $('.popup_youtube').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(document).ready(function() {
    $('select').niceSelect();
  });

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });


  var review = $('.client_review_part');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      smartSpeed: 2000,
    });
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.single_page_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.single_page_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.home_menu').addClass('home_menu_fixed animated fadeInDown');
    } else {
      $('.home_menu').removeClass('home_menu_fixed animated fadeInDown');
    }
  });
  if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
//memnu js
jQuery(document).ready(function ($) {
  $(".menu-trigger").on('click', function () {
    $(".off-canven-menu").addClass("active")
    $(".offcanvas-overlay").addClass("active")
  });
  $(".close-icon i, .offcanvas-overlay").on('click', function () {
    $(".off-canven-menu").removeClass("active")
    $(".offcanvas-overlay").removeClass("active")
  });
});
var client = $('.client_logo');
if (client.length) {
  client.owlCarousel({
    items: 6,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    smartSpeed: 2000,
    margin: 20,
    responsive: {
      0: {
        items: 3
      },
      577: {
        items:3,
      },
      991: {
        items:5,
      },
      1200: {
        items: 6,
      }
    },
  });
}
var feature = $('.feature-carousel');
if (feature.length) {
  feature.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    smartSpeed: 2000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      577: {
        items:1,
      },
      991: {
        items:2,
      },
      1200: {
        items: 3,
      }
    },
  });
}


document.addEventListener("DOMContentLoaded", function() {
  
  var progressBar = document.querySelectorAll(".progress-bar");
  var time = 15000;
  

  progressBar.forEach(function(i) {
    let label = i.children[0];
    let line = i.children[1];
    let count = 0;
    let dataCount = label.getAttribute("data-count");
    let lineCount = line.children[0];
 
    let runTime = time/dataCount;
    
    let animationLineCount = setInterval(function(){
      if(count < dataCount){
        count++;
        label.innerHTML = count + '%';
        lineCount.style.width = count + '%';
      }
    },runTime);
  });
});
//16. Overlay
$(".snake").snakeify({
  speed: 200
});

$(".img-item").slice(0, 4).show()
        $(".show-gallary").on("click", function(){
            $(".img-item:hidden").slice(0, 3).slideDown()
            if ($(".img-item:hidden").length == 0) {
                $(".show-gallary").fadeOut('slow')
            }
        });
        $(function(){
          $("img.lazy").lazyload();
        })

}(jQuery));

// changs tabs
let quesItem = document.querySelectorAll('.question .item');
let answerList = document.querySelectorAll('.answer');

quesItem.forEach((q) => {
    q.addEventListener('click', function(e){
        quesItem.forEach((q) => {
            q.classList.remove("active")
        });
        e.target.classList.add("active");
        answerList.forEach((aL) => {
            aL.classList.remove('show')
        });
        document.querySelector(e.target.dataset.ques).classList.add('show')
    })
})

let itemAnswer = document.querySelectorAll('.answer .item');
itemAnswer.forEach((item) => {
    item.addEventListener('click', function (e){
        e.target.classList.toggle('style');
        e.target.nextElementSibling.classList.toggle('show');
    })
});
        