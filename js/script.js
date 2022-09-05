$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $('body').addClass('lock')
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock')
});
$('.menu__link').click(function(event) {
    $('.icon-menu').toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').remove('lock')
});

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();


$(window).resize(function(event){
	header();
});

function header() {
	var h=$(window).outerHeight();
	$('.header').css({
		height: h
	});
}
header();

//slick slider
$(document).ready(function(){
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    });
});

//Smooth scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
});
