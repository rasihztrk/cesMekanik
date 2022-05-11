$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    padding: 0,
    lazyLoad: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
  });

  $(".owl-two").owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    padding: 30,
    lazyLoad: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      479: {
        items: 2,
      },
      768: {
        items: 2,
      },
      979: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".owl-three").owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    padding: 30,
    lazyLoad: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      979: {
        items: 5,
      },
    },
  });

  $(".owl-four").owlCarousel({
    items: 5,
    loop: true,
    margin: 20,
    padding: 5,
    lazyLoad: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      479: {
        items: 1,
      },
      768: {
        items: 2,
      },
      979: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-five").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    padding: 0,
    lazyLoad: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
  });

  var btn = true;

  $(".btnSpecialNav").click(function () {
    if (btn) {
      btn = false;
      $("header").css({
        height: "100vh",
        overflow: "scroll",
      });
      $("body").css({
        overflow: "hidden",
      });
    } else if (!btn) {
      btn = true;
      $("header").css({
        height: "auto",
        overflow: "scroll",
      });
      $("body").css({
        overflow: "scroll",
      });
    }
  });
  var dropdownspecial = true;

  $(".dropdownspecial").click(function () {
    if (dropdownspecial) {
      dropdownspecial = false;
      $(".navlogoSocial").css({
        position: "unset",
      });
    } else if (!dropdownspecial) {
      dropdownspecial = true;
      $(".navlogoSocial").css({
        position: "absolute",
      });
    }
  });

  $("#home-tab , #sUp").click(function () {
    $("#fPassword").removeClass("active");
  });

  $("#home-tab").click(function () {
    $("#forgotPassword").removeClass("active");
    $("#forgotPassword").removeClass("show");
    $("#home").addClass("active");
    $("#home").addClass("show");
  });

  $(".cardspecial").on("mouseenter", function () {
    $(".cardTExt", this).css({
      "border-bottom": "1px solid #089ad8",
      "border-top": "1px solid #089ad8",
    });
  });

  $(".cardspecial").mouseleave(function () {
    $(".cardTExt", this).css({
      "border-bottom": "1px solid #e5e5e5",
      "border-top": "1px solid #e5e5e5",
    });
  });
  screen.width
  if (screen.width >= 992) {
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      // Do something
      console.log(scroll);
      if (scroll >= "300") {
        $(".navFirst").addClass("d-none");
      } else if (scroll <= "300") {
        $(".navFirst").removeClass("d-none");
      }
    });
  }
});
