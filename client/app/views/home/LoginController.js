/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
twinsoftApp.controller('LoginController',  function LoginController($scope, $location) {
    $(function () {
        $(".input input").focus(function () {
            alert("focus");
            $(this).parent(".input").each(function () {
                $("label", this).css({
                    "line-height": "18px",
                    "font-size": "18px",
                    "font-weight": "100",
                    "top": "0px"
                })
                $(".spin", this).css({
                    "width": "100%"
                })
            });
        }).blur(function () {
            $(".spin").css({
                "width": "0px"
            })
            if ($(this).val() == "") {
                $(this).parent(".input").each(function () {
                    $("label", this).css({
                        "line-height": "60px",
                        "font-size": "24px",
                        "font-weight": "300",
                        "top": "10px"
                    })
                });
            }
        });
        $(".button").click(function (e) {
             alert("lcik");
            var pX = e.pageX,
                    pY = e.pageY,
                    oX = parseInt($(this).offset().left),
                    oY = parseInt($(this).offset().top);

            $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
            $('.x-' + oX + '.y-' + oY + '').animate({
                "width": "500px",
                "height": "500px",
                "top": "-250px",
                "left": "-250px",
            }, 600);
            $("button", this).addClass('active');
        })
        $(".alt-2").click(function () {
            //alert(".alt-2 click");
            if (!$(this).hasClass('material-button')) {
                $(".shape").css({
                    "width": "100%",
                    "height": "100%",
                    "transform": "rotate(0deg)"
                })
                setTimeout(function () {
                    $(".overbox").css({
                        "overflow": "initial"
                    })
                }, 100)
                $(this).animate({
                    "width": "140px",
                    "height": "140px"
                }, 100, function () {
                    $(".box").removeClass("back");

                    //$(this).removeClass('active')
                });
                $(".overbox .title").fadeOut(300);
                $(".overbox .input").fadeOut(300);
                $(".overbox .button").fadeOut(300);
                $(".alt-2").addClass('material-buton');
            }
        })
        $(".material-button").click(function () {
           // alert(".material-button click");
            if ($(this).hasClass('material-button')) {
                setTimeout(function () {
                    $(".overbox").css({
                        "overflow": "hidden"
                    })
                    $(".box").addClass("back");
                }, 1700)
                $(this).addClass('active').animate({
                    "width": "700px",
                    "height": "700px"
                });
                setTimeout(function () {
                    $(".shape").css({
                        "width": "50%",
                        "height": "50%",
                        "transform": "rotate(45deg)"
                    })
                    $(".overbox .title").fadeIn(300);
                    $(".overbox .input").fadeIn(300);
                    $(".overbox .button").fadeIn(300);
                }, 700)
                $(this).removeClass('material-button');
            }
            if ($(".alt-2").hasClass('material-buton')) {
                $(".alt-2").removeClass('material-buton');
                $(".alt-2").addClass('material-button');
            }
        });
    });
});