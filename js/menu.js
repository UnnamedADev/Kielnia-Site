"use strict";
$(document).ready(function(){
    
    //build menu
    $(".menuBar a:nth-of-type(1)").click(function(){
        $(".fMenu").animate({
            left: 0
        },400,"swing");
    });
    
    //close button interaction
    $(".fMenuClose div").mouseenter(function(){
        
        $(".fMenuClose").animate({
            backgroundColor: "#D7C9AA"
        },150);
        $(".fMenuClose h1").fadeIn(150);
    });
    $(".fMenuClose div").mouseleave(function(){
        $(".fMenuClose").animate({
            backgroundColor: "#f9f9f9"
        },150);
        $(".fMenuClose h1").fadeOut(150);
    });
    
    //close button event
    $(".fMenuClose div").click(function(){
        $(".fMenu").animate({
            left: "-100%"
        },400,"swing");
    });
    
});