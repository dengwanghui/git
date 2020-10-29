window.onload=function(){
    var btn=document.getElementById("btn");
    var clientHeight=document.documentElement.clientHeight;
    window.onscroll=function(){
        var dtop=document.documentElement.scrollTop;
        if(dtop>=clientHeight){
            btn.style.display="block";
        }else{
            btn.style.display="none";
        }
    }
    btn.onclick=function(){
        timer=setInterval(function(){
        var dtop=document.documentElement.scrollTop;
        var speed=Math.floor(-dtop/10);
        document.documentElement.scrollTop=dtop+speed;
        if(dtop==0){
            clearInterval(timer);
        }
        },30)
    }
}

$(function(){
    $("#erjicaidan").on('click',function(){
        $(".erjicaidan1").show(0);
        var $a=$(".foot").css('top');
        if($a==104+'px'){
            $(".foot").animate({top:"727px"},10);
        }
        else if($a==727+'px'){
            $(".foot").animate({top:"104px"},10);
            $(".erjicaidan1").hide();
        }
    });
           //pc端轮播图
             var $num=1;
             $('.nav').css('background',"url('./images/banner"+$num+".jpg')");
             var setTime=setInterval(function(){
                $num++;
                if($num<6){
                $('.nav').css('background',"url('./images/banner"+$num+".jpg')");
                }else{
                    $num=0;
                }
             },2000)
             //移动端轮播图
             var $pum=1;
             $('.bg').css('background',"url('./images/banner0"+$num+".jpg')");
             var setTimer=setInterval(function(){
                $pum++;
                if($pum<6){
                $('.bg').css('background',"url('./images/banner0"+$num+".jpg')");
                }else{
                    $pum=0;
                }
             },2000)
             //pc端二级菜单
             $(".nav1>ul>li").mouseenter(function(){
				$(this).find("ul").slideDown('normal');
			});
			$(".nav1>ul>li").mouseleave(function(){
				$(this).find("ul").slideUp('normal');
            });
            
            $(".box,#a").mouseover(function(){
                $(".box").css({backgroundColor:'#fff',border:'1px solid #000'});
                $('#a').css('color','#000');
            });
            $(".box,#a").mouseout(function(){
                $(".box").css({backgroundColor:'#000',border:'0px solid #000'});
                $('#a').css('color','#fff');
            });
            $(".all>div:gt(3)").on('mouseover',function(){
                $(".all>div:gt(3)").siblings().not('.footer,.top').css({backgroundColor:'#fff',color:'#000'});
                $(this).css({backgroundColor:'#000',color:'#fff'});
            });
});
