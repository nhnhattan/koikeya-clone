$(document).ready(function () {
  $("#snack-kara").hover(
    function () {
      $("#karamucho_snack").attr(
        "src",
        "./assets/main-img/img-package-hover-vi.5721f984.webp"
      );
    },
    function () {
      $("#karamucho_snack").attr(
        "src",
        "./assets/main-img/img-package-vi.5ec01e47.webp"
      );
    }
  );
  $("#snack-kara").hover(
    function () {
      $(".snack_left-fly").css("opacity", "1");
      $(".snack_left-fly").stop().animate({ bottom: "63%" }, 300);
    },
    function () {
      $(".snack_left-fly").css("opacity", "0");
      $(".snack_left-fly").stop().animate({ bottom: "60%" }, 300);
    }
  );
  $(".koimucho-bg").hover(
    function () {
      $(".popcorn-fade").stop().animate({ top: "-13%" }, 500);
      $(".popcorn-fade").css("transform", "scale(1.005)");
    },
    function () {
      $(".popcorn-fade").stop().animate({ top: "4%" }, 500);
      $(".popcorn-fade").css("transform", "scale(1)");
    }
  );
  $(".karamucho-bg").hover(
    function () {
      $(".chili-left_fade").animate({ top: "-13%" }, 500);
      $(".chili-left_fade").css("transform", "scale(1.005)");
    },
    function () {
      $(".chili-left_fade").animate({ top: "6%" }, 100);
      $(".chili-left_fade").css("transform", "scale(1)");
    }
  );
  $("#snack-koi").hover(
    function () {
      $("#koimucho_snack").attr(
        "src",
        "./assets/main-img/img-package-hover-vi.b16c5e6d.webp"
      );
    },
    function () {
      $("#koimucho_snack").attr(
        "src",
        "./assets/main-img/img-package-vi.99323c96.webp"
      );
    }
  );

  $("#snack-koi").hover(
    function () {
      $(".snack_right-fly").css("opacity", "1");
      $(".snack_right-fly").stop().animate({ bottom: "63%" }, 300);
    },
    function () {
      $(".snack_right-fly").css("opacity", "0");
      $(".snack_right-fly").stop().animate({ bottom: "62%" }, 300);
    }
  )();
});
