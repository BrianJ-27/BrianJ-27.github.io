// **************************************
// JAVASCRIPT SCRIPTS
// **************************************

const menu = document.querySelector("header");
const navBar = document.querySelector(".nav__bar");

/*--Toggle mobile navigation once user clicks on nav menu--*/
menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
});



/*--Add Smooth Scroll to Page--*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/*--Add Animations on Scroll--*/
window.sr = ScrollReveal({
    distance : '50px',
    easing   : 'ease-in-out',
    mobile   : true,
    delay    : 450,
    reset    : false,
    viewFactor: 0.1,
  });
  


  sr.reveal('.skills', {
    delay: 650,
    origin: top,
  });
 

  sr.reveal('.content__banner',{
    origin : 'bottom', 
    delay: 1200, 
  });

  
