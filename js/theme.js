"use strict";

$(document).ready(function(){
    //title color hover
    $(".fThemeArrow").mouseenter(function(){
        $(".fTheme h2").slideDown(300);
    });
    $(".fThemeArrow").mouseleave(function(){
        $(".fTheme h2").slideUp(300);
    });
    
    //onclick animations
    $(".fThemeArrow").click(function(){
        $(".fTransition").show();
        $(".fTheme").animate({
            top: "-110%"
        },1000,"swing",function(){
            $(".fTheme").hide();
            $(".fPage").show().animate({
                top: "0px"
            },1000,"swing",function(){
                $(".fTransition").hide();
            });
        });
        
    });
    
});