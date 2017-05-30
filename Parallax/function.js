/*$(window).scroll(function(){

var wScroll = $(this).scrollTop();

$('.logo').css({
   'transform' : 'translate(0px, '+ wScroll/5 + '%)'
});

$('.birds').css({
   'transform' : 'translate(0px, '+ wScroll/6 + '%)'
});

$('.leaf').css({
   'transform' : 'translate(0px, -'+ wScroll/23 + '%)'
});

}); 

/* $(document).ready(function() {try the youtube video.....s */

$(document).ready(function(){

$(window).scroll(function(event) {
     var wScroll = $(this).scrollTop();

    $('.logo').css({
   'transform' : 'translate(0px, '+ wScroll/51 + '%)'
});

$('.birds').css({
   'transform' : 'translate(0px, '+ wScroll/15 + '%)'
});

$('.leaf').css({
   'transform' : 'translate(0px, -'+ wScroll/32 + '%)'
}); 



     if(wScroll >= 200){
     $('#iPhone').addClass('animate'); 
     $('#devIconTitle').addClass('animate');
     $('#devParagraph').addClass('animate');
     } 

     if(wScroll >= 700){
$('#musicIconTitle').addClass('animate');
$('#musicParagraph').addClass('animate');
$('#carosel').addClass('animate');
     }

          if(wScroll >= 1300){
$('#photoIconTitle').addClass('animate');
$('#photoParagraph').addClass('animate');
     }




});

$('#m1').delay(300);
$('#m1').fadeIn(1000);

$('#m2').delay(1500);
$('#m2').fadeIn(1000);

$('#logoS').delay(2400);
$('#logoS').fadeIn(1000);


/* Riff Mate*/
/*$('#riffIcon').fadeIn(1000);*/



});
