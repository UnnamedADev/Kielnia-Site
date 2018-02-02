"use strict";

//const
const loadDelay = 0*1000;

$(document).ready(function(){
    
    //main
    $(".fLoaderHolder").fadeIn(300, function(){
        $(".fLoaderAnimation").fadeIn(300,function(){
            $(".fLoaderHolder > h1").fadeIn(300, afterLoad);
        });
    });
    
    //fx
    function afterLoad(){

        setTimeout(function(){
            $(".fLoader").slideUp(1000, "swing");
        },loadDelay);
        setTimeout(function(){
            $(".fLoaderAfter").slideUp(1000,"swing");
            afterOut();
        },loadDelay+100);
    }
    
    function afterOut(){
        //$(".preLoader").trigger("play");
    }
});