
$("#headnav-01").click(function () {
    $(".con-index").animate({
        "left": "0%"
    }, 800);
    $(".about-size").animate({
        "left": "0%"
    }, 800)
    $(".blog").animate({
        "left": "0%"
    }, 800)
    $(".write-blog").animate({
        "left": "0%"
    }, 800)
    $(".contact-Author").animate({
        "left": "0%"
    }, 800)
})
$("#headnav-02").click(function () {
    $(".con-index").animate({
        "left": "-100%"
    }, 800);
    $(".about-site").animate({
        "left": "0%"
    }, 800)
    $(".blog").animate({
        "left": "0%"
    }, 800)
    $("write-blog").animate({
        "left": "0%"
    }, 800)
    $("contact-Author").animate({
        "left": "0%"
    }, 800)
})
$("#headnav-03").click(function () {
    $(".con-index").animate({
        "left": "-100%"
    }, 800);
    $(".about-site").animate({
        "left": "-100%"
    }, 800)
    $(".blog").animate({
        "left": "0%"
    }, 800)
    $(".write-blog").animate({
        "left": "0%"
    }, 800)
    $(".contact-Author").animate({
        "left": "0%"
    }, 800)
})
$("#headnav-04").click(function () {
    console.log(111);
    $(".con-index").animate({
        "left": "-100%"
    }, 800);
    $(".about-site").animate({
        "left": "-100%"
    }, 800)
    $(".blog").animate({
        "left": "-100%"
    }, 800)
    $(".write-blog").animate({
        "left": "0%"
    }, 800)
    $(".contact-Author").animate({
        "left": "0%"
    }, 800)
})
$("#headnav-05").click(function () {
    $(".con-index").animate({
        "left": "-100%"
    }, 800);
    $(".about-site").animate({
        "left": "-100%"
    }, 800)
    $(".blog").animate({
        "left": "-100%"
    }, 800)
    $(".write-blog").animate({
        "left": "-100%"
    }, 800)
    $(".contact-Author").animate({
        "left": "0%"
    }, 800)
})
$("#btn").click(function () {
    $("#headnav-05").trigger("click");
})
$(".new-friend-btn").click(function () {
    $("#headnav-02").trigger("click");
})

 //导航栏切换    
 $(".head-nav ul").children("li:nth-child(-n+5)").click(function(e){
    $(".head-nav ul span").removeClass("checkd");
    $(this).find("span").addClass("checkd")

 });
