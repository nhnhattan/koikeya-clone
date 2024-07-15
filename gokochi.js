const item = [
    {
        id: 1,
        img: "./assets/gokochi/Artboard 26.png",
        firstName: "Snack khoai tây Gokochi",
        lastName: "Vị muối tự nhiên",
        fullName: "SNACK KHOAI TÂY GOKOCHI - VỊ MUỐI TỰ NHIÊN",
        description: "Vị ngọt tự nhiên từ cá và tảo biển.",
        title: "Snack khoai tây Gokochi",
        taste: "Vị muối tự nhiên (35g) - (65g) - (115gr)",
        energy: "558",
        calories: "315",
        caloriesPercent: "54%",
        totalFat: "35.0g",
        totalFatPercent: "66%",
        saturatedFat: "13.1g",
        saturatedFatPercent: "66%",
        natri: "383g",
        natriPercent: "16%",
        totalCarbohydrate: "54.6g",
        carboPercent: "18%",
        sugar: "9.1g",
        protein: "6.2g",
        ingredient:
            "Khoai tây 59,0 %, dầu thực vật, bột gia vị thịt nướng 6,0 % (đường, maltodextrin, chất điều vị (E621), muối, bột kem béo thực vật, bột tiêu đen, đạm thực vật thủy phân, bột gà, hương gà giống tự nhiên, hương tỏi giống tự nhiên, màu nhân tạo: Caramen nhóm IV (xử lý amoni sulfit) (E150d), hương bò giống tự nhiên, màu tự nhiên: Parika oleoresin (E160c), chất điều chỉnh độ axit (E330), chất tạo ngọt nhân tạo: Aspartam (E951)).",
    },
    {
        id: 2,
        img: "./assets/gokochi/Artboard 28.png",
        firstName: "Snack khoai tây",
        lastName: "STRONG lát dày",
        fullName: "SNACK KHOAI TÂY GOKOCHI - VỊ MUỐI TIÊU ĐEN",
        description: [
            "Vị ngọt tự nhiên từ rong biển và nấm vi sinh lên men",
            "Bên trên lát bánh là rong biển nhỏ được rắc đều",
        ],
        title: "Snack khoai tây Gokochi",
        taste: "Vị muối tiêu đen (35g) - (65g)",
        energy: "554",
        calories: "315",
        totalFat: "35.0g",
        totalFatPercent: "54%",
        saturatedFat: "13.7g",
        saturatedFatPercent: "69%",
        natri: "471g",
        natriPercent: "20%",
        totalCarbohydrate: "51.7g",
        carboPercent: "17%",
        sugar: "2.3g",
        protein: "8.2g",
        ingredient:
            "Khoai tây 59,0 %, dầu thực vật, bột gia vị ớt 6,0 % (đường, bột rau, muối, chất điều vị (E621, E627, E508, E631), maltodextrin, bột nước tương, gia vị và thảo mộc, chất điều chỉnh độ axit (E330, E331(iii), E300), màu nhân tạo: Caramen nhóm III (xử lý amoni) (E150c), chất tạo ngọt nhân tạo: Aspartam (E951)).",
    },
    {
        id: 3,
        img: "./assets/gokochi/Artboard 27.png",
        firstName: "Snack rong",
        lastName: "biển",
        fullName: "SNACK KHOAI TÂY GOKOCHI - VỊ RONG BIỂN",
        description: [
            "Vị ngọt tự nhiên từ nấm vi sinh lên men",
            "Bên trên lát bánh là muối tiêu đen được rắc đều",
        ],
        title: "Snack khoai tây Gokochi",
        taste: "Vị rong biển (35g) - (65g)",
        energy: "555",
        calories: "315",
        totalFat: "35.0g",
        totalFatPercent: "54%",
        saturatedFat: "18.2g",
        saturatedFatPercent: "91%",
        natri: "257g",
        natriPercent: "11%",
        totalCarbohydrate: "53.0g",
        carboPercent: "18%",
        sugar: "5.2g",
        protein: "7.0g",
        ingredient:
            "Khoai tây 58,5 %, dầu thực vật, bột gia vị rong biển cay 6,5 % (đường, maltodextrin, bột kem béo thực vật, chất điều vị (E621, E635), muối, bột rong biển 6,0 %, bột hương hành tự nhiên, đạm thực vật thủy phân, bột ớt, màu nhân tạo: Caramen nhóm IV (xử lý amoni sulfit) (E150d), chất tạo ngọt nhân tạo: Aspartam (E951)).",
    },
];

