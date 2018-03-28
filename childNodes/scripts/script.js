// MY JS FILE

// Gaming Submenu
var toggler = $('.toggle');
toggler.on('click', '.gaming-sub-menu-parent', function() {
	$(this).find('.gaming-sub-menu__toggle').slideToggle(10);
	$(this).toggleClass('bg-grey');
	$('.gaming-sub-menu-parent > a > .icon-cheveron-down').toggleClass('red-font');
});

////////////////////////////////////////////////////////////////////// Gearshop Submenu
toggler.on('click', '.gearshop-sub-menu-parent', function() {
	$(this).find('.gearshop-sub-menu').slideToggle(10);
	$(this).toggleClass('bg-grey');
	$('.gearshop-sub-menu-parent > a > .icon-cheveron-down').toggleClass('red-font');
});

/////////////////////////////////////////////////////////////////////// Search toggler
toggler.on('click', '.header__search-flex-container', function() {
	$('.toggle').find('.search-form').slideToggle(10);
});

////////////////////////////////////////////////////////////////////// Log in window pop up
$('.header__sign-in-flex-container').click(function() {
	$('#modal-window').arcticmodal({
		closeOnEsc: false,
		closeOnOverlayClick: false,
		overlay: {
			css: {
				backgroundColor: '#fff',
				backgroundImage: 'url(images/triangles.png)',
				backgroundRepeat: 'repeat',
				backgroundPosition: '50% 0',
				opacity: .85
			}
		}
	});
});

///////////////////////////////////////////////////////////////////////////////// Password check
var submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', getPw);
function getPw() {
  var getPassword = document.getElementById('password_input').value;
  console.log(getPassword);
  if (isFinite(getPassword)) {
	  alert('Password must contain at least 1 letter or symbol!');
  }
}

////////////////////////////////////////////////////////////////////////// Fixed Header + Margin Jump fix
$(function(){
	$(window).scroll(function() {
		var top = $(document).scrollTop();
		console.log(top);
		if (top < 400) {
			$(".header-container").css({top: '0', position: 'relative'});
			$('body').css({marginTop: '0px'});
		}
		else {
			$(".header-container").css({top: '0px', position: 'fixed'}); 
			$('body').css({marginTop: '84px'});
		}
	});
});

//////////////////////////////////////////////////////////////////////////////////// To Top Button
$(function() {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 500) {
			$('#totop').show(400);
		}
		else if ($(document).scrollTop() <= 500) {
			$('#totop').hide(400);
		}
	});
});



///////////////////////////////////////////////////////////////////////////////// Laptops page switcher
$('.content__laptops-toggle-inches-17').click(function()
{
     $('.content__laptops-toggle-inches-15').toggleClass('content__laptops-toggle-button-active content__laptops-toggle-button-passive'); 
	 $('.content__laptops-toggle-inches-17').toggleClass('content__laptops-toggle-button-active content__laptops-toggle-button-passive'); 
	 $('.content__laptops-list').toggleClass('content__laptops-display-none content__laptops-display-flex'); 
	 $('.content__laptops-list-17').toggleClass('content__laptops-display-none content__laptops-display-flex');
	 $('.content__laptops-price').toggleClass('content__laptops-display-none content__laptops-display-flex'); 
	 $('.content__laptops-price-17').toggleClass('content__laptops-display-none content__laptops-display-flex');
});

$('.content__laptops-toggle-inches-15').click(function()
{
     $('.content__laptops-toggle-inches-17').toggleClass('content__laptops-toggle-button-active content__laptops-toggle-button-passive'); 
	 $('.content__laptops-toggle-inches-15').toggleClass('content__laptops-toggle-button-active content__laptops-toggle-button-passive');
	 $('.content__laptops-list').toggleClass('content__laptops-display-none content__laptops-display-flex'); 
	 $('.content__laptops-list-17').toggleClass('content__laptops-display-none content__laptops-display-flex');
	 $('.content__laptops-price').toggleClass('content__laptops-display-none content__laptops-display-flex'); 
	 $('.content__laptops-price-17').toggleClass('content__laptops-display-none content__laptops-display-flex');	 
});





