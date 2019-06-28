$(function() {

    // 画面がスクロールされたら
    $(window).scroll(function() {

        // 画面のスクロールされた量を取得
        let scroll = $(window).scrollTop();
        // console.log(scroll);


        // スクロールされたらスクロール量に応じてふたが動く
        $(".huta").css({top: -scroll + '%'});

        // block3の位置取得
        let block3 = $(".block3").offset().top;


        // block4の位置取得
        let block4 = $(".block4").offset().top;

         // スクロールがblock4超えたらikonを表示
        if(scroll > block4) {
            $(".ikon").fadeIn();
        }else {
            $(".ikon").fadeOut();
        }

        // block4を超えたら左右から出現
        if(scroll > block4 - 200) {
            $(".img-top ").animate({left: 0}, 1000);
            $(".img-bottom ").animate({right: 0}, 1000);
        }

    })

    // downeyがクリックされたら背景が見える(アニメーションで)
    $(".left").click(function() {
        $(".left").animate({left: "-100%"},2000);
        $(".right").animate({right: "-100%"},2000);
        $(".block3").css("animation","downey ease 7s");
        $(".block3").css("backgroundImage","url('./img/downey back2image.webp')");
    })

    // iron man がクリックされたら背景が見える(アニメーションで)
    $(".right").click(function() {
        $(".left").animate({left: "-100%"},2000);
        $(".right").animate({right: "-100%"},2000);
        $(".block3").css("animation","ironman ease 7s");
        $(".block3").css("backgroundImage","url('./img/iron-man-4back-robert-downey-jr.jpg')");
    })

    // ikonがクリックされたら上に戻る
    $(".ikon").click(function() {
        $("html").animate({scrollTop: 0});
    })


    // buttonが押されたらテキスト表示
    $(".button").click(function() {
        // alert();
        $(".text-2").fadeIn();
        $(".button").fadeOut();
    })

    
})