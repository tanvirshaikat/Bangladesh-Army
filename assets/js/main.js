$( document ).ready(function() {
    
      $(".spotlight-slider").owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dot:true
      });

      $(".logo-slider").owlCarousel({
        items: 5,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dot:true
      });

      $(".activities-slider").owlCarousel({
        items: 2,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        autoplay: true,
        margin: 12,
        nav: false,
        dot:true
      });

    });