$(document).ready(function () {
    let currentIndex = 0;
    if ($(window).width() <= 768) {
        $(".scroll-content").width = "3007px";
    } else {
        $(".scroll-content").width = "2867px";
    }

    function updateButtons() {
        var scrollLeft = $("#scroll-content").scrollLeft();

        if (scrollLeft === 0) {
            $("#scroll-left").addClass("disable");
        } else {
            $("#scroll-left").removeClass("disable");
        }

        if ($(window).width() <= 768) {
            if (scrollLeft + $(".scroll-container").width() >= 4446) {
                $("#scroll-right").addClass("disable");
            } else {
                $("#scroll-right").removeClass("disable");
            }
        } else {
            if (scrollLeft + $(".scroll-container").width() >= 3600) {
                $("#scroll-right").addClass("disable");
            } else {
                $("#scroll-right").removeClass("disable");
            }
        }
    }

    $("#scroll-left").click(function () {
        if ($(window).width() <= 768) {
            $("#scroll-content").animate(
                {
                    scrollLeft: "-=400",
                },
                300,
                updateButtons
            );
        } else {
            $("#scroll-content").animate(
                {
                    scrollLeft: "-=340",
                },
                300,
                updateButtons
            );
        }
    });

    $("#scroll-right").click(function () {
        if ($(window).width() <= 768) {
            $("#scroll-content").animate(
                {
                    scrollLeft: "+=385",
                },
                300,
                updateButtons,
                console.log(
                    $("#scroll-content").scrollLeft() + $(".scroll-container").width()
                ),
                console.log($(".scroll-content").width())
            );
        } else {
            $("#scroll-content").animate(
                {
                    scrollLeft: "+=340",
                },
                300,
                updateButtons
            );
        }
    });
});