///////////////////////////////////////////////////////////////////////////////// Easy builder Kind of

$('.desktop').click(function()
{
	 $('.desktop').addClass('selected-unit');
	 $('.laptop, .pentium, .core-i5-i7, .level-2, .games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.core-i5-i7, .pentium, .level-3, .level-4, .level-5, .level-6').hasClass('display-block')) {
	 $('.desktop').removeClass('selected-unit');}
	 $('.pentium, .core-i5-i7, .level-2').toggleClass('display-block display-none'); 
	 $('.games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').addClass('display-none');
	 $('.games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').removeClass('display-block');
});

$('.laptop').click(function()
{
	 $('.laptop').addClass('selected-unit');
	 $('.desktop, .pentium, .core-i5-i7, .level-2, .games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.core-i5-i7, .pentium, .level-3, .level-4, .level-5, .level-6').hasClass('display-block')) {
	 $('.laptop').removeClass('selected-unit');}
	 $('.pentium, .core-i5-i7, .level-2').toggleClass('display-block display-none'); 
	 $('.games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').addClass('display-none');
	 $('.games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').removeClass('display-block');
});

$('.pentium').click(function()
{
	 $('.pentium').addClass('selected-unit');
	 $('.core-i5-i7, .games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.games, .multi, .level-4, .level-5, .level-6').hasClass('display-block')) {
	 $('.pentium').removeClass('selected-unit');}
	 $('.games, .multi, .level-3').toggleClass('display-block display-none');
	 $('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').addClass('display-none');
	 $('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').removeClass('display-block');
});

$('.core-i5-i7').click(function()
{
	 $('.core-i5-i7').addClass('selected-unit');
	 $('.pentium, .games, .multi, .level-3, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.games, .multi, .level-4, .level-5, .level-6').hasClass('display-block')) {
	 $('.core-i5-i7').removeClass('selected-unit');}
	 $('.games, .multi, .level-3').toggleClass('display-block display-none');
	 $('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').addClass('display-none');
	 $('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').removeClass('display-block');
});

$('.games').click(function()
{
	 $('.games').addClass('selected-unit');
	 $('.multi, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-5, .level-6').hasClass('display-block')) {
	 $('.games').removeClass('selected-unit');}
	 $('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4').toggleClass('display-block display-none');
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').addClass('display-none');
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').removeClass('display-block');
});

$('.multi').click(function()
{
	 $('.multi').addClass('selected-unit');
	 $('.games, .gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-5, .level-6').hasClass('display-block')) {
	 $('.multi').removeClass('selected-unit');}
	 $('.gf1050ti, .gf1060, .gf1070, .gf1080ti, .level-4').toggleClass('display-block display-none');
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').addClass('display-none');
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5, .constructor-form, .level-6').removeClass('display-block');
});

$('.gf1050ti').click(function()
{
	 $('.gf1050ti').addClass('selected-unit');
	 $('.gf1080ti, .gf1070, .gf1060, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.mousekb, .mousekbmonitor, .monitor, .nope, .level-6').hasClass('display-block')) {
	 $('.gf1050ti').removeClass('selected-unit');}
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5').toggleClass('display-block display-none'); 
	 $('.constructor-form, .level-6').addClass('display-none');
	 $('.constructor-form, .level-6').removeClass('display-block');
});

$('.gf1060').click(function()
{
	 $('.gf1060').addClass('selected-unit');
	 $('.gf1080ti, .gf1070, .gf1050ti, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.mousekb, .mousekbmonitor, .monitor, .nope, .level-6').hasClass('display-block')) {
	 $('.gf1060').removeClass('selected-unit');}
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5').toggleClass('display-block display-none'); 
	 $('.constructor-form, .level-6').addClass('display-none');
	 $('.constructor-form, .level-6').removeClass('display-block');
});

$('.gf1070').click(function()
{
	 $('.gf1070').addClass('selected-unit');
	 $('.gf1080ti, .gf1060, .gf1050ti, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.mousekb, .mousekbmonitor, .monitor, .nope, .level-6').hasClass('display-block')) {
	 $('.gf1070').removeClass('selected-unit');}
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5').toggleClass('display-block display-none'); 
	 $('.constructor-form, .level-6').addClass('display-none');
	 $('.constructor-form, .level-6').removeClass('display-block');
});

