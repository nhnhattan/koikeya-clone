$(document).ready(function () {
  $("#scroll-left").click(function () {
    $("#scroll-content").animate(
      {
        scrollLeft: "-=320",
      },
      300
    );
  });

  $("#scroll-right").click(function () {
    $("#scroll-content").animate(
      {
        scrollLeft: "+=320",
      },
      300
    );
  });
});

$(document).ready(function () {
  $(".item").click(function () {
    $(".item").removeClass("active");
    $(this).addClass("active");
  });
});
