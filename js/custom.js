/* global $, alert, console */
var x = $('.scroll-to-top');
$(window).scroll(function () {
   
    if ($(this).scrollTop() >= 700) {
        x.show();
    } else {
        x.hide();
    }
});
    
     // Click On Scroll To Top To Go Up
    
$('.scroll-to-top').click(function (event) {
                                      
    event.preventDefault();
        
    $('html,body').animate({
           
        scrollTop: 0
            
    }, 1000);
        
});