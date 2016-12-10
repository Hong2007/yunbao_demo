/**
 * Created by Administrator on 2016/11/23.
 */

//分页翻动
$('#main-pages').fullpage({
    anchors: ['page1', 'page2', 'page3'],
    menu: '.menu',
    loopBottom: true
});

/*jQuery(".focus").slide({ titCell:"#tip li", mainCell:"#pic ul",effect:"left",autoPlay:true,delayTime:200 });*/

/*jQuery("#main-pages").slide({ titCell:".section", mainCell:".container ul li",effect:"top",autoPlay:true,delayTime:800 });*/

//collpase按钮显示隐藏
jQuery('header .btn-collapse').click(function(){
    var num= parseInt( $('header .container').css('right') );
    if(num>0){
        $("header .container").animate({right:'-240px'});
    }else{
        $("header .container").animate({right:'240px'});
    }
});

//s3 联系我们
jQuery('#s3-touch').click(function(){
    $('.section3-touch').css('visibility','visible');
});

