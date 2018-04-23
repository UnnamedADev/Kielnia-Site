"use strict";
$(document).ready(function(){
    

    //MAIN
    visualInstr();
    eventsInstr();
    
    //FX
    function eventsInstr(){
        $(".menuBar a:nth-of-type(1)").click(function(){
            menuAppear();
        });
        $(".fMenuClose div").click(function(){
            menuDisappear();
        });
        
        menuHandling();
    }
    function visualInstr(){
        
        //close button interaction
        $(".fMenuClose div").mouseenter(function(){

            $(".fMenuClose").animate({
                backgroundColor: "#D7C9AA"
            },150);
            $(".fMenuClose h1").fadeIn(150);
        });
        $(".fMenuClose div").mouseleave(function(){
            $(".fMenuClose").animate({
                backgroundColor: "#fff"
            },150);
            $(".fMenuClose h1").fadeOut(150);
        });   
    }
    
    //SMALL FX
    function menuAppear(){
        //build menu
        $(".fMenu").animate({
            left: 0
        },400,"swing");
    }
    
    function menuDisappear(){
        //close button event
        $(".fMenu").animate({
            left: "-100%"
        },400,"swing");
    }
    
    function menuHandling(){
        $(".fMenu ul a").each(function(){
            $(this).click(function(){
                menuDisappear();
                
                var trgt = $(this).attr("href");
                console.log(trgt);
                
                var trgtPos = $("*[name='"+trgt+"']").position().top;
                
                $("html").animate({
                    scrollTop: trgtPos
                },300,"swing");
                
            });
        });
        
    }
});