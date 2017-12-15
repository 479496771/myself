$(function () {
    $(window).scroll(function (){
        var scrolltop=$(document.body).scrollTop();
        if(scrolltop>1)  {
            $(".nav_box").css({backgroundColor:'#fff',color:'#000'});
            $(".nav_small li").css({backgroundColor:'#fff',color:'#000'});
            $(".nav_small").css({backgroundColor:'#fff'});
        }else if(scrolltop<=1)  {
            $(".nav_box").css({backgroundColor:'rgba(0,0,0,0)',color:'#fff'});
            $(".nav_small li").css({backgroundColor:'rgba(0,0,0,0)',color:'#fff'});
            $(".nav_small").css({backgroundColor:'rgba(0,0,0,0)',color:'#fff'});
        }
        if(scrolltop>$('bnaner').height()){
            $(".nav_small li").each(function (index,value) {
                $(value).hover(
                    function () {
                        $(value).css('color','#E3AE57');
                    },function () {
                        $(value).css('color','#000');

                    }
                )
            })
            $(".nav_big li").each(function (index,value) {
                $(value).hover(
                    function () {
                        $(value).css('color','#E3AE57');
                    },function () {
                        $(value).css('color','#000');

                    }
                )
            })
        }else if(scrolltop>$('bnaner').height()){
            $(".nav_small li").each(function (index,value) {
                $(value).hover(
                    function () {
                        $(value).css('color','#E3AE57');
                    },function () {
                        $(value).css('color','#000');
                    }
                )
            })
            $(".nav_big li").each(function (index,value) {
                $(value).hover(
                    function () {
                        $(value).css('color','#E3AE57');
                    },function () {
                        $(value).css('color','#000');
                    }
                )
            })
        }
    })
    $('.nav_nav').click(function () {
        $('.nav_small').slideToggle();

    })
    $('.nav_small').hover(
        function () {

        },function () {
            $('.nav_small').slideUp();
        })
    var nav=$(".nav_big li");
    var floor=$(".fool");
    nav.each(function (index,value) {
        $(value).click(function(){
            $(document.body).animate({scrollTop:floor[index].offsetTop});
            $(document.documentElement).animate({scrollTop:floor[index].offsetTop})
        })
    })
    var nav_s=$(".nav_small li");
    var floor_s=$(".fool");
    nav_s.each(function (index,value) {
        $(value).click(function(){
            $(document.body).animate({scrollTop:floor[index].offsetTop});
            $(document.documentElement).animate({scrollTop:floor[index].offsetTop})
        })
    })
    $(".jianli").hover(
        function(){
            $(".jianli").stop().animate({backgroundColor:'#E3AE57',borderRadius:20});
        },function(){
            $(".jianli").stop().animate({borderRadius:0});
        }
    )
    // $(".fanzhuan li").each(function (index,value) {
    //     $(value).hover(
    //         function () {
    //             $(value)
    //         },function () {
    //
    //         }
    //     )
    // })

})