$('.gf1080ti').click(function()
{
	 $('.gf1080ti').addClass('selected-unit');
	 $('.gf1070, .gf1060, .gf1050ti, .mousekb, .mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
	 if ($('.mousekb, .mousekbmonitor, .monitor, .nope, .level-6').hasClass('display-block')) {
	 $('.gf1080ti').removeClass('selected-unit');}
	 $('.mousekb, .mousekbmonitor, .monitor, .nope, .level-5').toggleClass('display-block display-none'); 
	 $('.constructor-form, .level-6').addClass('display-none');
	 $('.constructor-form, .level-6').removeClass('display-block');
});

$('.mousekb').click(function()
{
     $('.mousekb').addClass('selected-unit');
	 if ($('.constructor-form').hasClass('display-block')) {
	 $('.mousekb').removeClass('selected-unit');}
	 $('.constructor-form, .level-6').toggleClass('display-block display-none'); 
	 $('.mousekbmonitor, .monitor, .nope, .level-5').removeClass('selected-unit');
});

$('.mousekbmonitor').click(function()
{
     $('.mousekbmonitor').addClass('selected-unit');
	 if ($('.constructor-form').hasClass('display-block')) {
	 $('.mousekbmonitor').removeClass('selected-unit');}
	 $('.constructor-form, .level-6').toggleClass('display-block display-none'); 
	 $('.mousekb, .monitor, .nope, .level-5').removeClass('selected-unit');
});

$('.monitor').click(function()
{
     $('.monitor').addClass('selected-unit');
	 if ($('.constructor-form').hasClass('display-block')) {
	 $('.monitor').removeClass('selected-unit');}
	 $('.constructor-form, .level-6').toggleClass('display-block display-none'); 
	 $('.mousekb, .mousekbmonitor, .nope, .level-5').removeClass('selected-unit');
});

$('.nope').click(function()
{
     $('.nope').addClass('selected-unit');
	 if ($('.constructor-form').hasClass('display-block')) {
	 $('.nope').removeClass('selected-unit');}
	 $('.constructor-form, .level-6').toggleClass('display-block display-none'); 
	 $('.mousekb, .mousekbmonitor, .monitor, .level-5').removeClass('selected-unit');
});




//////////////////////////////////////////////////////////// Slider
$(document).ready(function(){
	$(".slider").simpleSlider();
});
	




// WORKS

//$( ".content__esports-video-flex" ).click(function() {
//  $( ".content__esports-video-quote" ).toggle( "slow", function() {
//    // Animation complete.
//  });
//  $( "#totop" ).toggle( "slow", function() {
//    // Animation complete.
//  });
//});

//$('.list-toggle').click(function() {
//    var $listSort = $('.list-sort');
//    if ($listSort.attr('colspan')) {
//        $listSort.removeAttr('colspan');
//    } else {
//        $listSort.attr('colspan', 6);
//    }
//});



// WORK IN PROGRESS

//function(e){
//        $('.content__esports').fadeOut( "slow", function() {
//    // Animation complete.
//  });
//    }

//$('.content__esports-video-flex').toggle(
//    function(e){
//        $('.content__esports').show({"display": "block"}, 700);
//    },  
//);

// Gaming Submenu
//var toggler = $('.toggle');
//toggler.on('click', '.gaming-sub-menu-parent', function() {
//	$(this).find('.gaming-sub-menu__toggle').slideToggle(10);
//	$(this).toggleClass('bg-grey');
//	$('.gaming-sub-menu-parent > a > .icon-cheveron-down').toggleClass('red-font');
//});

//var abc = $('.content__esports-headline');
//abc.on('click', '.content__esports-video-flex', function() {
//	$(this).find('.content__esports-video-quote').slideToggle(10);
//});

//var abc = $('.content__esports-headline');
//abc.on('click', '.content__esports-video-flex', function() {
//	$(this).find('.content__esports-video-quote').toggle(
//	function(e) {
//		$('.content__esports-video-quote').show({'display': 'block'}, 500);
//	}
//	);
//});




