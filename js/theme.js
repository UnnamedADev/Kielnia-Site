"use strict";

$(document).ready(function(){
    //title color hover
    $(".fThemeArrow").mouseenter(function(){
        $(".fTheme h2").slideDown(100);
        $(".fTheme h1").slideUp(200);
    });
    $(".fThemeArrow").mouseleave(function(){
        $(".fTheme h2").slideUp(100);
        $(".fTheme h1").slideDown(200);
    });
    
    //onclick animations
    $(".fThemeArrow").click(function(){
        $(".fTransition").show();
        $(".fTheme").animate({
            top: "-110%"
        },400,"swing",function(){
            $(".fTheme").hide();
            $(".fPage").show().animate({
                top: "0px"
            },300,"swing",function(){
                $(".fTransition").hide();
            });
        });
        
    });
    
});