$(document).ready(function () {
    let currentIndex = 0;
    $(".item").click(function () {
        $(".item").removeClass("active");
        $(this).addClass("active");

        if (this.id === "item1") {
            $("#back").addClass("disabled");
        } else {
            $("#back").removeClass("disabled");
        }

        if (this.id === "item3") {
            $("#next").addClass("disabled");
        } else {
            $("#next").removeClass("disabled");
        }

        switch (this.id) {
            case "item1":
                if ($(window).width() <= 740) {
                    $("#border-product").css({left: "calc(0%)"});
                } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
                    $("#border-product").css({left: "calc(5%)", width: "225px"});
                } else {
                    $("#border-product").css({left: "calc(6%)"});
                }
                $(".product-left_img img").attr("src", item[0].img);
                $("#item-title").text(item[0].fullName);
                if (typeof item[0].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[0].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[0].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[0].description);
                }
                $(".table-head .table-title_large:first-child").text(item[0].title);
                $(".table-head .table-title_large.pb-4").text(item[0].taste);
                $(".item-energy").text(`Năng lượng ${item[0].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[0].calories} (kcal)`
                );
                $(".item-total-fat").text(item[0].totalFat);
                $(".item-fat-percent").text(`${item[0].totalFatPercent}`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[0].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(`${item[0].saturatedFatPercent}`);
                $(".natri").text(item[0].natri);
                $(".item-natri-percent").text(item[0].natriPercent);
                $(".item-total-carbohydrate").text(item[0].totalCarbohydrate);
                $(".total-carbo-percent").text(item[0].carboPercent);
                $(".sugar").text(`Đường ${item[0].sugar}`);
                $(".protein").text(item[0].protein);
                $(".item-title-bot").text((item[0].fullName).toUpperCase());
                $(".ingredient").text(item[0].ingredient);
                currentIndex = 0;
                break;
            case "item2":
                if ($(window).width() <= 768) {
                    $("#border-product").css({left: "calc(34%)"});
                } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
                    $("#border-product").css({left: "calc(36%)"});
                } else {
                    $("#border-product").css({left: "calc(37%)"});
                }
                $(".product-left_img img").attr("src", item[1].img);
                $("#item-title").text(item[1].fullName);
                if (typeof item[1].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[1].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[1].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[1].description);
                }
                $(".table-head .table-title_large:first-child").text(item[1].title);
                $(".table-head .table-title_large.pb-4").text(item[1].taste);
                $(".item-energy").text(`Năng lượng ${item[1].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[1].calories} (kcal)`
                );
                $(".item-total-fat").text(item[1].totalFat);
                $(".item-fat-percent").text(`${item[1].totalFatPercent}`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[1].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(`${item[1].saturatedFatPercent}`);
                $(".natri").text(item[1].natri);
                $(".item-natri-percent").text(item[1].natriPercent);
                $(".item-total-carbohydrate").text(item[1].totalCarbohydrate);
                $(".total-carbo-percent").text(item[1].carboPercent);
                $(".sugar").text(`Đường ${item[1].sugar}`);
                $(".protein").text(item[1].protein);
                $(".item-title-bot").text((item[1].fullName).toUpperCase());
                $(".ingredient").text(item[1].ingredient);
                currentIndex = 1;
                break;
            case "item3":
                if ($(window).width() <= 768) {
                    $("#border-product").css({left: "calc(67%)"});
                } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
                    $("#border-product").css({left: "calc(68%)"});
                } else {
                    $("#border-product").css({left: "calc(68%)"});
                }
                $(".product-left_img img").attr("src", item[2].img);
                $("#item-title").text(item[2].fullName);
                if (typeof item[2].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[2].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[2].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[2].description);
                }
                console.log(typeof item[2].description === "object");
                $(".table-head .table-title_large:first-child").text(item[2].title);
                $(".table-head .table-title_large.pb-4").text(item[2].taste);
                $(".item-energy").text(`Năng lượng ${item[2].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[2].calories} (kcal)`
                );
                $(".item-total-fat").text(item[2].totalFat);
                $(".item-fat-percent").text(`${item[2].totalFatPercent}`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[2].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(`${item[2].saturatedFatPercent}`);
                $(".natri").text(item[2].natri);
                $(".item-natri-percent").text(item[2].natriPercent);
                $(".item-total-carbohydrate").text(item[2].totalCarbohydrate);
                $(".total-carbo-percent").text(item[2].carboPercent);
                $(".sugar").text(`Đường ${item[2].sugar}`);
                $(".protein").text(item[2].protein);
                $(".item-title-bot").text((item[2].fullName).toUpperCase());
                $(".ingredient").text(item[2].ingredient);
                currentIndex = 2;
                break;
        }
    });

    function animateDiv(element, opacity, duration) {
        return new Promise((resolve) => {
            element.animate({opacity: opacity}, duration, function () {
                resolve();
            });
        });
    }

    $("#nav-btn").click(function () {
        $(".nav-btn").toggleClass("open");
        $(".btn-inner span:first-child").css({width: "100%"});
        $(".navbar-content").slideToggle("slow", async function () {
            if ($(".navbar-content").is(":visible")) {
                var content = $(".nav-content_item");
                for (var i = 0; i < content.length; i++) {
                    await animateDiv($(content[i]), 1, 200);
                }
                await animateDiv($(".nav-content_logo"), 1, 100)
                await animateDiv($(".nav-content_social"), 1, 100)
            } else {
                var content = $(".nav-content_item");
                for (var i = 0; i < content.length; i++) {
                    await animateDiv($(content[i]), 0, 100);
                }
                await animateDiv($(".nav-content_logo"), 0, 100)
                await animateDiv($(".nav-content_social"), 0, 100)
            }
        });
    });

    $(".back-top").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
    });

    function updateActiveItem(index) {
        items.removeClass("active");
        items.eq(index).addClass("active");

        $("html, body").animate(
            {
                scrollTop: $("#product").offset().top,
            },
            500
        );

        switch (items.eq(index)[0].id) {
            case "item1":
                if ($(window).width() <= 740) {
                    $("#border-product").css({left: "calc(0%)"});
                } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
                    $("#border-product").css({left: "calc(5%)", width: "225px"});
                } else {
                    $("#border-product").css({left: "calc(6%)"});
                }
                $(".product-left_img img").attr("src", item[0].img);
                $("#item-title").text(item[0].fullName);
                if (typeof item[0].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[0].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[0].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[0].description);
                }
                $(".table-head .table-title_large:first-child").text(item[0].title);
                $(".table-head .table-title_large.pb-4").text(item[0].taste);
                $(".item-energy").text(`Năng lượng ${item[0].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[0].calories} (kcal)`
                );
                $(".item-total-fat").text(item[0].totalFat);
                $(".item-fat-percent").text(`${item[0].totalFatPercent}`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[0].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(`${item[0].saturatedFatPercent}`);
                $(".natri").text(item[0].natri);
                $(".item-natri-percent").text(item[0].natriPercent);
                $(".item-total-carbohydrate").text(item[0].totalCarbohydrate);
                $(".total-carbo-percent").text(item[0].carboPercent);
                $(".sugar").text(`Đường ${item[0].sugar}`);
                $(".protein").text(item[0].protein);
                $(".item-title-bot").text((item[0].fullName).toUpperCase());
                $(".ingredient").text(item[0].ingredient);
                break;
            case "item2":
                if ($(window).width() <= 768) {
                    $("#border-product").css({left: "calc(34%)"});
                } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
                    $("#border-product").css({left: "calc(36%)"});
                } else {
                    $("#border-product").css({left: "calc(37%)"});
                }
                $(".product-left_img img").attr("src", item[1].img);
                $("#item-title").text(item[1].fullName);
                if (typeof item[1].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[1].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[1].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[1].description);
                }
                $(".table-head .table-title_large:first-child").text(item[1].title);
                $(".table-head .table-title_large.pb-4").text(item[1].taste);
                $(".item-energy").text(`Năng lượng ${item[1].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[1].calories} (kcal)`
                );
                $(".item-total-fat").text(item[1].totalFat);
                $(".item-fat-percent").text(`${item[1].totalFatPercent}`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[1].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(`${item[1].saturatedFatPercent}`);
                $(".natri").text(item[1].natri);
                $(".item-natri-percent").text(item[1].natriPercent);
                $(".item-total-carbohydrate").text(item[1].totalCarbohydrate);
                $(".total-carbo-percent").text(item[1].carboPercent);
                $(".sugar").text(`Đường ${item[1].sugar}`);
                $(".protein").text(item[1].protein);
                $(".item-title-bot").text((item[1].fullName).toUpperCase());
                $(".ingredient").text(item[1].ingredient);
                break;
            case "item3":
                if ($(window).width() <= 768) {
                    $("#border-product").css({left: "calc(67%)"});
                } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
                    $("#border-product").css({left: "calc(68%)"});
                } else {
                    $("#border-product").css({left: "calc(68%)"});
                }
                $(".product-left_img img").attr("src", item[2].img);
                $("#item-title").text(item[2].fullName);
                if (typeof item[2].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[2].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[2].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[2].description);
                }
                console.log(typeof item[2].description === "object");
                $(".table-head .table-title_large:first-child").text(item[2].title);
                $(".table-head .table-title_large.pb-4").text(item[2].taste);
                $(".item-energy").text(`Năng lượng ${item[2].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[2].calories} (kcal)`
                );
                $(".item-total-fat").text(item[2].totalFat);
                $(".item-fat-percent").text(`${item[2].totalFatPercent}`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[2].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(`${item[2].saturatedFatPercent}`);
                $(".natri").text(item[2].natri);
                $(".item-natri-percent").text(item[2].natriPercent);
                $(".item-total-carbohydrate").text(item[2].totalCarbohydrate);
                $(".total-carbo-percent").text(item[2].carboPercent);
                $(".sugar").text(`Đường ${item[2].sugar}`);
                $(".protein").text(item[2].protein);
                $(".item-title-bot").text((item[2].fullName).toUpperCase());
                $(".ingredient").text(item[2].ingredient);
                break;
                $("#border-product").css({left: "calc(82.5%)", width: "144px"});
                $(".product-left_img img").attr("src", item[4].img);
                $("#item-title").text(item[4].fullName);
                if (typeof item[4].description === "object") {
                    $(".table-item .text").text("");
                    $(".table-item .text").append(`<p>${item[4].description[0]}</p>`);
                    $(".table-item .text").append(`<p>${item[4].description[1]}</p>`);
                } else {
                    $(".table-item .text").text(item[3].description);
                }
                $(".table-head .table-title_large:first-child").text(item[4].title);
                $(".table-head .table-title_large.pb-4").text(item[4].taste);
                $(".item-energy").text(`Năng lượng ${item[4].energy} (kcal)`);
                $(".item-calories").text(
                    `Calories from Fat ${item[4].calories} (kcal)`
                );
                $(".item-total-fat").text(item[4].totalFat);
                $(".item-fat-percent").text(`${item[4].totalFatPercent}%`);
                $(".item-saturated-fat").text(
                    `Chất béo bão hòa  ${item[4].saturatedFat}`
                );
                $(".item-saturated-fat-percent").text(
                    `${item[4].saturatedFatPercent}%`
                );
                $(".natri").text(item[4].natri);
                $(".item-natri-percent").text(item[4].natriPercent);
                $(".item-total-carbohydrate").text(item[4].totalCarbohydrate);
                $(".total-carbo-percent").text(item[4].carboPercent);
                $(".sugar").text(`Đường ${item[4].sugar}g`);
                $(".protein").text(item[4].protein);
                $(".item-title-bot").text(item[4].title);
                $(".ingredient").text(item[4].ingredient);
                break;
        }
    }

    const items = $(".item");
    const totalItems = items.length;

    $("#back").click(function () {
        if ($("#back").hasClass("disabled")) {
            return false;
        } else {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateActiveItem(currentIndex);
            console.log(currentIndex);
            if (currentIndex === 0) {
                $("#back").addClass("disabled");
            } else {
                $("#back").removeClass("disabled");
            }
        }
    });

    $("#next").click(function () {
        if ($("#next").hasClass("disabled")) {
            return false;
        } else {
            currentIndex = (currentIndex + 1) % totalItems;
            updateActiveItem(currentIndex);
            console.log(currentIndex);
            if (currentIndex === 0) {
                $("#back").addClass("disabled");
            } else {
                $("#back").removeClass("disabled");
            }

            if (currentIndex === 2) {
                $("#next").addClass("disabled");
            } else {
                $("#next").removeClass("disabled");
            }
        }
    });
});

