
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  var acc = document.getElementsByClassName
    ("accordion")
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");

      var answer = this.nextElementSibling;

      if (answer.style.display === "block") {
        answer.style.display = "none";
      }
      else {
        answer.style.display = "block";
      }
    });

  }


  // Set the date to countdown to (replace with your desired date)
const countdownDate = new Date("2023-11-04T00:00:00Z").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  if (timeRemaining <= 0) {
    // Countdown is over
    clearInterval(countdownInterval);
    document.querySelectorAll(".countdown-time").forEach(function (element) {
      element.textContent = "00";
    });
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown display
  document.querySelector(".days.countdown-time").textContent = days.toString().padStart(2, "0");
  document.querySelector(".hours.countdown-time").textContent = hours.toString().padStart(2, "0");
  document.querySelector(".minutes.countdown-time").textContent = minutes.toString().padStart(2, "0");
  document.querySelector(".seconds.countdown-time").textContent = seconds.toString().padStart(2, "0");
}, 1000);
