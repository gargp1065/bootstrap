$(document).ready(function () {
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
    });

    $('#reserveButton').click(function(){
        $('#reserveModal').modal('toggle')
    });

    $('#cancelButton1').click(function () {
        $('#reserveModal').modal('hide')
    });

    $('#cancelButton2').click(function () {
        $('#reserveModal').modal('hide')
    });
    $('#cancelButton3').click(function () {
        $('#loginModal').modal('hide')
    });

    $('#cancelButton4').click(function () {
        $('#loginModal').modal('hide')
    });

    $('#carouselButton').click( function () {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause')
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
            }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});