// $(document).ready(function () {
//   var $image = $("#imgparalax");
//   var containerWidth = $("#imageContainer").width();
//   var containerHeight = $("#imageContainer").height();
//   var imageWidth = $image.width();
//   var imageHeight = $image.height();

//   $(".section-top_bg").mousemove(function (event) {
//     var mouseX = event.pageX;
//     var mouseY = event.pageY;

//     var offsetX = (containerWidth / 2 - mouseX) / 8;
//     var offsetY = (containerHeight / 2 - mouseY) / 8;

//     var newLeft = containerWidth / 2 - imageWidth / 2 + offsetX;
//     var newTop = containerHeight / 2 - imageHeight / 2 + offsetY;

//     $image.css({
//       left: newLeft,
//       top: newTop,
//     });
//   });
// });

$(document).ready(function () {
    var $image1 = $("#imgparalax");
    var $container1 = $("#imageContainer");
    var container1Width = $container1.width();
    var container1Height = $container1.height();
    var image1Width = $image1.width();
    var image1Height = $image1.height();

    $(".section-top_bg").mousemove(function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // For image1
        var offsetX1 = (container1Width / 2 - mouseX) / 10;
        var offsetY1 = (container1Height / 2 - mouseY) / 10;
        var newLeft1 = container1Width / 2 - image1Width / 2 + offsetX1;
        var newTop1 = container1Height / 2 - image1Height / 2 + offsetY1;
        $image1.css({
            left: newLeft1,
            top: newTop1,
        });
    });
});

