$(document).ready(function () {
  $(".nav-scroll_item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );

      $(".nav-scroll_item a").removeClass("active");

      $(this).addClass("active");
    }
  });
  $("#navbar-btn").click(function () {
    $(".navbar-btn").toggleClass("open");
    $(".navbar-content").toggleClass("open");
  });
});

$(window).on("scroll", function () {
  var scrollPosition = $(this).scrollTop();

  $(".nav-scroll_item").each(function () {
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();

    if (scrollPosition >= top && scrollPosition < bottom) {
      var id = $(this).attr("id");
      $(".nav-scroll_item a").removeClass("active");
      $('.nav-scroll_item a[href="#' + id + '"]').addClass("active");
    }
  });
});
