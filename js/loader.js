"use strict";

$(document).ready(function(){

    $(".fLoaderHolder").fadeIn(300, function(){
        $(".fLoaderAnimation").fadeIn(300,function(){
            $(".fLoaderHolder > h1").fadeIn(300, afterLoad);
        });
    });
    
    function afterLoad(){
        setTimeout(function(){
            $(".fLoader").slideUp(500, "linear");
        },2000);
        setTimeout(function(){
            $(".fLoaderAfter").slideUp(400,"linear");
        },2100);
    }

});