$(document).ready(function () {
    let currentIndex = 0;

    $(".close-btn").click(
        function () {
            $(".section-img").addClass("open");
            currentIndex = 0;
        },
        function () {
            $(".section-img").removeClass("open");
        }
    );

    $(".scroll-item").click(function () {
        $(".section-img").addClass("open");
        $(".img-content_inner img").attr("src", this.src);
        $(".img-total span:first-child").text(this.id);
        currentIndex = this.id;

        $(".img-left-btn").click(function () {
            if (currentIndex === 1 || currentIndex === 0) {
                $(".img-left-btn").addClass("disabled");
                return false;
            } else {
                $(".img-right-btn").removeClass("disabled");
                currentIndex--;
                $(".img-content_inner img").attr(
                    "src",
                    $(".scroll-item")[currentIndex - 1].src
                );
                $(".img-total span:first-child").text(currentIndex);
            }
        });
        $(".img-right-btn").click(function () {
            if (currentIndex === 12) {
                $(".img-right-btn").addClass("disabled");
            } else {
                $(".img-left-btn").removeClass("disabled");
                currentIndex++;
                $(".img-content_inner img").attr(
                    "src",
                    $(".scroll-item")[currentIndex - 1].src
                );
                $(".img-total span:first-child").text(currentIndex);
            }
        });
        if (currentIndex == "1" || currentIndex == "0") {
            $(".img-left-btn").addClass("disabled");
        } else {
            $(".img-left-btn").removeClass("disabled");
        }
        if (currentIndex == "12") {
            $(".img-right-btn").addClass("disabled");
        } else {
            $(".img-right-btn").removeClass("disabled");
        }
    });
});

