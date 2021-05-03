jQuery(document).ready(function(){

    "use strict"
    $('.slider').ripples({
        dropRadius: 12,
        perturbance: 0.01,
      });
       
    $(".text").typed({
        strings:["<strong>Cultivo</strong><strong class='primary'> -for new age farming.</strong>","<strong>Get your farm in one</strong><strong class='primary'> application.</strong>"],
        typespeed:0,
        loop:true
    });

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=80){
            $("nav").addClass('secondary');
        }
        else
        {
            $("nav").removeClass('secondary');
        }
    });
});