$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical" 
    });
  
    // Toggle menu Icon

    $(document).ready(function(){  
        $(".navbar-toggler").click(function(){  
            $("nav").toggleClass("bg-dark");  
        });  
    }); 
    $(document).ready(function(){  
        $(".navbar-toggler").click(function(){  
            $(".scroll-to-about").toggleClass("d-none");  
        });  
    });
    $(document).ready(function(){  
        $(".navbar-toggler").click(function(){  
            $("header").toggleClass("header-height");  
        });  
    });
    //Get the button:
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction();};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    document.querySelector('#myBtn').addEventListener("click",topFunction);
    
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 