$(document).ready(function () {
    function updateLanguage(language) {
        if (language === "vi") {
            $("#language").text("EN");
            $(".what .row .left .title img").attr(
                "src",
                "./assets/Karamucho/txt-whatis-vi.15866bd1.webp"
            );
            $(".what .row .right").text(
                "Năm 1984, bánh snack khoai tây KARAMUCHO đầu tiên của Koike-ya đã ra mắt thị trường Nhật Bản. Người ta không ngớt trầm trồ về sản phẩm bởi sự pha trộn tuyệt vời giữa vị nóng, cay, chua và ngọt. Có thể nói chính KARAMUCHO đã tạo nên làn sóng “Snack Cay” vô cùng ấn tượng tại Đất nước mặt trời mọc. Mốc son này đã làm bệ phóng cho sự thành công của nhiều sản phẩm KARAMUCHO thế hệ tiếp theo, đưa KARAMUCHO trở thành thương hiệu snack cay bán chạy số 1* Nhật Bản, được đông đảo người tiêu dùng Nhật Bản và thế giới đón nhận. Đến Việt Nam, chúng tôi tin rằng KARAMUCHO cũng sẽ làm nên điều kỳ diệu như thế."
            );
            $(".character .row .right .content img").attr(
                "src",
                "./assets/Karamucho/character-font.png"
            );
            $(".row .right .content p").text(
                "Đại sứ thương hiệu của KARAMUCHO chính là bà Tomi-chan đến từ Nhật Bản. Mặc dù lớn tuổi nhưng tính cách của Tomi-chan rất trẻ trung, năng động và luôn “sống cháy” trọn từng phút giây. Tomi-chan rất thích đi du lịch, khám phá những vùng đất mới lạ, mặc quần áo sặc sỡ và đặc biệt thích chơi chữ! Đồng hành cùng Tomi-chan là Chi-chan, người bạn thân đến từ Việt Nam. Với phương châm tận hưởng cuộc sống hết mình, đôi bạn thân chắc chắn sẽ lan truyền thật nhiều năng lượng tích cực đến mọi người thông qua những mẩu chuyện hài hước bên dưới!"
            );
            $(".gallery .row .left img").attr(
                "src",
                "./assets/Karamucho/txt-gallery-vi.0ad15c1a.webp"
            );
            $(".section-history .container .wrap .left img").attr(
                "src",
                "./assets/Karamucho/history.png"
            );
            $(".section-history .container .wrap .right p").text(
                "KARAMUCHO lần đầu tiên được ra mắt tại Nhật Bản vào tháng 9, 1984. Tại thời điểm đó, trên thị trường chưa từng xuất hiện dòng snack cay với hương vị đặc biệt như thế. Chính vì vậy ngay khi sản phẩm được tung ra đã đón nhận không ngớt những lời khen và sự ủng hộ nồng nhiệt từ người tiêu dùng. Sản phẩm lúc đó được biết đến rộng rãi chủ yếu qua việc truyền miệng, nhưng đã tạo nên một sức nóng bùng nổ chưa từng có từ trước đến nay. Ngoài ra, những mẫu quảng cáo và cả nhân vật đại diện của thương hiệu cũng rất được nguời tiêu dùng ưa thích. Đến nay, KARAMUCHO đã có lịch sử phát triển hơn 30 năm ở Nhật Bản, nhưng cơn sốt về cái tên KARAMUCHO cũng như những sản phẩm cay ngon đặc trưng của thương hiệu này vẫn chiếm trọn tình cảm của tất cả người tiêu dùng."
            );
            $(".product-title_font").attr(
                "src",
                "./assets/Karamucho/product-content.png"
            );
            $("footer .contact .wrap .row .right .info img").attr(
                "src",
                "./assets/Karamucho/contact.png"
            );
            $("footer .contact .wrap .row .right .info .office .title strong").text(
                "Văn Phòng Kinh Doanh"
            );
            $(
                "footer .contact .wrap .row .right .info .office div:nth-child(2)"
            ).text("");
            $(
                "footer .contact .wrap .row .right .info .office div:nth-child(2)"
            ).html(
                "Tòa nhà Viễn Đông, <br> Số 14 Phan Tôn, P. Đa Kao, Quận 1, TPHCM, Việt Nam"
            );
            $(
                "footer .contact .wrap .row .right .info .office div:nth-child(3)"
            ).text("Điện thoại: + (028) 3080 800");

            $(
                "footer .contact .wrap .row .right .info .office:last-child .title strong"
            ).text("Nhà Máy");
            $(
                "footer .contact .wrap .row .right .info .office:last-child div:nth-child(2)"
            ).text("");
            $(
                "footer .contact .wrap .row .right .info .office:last-child div:nth-child(2)"
            ).html(
                "Đường N3-2, Khu công nghiệp Long Đức, Xã Long Đức, <br> Huyện Long Thành, Tỉnh Đồng Nai, Việt Nam"
            );
            $(
                "footer .contact .wrap .row .right .info .office:last-child div:nth-child(3)"
            ).text("Điện thoại: + (0251) 3681368");
            $("footer .copyright span").text("© Bản quyền thuộc về Koikeya 2024");
        } else if (localStorage.getItem("language") === "en") {
            $("#language").text("VI");
            $(".what .row .left .title img").attr(
                "src",
                "./assets/Karamucho/what-en.png"
            );
            $(".what .row .right").text(
                "In 1984, Koike-ya introduced its first KARAMUCHO potato chips to the Japanese market. Back then, people were so excited of the amazing mixture of spicy, sweet and sour flavor. It's even said to have kick started the spicy food trend in Japan. It had opened to the success of a number or KARAMUCHO brands, and made KARAMUCHO the best-selling spicy chips in Japan. Coming to Vietnam, we believe that KARAMUCHO would create such miracle. "
            );
            $(".character .row .right .content img").attr(
                "src",
                "./assets/Karamucho/character-font-en.png"
            );
            $(".row .right .content p").text(
                "KARAMUCHO’s brand character is Tomi-chan from Japan! In spite of her age, Tomi-chan always keeps the young spirit and lives to the fullest. She loves to travel, explore new things, wear colorful clothes and especially word-play! Accompanying Tomi-chan is Chi-chan, a close friend from Vietnam. With the motto of enjoying life wholeheartedly, the best friends will surely spread a lot of positive energy to everyone through the funny stories below!"
            );
            $(".gallery .row .left img").attr(
                "src",
                "./assets/Karamucho/gallery-en.png"
            );
            $(".section-history .container .wrap .left img").attr(
                "src",
                "./assets/Karamucho/history-en.png"
            );
            $(".section-history .container .wrap .right p").text(
                "KARAMUCHO first appeared in the Japan market in September, 1984. At the time, it was the 1st chips in Japan to introduce a spicy flavor with such special taste, that they received a handful of compliments and love from the snack consumers. By then, the chips brand had gained its reputation primarily through word of mouth, and then created the biggest buzz ever in the years later. Additionally, people love all the ads and also the brand character so much. KARAMUCHO has had a history of over 30 years of business in Japan, but the KARAMUCHO fever and its phenomenal hot spicy flavor still remains the most loved and popular spicy potato chips among the consumers"
            );
            $(".product-title_font").attr(
                "src",
                "./assets/Karamucho/product-content-en.png"
            );
            $("footer .contact .wrap .row .right .info img").attr(
                "src",
                "./assets/Karamucho/contact-en.png"
            );
            $("footer .contact .wrap .row .right .info .office .title strong").text(
                "Business Office"
            );
            $(
                "footer .contact .wrap .row .right .info .office div:nth-child(2)"
            ).text("");
            $(
                "footer .contact .wrap .row .right .info .office div:nth-child(2)"
            ).html(
                "Vien Dong Building, <br> 14 Phan Ton St, Da Kao Ward, District 1, HCMC, Vietnam"
            );
            $(
                "footer .contact .wrap .row .right .info .office div:nth-child(3)"
            ).text("Tel: + (028) 3080 800");

            $(
                "footer .contact .wrap .row .right .info .office:last-child .title strong"
            ).text("Factory");
            $(
                "footer .contact .wrap .row .right .info .office:last-child div:nth-child(2)"
            ).text("");
            $(
                "footer .contact .wrap .row .right .info .office:last-child div:nth-child(2)"
            ).html(
                "N3-2 St., Long Duc IP, Long Duc Ward, Long Thanh Dist, <br> Dong Nai Province, Viet Nam"
            );
            $(
                "footer .contact .wrap .row .right .info .office:last-child div:nth-child(3)"
            ).text("Tel: + (0251) 3681368");
            $("footer .copyright span").text("Copyright © Koikeya 2024");
        }
    }

    updateLanguage();


    function animateDiv(element, opacity, duration) {
        return new Promise((resolve) => {
            element.animate({opacity: opacity}, duration, function () {
                resolve();
            });
        });
    }

    $("#language").click(async function () {
        if (localStorage.getItem("language") === "vi") {
            localStorage.setItem("language", "en");
            updateLanguage(localStorage.getItem("language"));
            $(".navbar-content").removeClass("open");
            $(".navbar-content").slideUp("fast");
            var content = $(".nav-content_item");
            for (var i = 0; i < content.length; i++) {
                await animateDiv($(content[i]), 0, 100);
            }
            await animateDiv($(".nav-content_logo"), 0, 100)
            await animateDiv($(".nav-content_social"), 0, 100)
            $(".nav-btn").removeClass("open");
        } else if (localStorage.getItem("language") === "en") {
            localStorage.setItem("language", "vi");
            updateLanguage(localStorage.getItem("language"));
            $(".navbar-content").removeClass("open");
            $(".navbar-content").slideUp("fast");
            var content = $(".nav-content_item");
            for (var i = 0; i < content.length; i++) {
                await animateDiv($(content[i]), 0, 100);
            }
            await animateDiv($(".nav-content_logo"), 0, 100)
            await animateDiv($(".nav-content_social"), 0, 100)
            $(".nav-btn").removeClass("open");
        }
    });
});

$(document).ready(function () {
    function animateDiv(element, opacity, duration) {
        return new Promise((resolve) => {
            element.animate({opacity: opacity}, duration, function () {
                resolve();
            });
        });
    }

    $("#close-img").click(async function () {
        $(".navbar-content").removeClass("open");
        $(".navbar-content").slideUp("fast");
        var content = $(".nav-content_item");
        for (var i = 0; i < content.length; i++) {
            await animateDiv($(content[i]), 0, 100);
        }
        await animateDiv($(".nav-content_logo"), 0, 100)
        await animateDiv($(".nav-content_social"), 0, 100)
        $(".nav-btn").removeClass("open");
    })
})