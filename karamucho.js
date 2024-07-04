$(document).ready(function () {
  $(".scroll-content").width = "2867px";
  function updateButtons() {
    var scrollLeft = $("#scroll-content").scrollLeft();

    if (scrollLeft === 0) {
      $("#scroll-left").addClass("disable");
    } else {
      $("#scroll-left").removeClass("disable");
    }

    if (scrollLeft + $(".scroll-container").width() >= 3600) {
      $("#scroll-right").addClass("disable");
    } else {
      $("#scroll-right").removeClass("disable");
    }

    console.log(scrollLeft + $(".scroll-container"));
    console.log("full width: ", $("#scroll-content").width());
  }
  $("#scroll-left").click(function () {
    $("#scroll-content").animate(
      {
        scrollLeft: "-=320",
      },
      300,
      updateButtons
    );
  });

  $("#scroll-right").click(function () {
    $("#scroll-content").animate(
      {
        scrollLeft: "+=320",
      },
      300,
      updateButtons
    );
  });
});

$(document).ready(function () {
  const item = [
    {
      id: 1,
      img: "https://koike-ya.vn/img/1.b1008ef8.webp",
      firstName: "Snack khoai tây",
      lastName: "Strong Tokyo BBQ",
      fullName: "SNACK KARAMUCHO KHOAI TÂY STRONG LÁT DÀY VỊ THỊT NƯỚNG TOKYO",
      description:
        "Lát cắt khoai tây dày hơn, đậm đà hương vị thịt nướng Tokyo, chắc chắn sẽ khiến bạn ăn mãi không ngừng!",
      title: "Snack Karamucho Khoai tây Strong Lát dày",
      taste: "Vị thịt nướng Tokyo (26g) - (44g) - (80gr)",
      energy: "558",
      calories: "315",
      caloriesPercent: "54",
      totalFat: "35.0",
      totalFatPercent: "66",
      saturatedFat: "13.1",
      saturatedFatPercent: "66",
      natri: "383",
      natriPercent: "16%",
      totalCarbohydrate: "54.6",
      carboPercent: "18%",
      sugar: "9.1",
      protein: "6.2",
      ingredient:
        "Khoai tây 59,0 %, dầu thực vật, bột gia vị thịt nướng 6,0 % (đường, maltodextrin, chất điều vị (E621), muối, bột kem béo thực vật, bột tiêu đen, đạm thực vật thủy phân, bột gà, hương gà giống tự nhiên, hương tỏi giống tự nhiên, màu nhân tạo: Caramen nhóm IV (xử lý amoni sulfit) (E150d), hương bò giống tự nhiên, màu tự nhiên: Parika oleoresin (E160c), chất điều chỉnh độ axit (E330), chất tạo ngọt nhân tạo: Aspartam (E951)).",
    },
    {
      id: 2,
      img: "https://koike-ya.vn/img/2.b8792e5b.webp",
      firstName: "Snack khoai tây",
      lastName: "STRONG lát dày",
      fullName: "SNACK KARAMUCHO KHOAI TÂY STRONG LÁT DÀY VỊ CAY ĐẶC BIỆT",
      description:
        "Lát cắt dày hơn, giòn hơn, đậm vị hơn! KARAMUCHO STRONG mang lại cảm giác mạnh mẽ và đậm đà qua từng lát khoai",
      title: "SNACK KHOAI TÂY KARAMUCHO STRONG LÁT DÀY VỊ CAY ĐẶC BIỆT",
      taste: "Vị cay đặc biệt (26g) - (44g) - (80g)",
      energy: "554",
      calories: "315",
      caloriesPercent: "54",
      totalFat: "35.0",
      totalFatPercent: "66",
      saturatedFat: "13.1",
      saturatedFatPercent: "64",
      natri: "383",
      natriPercent: "16%",
      totalCarbohydrate: "54.6",
      carboPercent: "18%",
      sugar: "9.1",
      protein: "6.2",
      ingredient:
        "Khoai tây 59,0 %, dầu thực vật, bột gia vị thịt nướng 6,0 % (đường, maltodextrin, chất điều vị (E621), muối, bột kem béo thực vật, bột tiêu đen, đạm thực vật thủy phân, bột gà, hương gà giống tự nhiên, hương tỏi giống tự nhiên, màu nhân tạo: Caramen nhóm IV (xử lý amoni sulfit) (E150d), hương bò giống tự nhiên, màu tự nhiên: Parika oleoresin (E160c), chất điều chỉnh độ axit (E330), chất tạo ngọt nhân tạo: Aspartam (E951)).",
    },
  ];

  $(".item").click(function () {
    $(".item").removeClass("active");
    $(this).addClass("active");

    // $("#border-product").css({left: "calc(-11px + 20%)"})
    switch (this.id) {
      case "item1":
        $("#border-product").css({ left: "calc(-11px + 0%)" });
        $(".product-left_img img").attr("src", item[0].img);
        $("#item-title").text(item[0].fullName);
        $(".item .text").text(item[0].description);
        $(".table-head .table-title_large:first-child").text(item[0].title);
        $(".table-head .table-title_large.pb-4").text(item[0].taste);
        $(".item-energy").text(`Năng lượng ${item[0].energy} (kcal)`);
        $(".item-calories").text(
          `Calories from Fat ${item[0].calories} (kcal)`
        );
        $(".item-total-fat").text(item[0].totalFat);
        $(".item-fat-percent").text(`${item[0].totalFatPercent}%`);
        $(".item-saturated-fat").text(
          `Chất béo bão hòa  ${item[0].saturatedFat}`
        );
        $(".item-saturated-fat-percent").text(
          `${item[0].saturatedFatPercent}%`
        );
        $(".natri").text(item[0].natri);
        $(".item-natri-percent").text(item[0].natriPercent);
        $(".item-total-carbohydrate").text(item[0].totalCarbohydrate);
        $(".total-carbo-percent").text(item[0].carboPercent);
        $(".sugar").text(`Đường ${item[0].sugar}g`);
        $(".protein").text(item[0].protein);
        $(".item-title-bot").text(item[0].title);
        $(".ingredient").text(item[0].ingredient);
        break;
      case "item2":
        $("#border-product").css({ left: "calc(19%)" });
        $(".product-left_img img").attr("src", item[1].img);
        $("#item-title").text(item[1].fullName);
        $(".item .text").text(item[1].description);
        $(".table-head .table-title_large:first-child").text(item[1].title);
        $(".table-head .table-title_large.pb-4").text(item[1].taste);
        $(".item-energy").text(`Năng lượng ${item[1].energy} (kcal)`);
        $(".item-calories").text(
          `Calories from Fat ${item[1].calories} (kcal)`
        );
        $(".item-total-fat").text(item[1].totalFat);
        $(".item-fat-percent").text(`${item[1].totalFatPercent}%`);
        $(".item-saturated-fat").text(
          `Chất béo bão hòa  ${item[1].saturatedFat}`
        );
        $(".item-saturated-fat-percent").text(
          `${item[1].saturatedFatPercent}%`
        );
        $(".natri").text(item[1].natri);
        $(".item-natri-percent").text(item[1].natriPercent);
        $(".item-total-carbohydrate").text(item[1].totalCarbohydrate);
        $(".total-carbo-percent").text(item[1].carboPercent);
        $(".sugar").text(`Đường ${item[1].sugar}g`);
        $(".protein").text(item[1].protein);
        $(".item-title-bot").text(item[1].title);
        $(".ingredient").text(item[1].ingredient);
        break;
      case "item3":
        $("#border-product").css({ left: "calc(40.2%)" });
        break;
      case "item4":
        $("#border-product").css({ left: "calc(61.3%)" });
        break;
      case "item5":
        $("#border-product").css({ left: "calc(82.5%)", width: "144px" });
        break;
    }
  });
  $("#nav-btn").click(function () {
    $(".nav-btn").toggleClass("open");
    $(".btn-inner span:first-child").css({ width: "100%" });
    $(".navbar-content").toggleClass("open");
  });

  $(".back-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  let currentIndex = 0;
  const items = $(".item");
  const totalItems = items.length;
  function updateActiveItem(index) {
    items.removeClass("active");
    items.eq(index).addClass("active");
  }

  $("#back").click(function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateActiveItem(currentIndex);
  });

  $("#next").click(function () {
    currentIndex = (currentIndex + 1) % totalItems;
    updateActiveItem(currentIndex);
  });
});
