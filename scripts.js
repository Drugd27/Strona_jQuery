$(document).ready(function() {

    // PRZYCISKI DO OTWIERANIA KARTY Z INFORMACJAMI O POSTACIACH

        $("#ch_btn").click(function() {

            $("#info-ch").toggle(function() {
                $("#info-ch").animate(
                    {left: '100px'}
                );
            });

        });
        $("#art_btn").click(function() {
            $("#info-art").toggle(function() {
                $("#info-art").animate(
                    {left: '100px'}
                );
            });
        });
        $("#cer_btn").click(function() {
            $("#info-cer").toggle(function() {
                $("#info-cer").animate(
                    {left: '100px'}
                );
            });
        });



        // PRZYCISK DO ZAMYKANIA KARTY
        
        $("#close-ch").click(function(){ 
            $("#info-ch").toggle(function() {
                $("#info-ch").animate(
                    {left: '100px'}
                );
            });    
        });
        $("#close-art").click(function(){
            $("#info-art").toggle(function() {
                 $("#info-art").animate(
                    {left: '100px'}
                );
            })
        })
        $("#close-cer").click(function() {
            $("#info-cer").toggle(function() {
                $("#info-cer").animate(
                    {left: '100px'}
                )
            });
        });
        
        $("#ch-portrait").click(function() {
            $("#ch-portrait").elevateZoom({
                zoomType: "lens",
                lensShape: "round",
                lensSize: 300
            });
        });
        
    });