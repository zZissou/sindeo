
var scrolled = 0;

// $(document).ready(function(){
//   $('.photos').slick({
//     setting-name: setting-value
//   });
// });

// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

// $('.technology').on('click', function () {
// 	$('.techno').css('opacity', '1');
// });

$('.jobs_departments button').on('click', function() {
	$('div[id$="jobs"]').hide();
	var section = $(this).attr('data-dept');

	var sectionId = $('#' + section + '_jobs');
	sectionId.show();

	// $('body').scrollTo('#product_jobs');

	$('body').animate({
          scrollTop: sectionId.offset().top
    }, 1000);
});

var stickyNavOffset = $('.our_culture').offset().top;

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance from the top of the page to the nav is: ' + stickyNavOffset);
	console.log('The distance scrolled is: ' + distanceScrolled);

	// Code to stick nav to top
	if (distanceScrolled > stickyNavOffset) {
		$('nav').addClass('navbar-hidden');
	} else {
		$('nav').removeClass('navbar-hidden');
	}
});

// setInterval(function () {

// });