//切换
var status_btn = 0; //白 0 黑 1 
$(".switch-btn").click(function () {
    $("body").toggleClass("background");
    $(".backdrop").toggleClass("backdrop-switch");
    $("header").toggleClass("head-change");
    $(".left-box").toggleClass("change");
    $(".new-friend-btn").toggleClass("new-friend-btn-switch");
    if (status_btn === 0) {
        $(".circle").css({
            "transform": "translateX(30px)"
        });
        $(".con-index").addClass("con-index-ground change");
        $(".bearrun").css({
            "display": "block"
        });
        $(".about-site").addClass("content-change");
        $(".mastery a,.proficiency a ").css({"background-color":"#143e59"});
        $(".blog").addClass("content-change");
        $(".blog-index div").css({"background-color":"#143e59"})
        $(".blog-article").css({"background-color":"#143e59"})
        $(".write-blog").addClass("content-change");
        $(".fabu,.fabu-details").css({"background-color":"#143e59"})
        $("#fabu-input").css({"background-color":"#143e59"})
        $(".contact-Author").addClass("content-change");
        $("#contact").css({"background-color":"#143e59"})
        $(".wttandroid").css({"background-color":"#143e59"})
        $(".story").addClass("content-story");
        $(".contact-way").css({"background-color":"#143e59"})
        $(".blog-index img").eq(0).attr("src","./imags/H5-white.svg");
        $(".blog-index img").eq(1).attr("src","./imags/javascript-white.svg");
        $(".blog-index img").eq(2).attr("src","./imags/jquery-white.svg");
        $(".blog-index img").eq(3).attr("src","./imags/vue-white.svg");
        $(".blog-index img").eq(4).attr("src","./imags/nodejs-white.svg");
        $(".blog-index img").eq(5).attr("src","./imags/other-white.svg");

        $(".contact-way img").eq(0).attr("src","./imags/share-W.svg");
        $(".contact-way img").eq(1).attr("src","./imags/gitee-W.svg");
        $(".contact-way img").eq(2).attr("src","./imags/github-W.svg");
        $(".contact-way img").eq(3).attr("src","./imags/QQ-W.svg");
        $(".head-name span img").attr({"src":"./imags/quotation-mark-W.svg"})
        console.log( $(".blog-article img"));
        $(".blog-article img").eq(0).attr({"src":"./imags/eye-W.svg"})
        $(".blog-article img").eq(1).attr({"src":"./imags/give-thumbs-up-W.svg"})
        $(".blog-article img").eq(2).attr({"src":"./imags/time-W.svg"})
        $(".blog-article img").eq(3).attr({"src":"./imags/eye-W.svg"})
        $(".blog-article img").eq(4).attr({"src":"./imags/give-thumbs-up-W.svg"})
        $(".blog-article img").eq(5).attr({"src":"./imags/time-W.svg"})
        $(".blog-article img").eq(6).attr({"src":"./imags/eye-W.svg"})
        $(".blog-article img").eq(7).attr({"src":"./imags/give-thumbs-up-W.svg"})
        $(".blog-article img").eq(8).attr({"src":"./imags/time-W.svg"})
        $(".blog-article img").eq(9).attr({"src":"./imags/eye-W.svg"})
        $(".blog-article img").eq(10).attr({"src":"./imags/give-thumbs-up-W.svg"})
        $(".blog-article img").eq(11).attr({"src":"./imags/time-W.svg"})
        $(".blog-article img").eq(12).attr({"src":"./imags/eye-W.svg"})
        $(".blog-article img").eq(13).attr({"src":"./imags/give-thumbs-up-W.svg"})
        $(".blog-article img").eq(14).attr({"src":"./imags/time-W.svg"})
        $(".blog-article img").eq(15).attr({"src":"./imags/eye-W.svg"})
        $(".blog-article img").eq(16).attr({"src":"./imags/give-thumbs-up-W.svg"})
        $(".blog-article img").eq( 17).attr({"src":"./imags/time-W.svg"})
        $(".cover img").attr({"src":"./imags/Clover-W.svg"})
        $("header .head-nav ul").css({"color":"#fff","background-color":"#08283a"})
        status_btn = 1

    } else if (status_btn === 1) {
        $(".circle").css({
            "transform": "translateX(0px)"
        });
        $(".con-index").removeClass("con-index-ground change");
        $(".bearrun").css({
            "display": "none"
        });
        $(".about-site").removeClass("content-change");
        $(".mastery a,.proficiency a ").css({"background-color":"#fff"});
        $(".blog").removeClass("content-change");
        $(".blog-index div").css({"background-color":"#fff"})
        $(".blog-article").css({"background-color":"#fff"})
        $(".write-blog").removeClass("content-change");
        $(".fabu,.fabu-details").css({"background-color":"#fff"})
        $("#fabu-input").css({"background-color":"#fff"})
        $(".contact-Author").removeClass("content-change");
        $("#contact").css({"background-color":"#fff"})
        $(".wttandroid").css({"background-color":"#fff"})
        $(".story").removeClass("content-story");
        $(".contact-way").css({"background-color":"#fff"})
        $(".blog-index img").eq(0).attr("src","./imags/H5-black.svg");
        $(".blog-index img").eq(1).attr("src","./imags/javascript-black.svg");
        $(".blog-index img").eq(2).attr("src","./imags/jquery-black.svg");
        $(".blog-index img").eq(3).attr("src","./imags/vue-black.svg");
        $(".blog-index img").eq(4).attr("src","./imags/nodejs-black.svg");
        $(".blog-index img").eq(5).attr("src","./imags/other-black.svg");

        $(".contact-way img").eq(0).attr("src","./imags/share-B.svg");
        $(".contact-way img").eq(1).attr("src","./imags/gitee-B.svg");
        $(".contact-way img").eq(2).attr("src","./imags/github-B.svg");
        $(".contact-way img").eq(3).attr("src","./imags/QQ-B.svg");
        $(".head-name span img").attr({"src":"./imags/quotation-mark-B.svg"})
        $(".blog-article img").eq(0).attr({"src":"./imags/eye-B.svg"})
        $(".blog-article img").eq(1).attr({"src":"./imags/give-thumbs-up-B.svg"})
        $(".blog-article img").eq(2).attr({"src":"./imags/time-B.svg"})
        $(".blog-article img").eq(3).attr({"src":"./imags/eye-B.svg"})
        $(".blog-article img").eq(4).attr({"src":"./imags/give-thumbs-up-B.svg"})
        $(".blog-article img").eq(5).attr({"src":"./imags/time-B.svg"})
        $(".blog-article img").eq(6).attr({"src":"./imags/eye-B.svg"})
        $(".blog-article img").eq(7).attr({"src":"./imags/give-thumbs-up-B.svg"})
        $(".blog-article img").eq(8).attr({"src":"./imags/time-B.svg"})
        $(".blog-article img").eq(9).attr({"src":"./imags/eye-B.svg"})
        $(".blog-article img").eq(10).attr({"src":"./imags/give-thumbs-up-B.svg"})
        $(".blog-article img").eq(11).attr({"src":"./imags/time-B.svg"})
        $(".blog-article img").eq(12).attr({"src":"./imags/eye-B.svg"})
        $(".blog-article img").eq(13).attr({"src":"./imags/give-thumbs-up-B.svg"})
        $(".blog-article img").eq(14).attr({"src":"./imags/time-B.svg"})
        $(".blog-article img").eq(15).attr({"src":"./imags/eye-B.svg"})
        $(".blog-article img").eq(16).attr({"src":"./imags/give-thumbs-up-B.svg"})
        $(".blog-article img").eq( 17).attr({"src":"./imags/time-B.svg"})
        $(".cover img").attr({"src":"./imags/Clover-B.svg"})
        $("header .head-nav ul").css({"color":"black","background-color":"#fff"})
        status_btn = 0;
    }
})
$('.goTop').hide();
//返回顶部
$(".about-site").scroll(function(){
    var $mtop = $('.stationmaster-data').offset().top; //元素距离文档上方的高度
    var $dtop = $(".about-site").scrollTop(); //卷起来的高度
    console.log($dtop);
    if ($dtop >= 400) {
        $('.goTop').show();
    } else {
        $('.goTop').hide();
    }
});
$(".goTop").click(function(){
    $(".about-site").animate({
        scrollTop : 0
    },1500);
})
$(".blog").scroll(function(){
    var $dtop = $(".blog").scrollTop(); //卷起来的高度
    console.log($dtop);
    if ($dtop >= 700) {
        $('.goTop').show();
    } else {
        $('.goTop').hide();
    }
});
$(".goTop").click(function(){
    $(".blog").animate({
        scrollTop : 0
    },1500);
})

