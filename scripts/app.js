;(function($) {
	"use strict";

	$('.slider-main').slick({
		slidesToShow: 1,
		nextArrow: '<button class="next-main"></button>',
		prevArrow: '<button class="prev-main"></button>'
	});
	$('.slider-boards').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-boards-nav'
	});
	$('.slider-boards-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-boards',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
	});


	//counter slides
	$(".slider-main").on('afterChange', function(event, slick, currentSlide){
		$("#cp").text(currentSlide + 1);
	});

})(jQuery);

;(function($) {
	"use strict";

	$('.team-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: false,
		speed: 1000,
		nextArrow: '<button class="next"></button>',
		prevArrow: '<button class="prev"></button>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 0.5,
				slidesToScroll: 0.5,
				infinite: true,
			}
		},
		{
			breakpoint: 724,
			settings: {
				slidesToShow: 0.25,
				slidesToScroll: 0.25,
				infinite: true,
			}
		}
		]
	});

})(jQuery);



var map;
function initMap() {

	var markerBA = {lat: -32.831095, lng: 151.889819};

	map = new google.maps.Map(document.getElementById('map'), {
		center: markerBA,
		zoom: 11,
		disableDefaultUI: true,
		title: 'Surfers',
		styles: 
		[
		{
			"featureType": "administrative.locality",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#48ccf2"
			}
			]
		}
		]

	});
	
}

function initMap() {
	var uluru = {lat: -32.831095, lng: 151.889819};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: uluru
	});

	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Surfers</h1>'+
	'<div id="bodyContent">'+
	'<p>We love waves</p>'+
	'<p>Waiting you in Australia</p>'
	'</div>'+
	'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: {lat: -32.831095, lng: 151.889819},
		map: map,
		
		icon: {
			url: "img/icons8-color-50.png",
			scaledSize: new google.maps.Size(40, 40)
		}
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC-cDL1H-TK5ESfz1Z_kgUTq07k83I4_28&callback=initMap';
document.head.appendChild(googleMapsScript);

//tabs
;(function($) {
	$(function() {
		"use strict";
		jQuery('.tabs a').on('click', function (e) {
			e.preventDefault(); 
		});
		$("ul.tabs__caption").on("click", "li:not(.active)", function() {
			$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
		});
	});
})(jQuery);


//animate
var img = document.querySelector("#filter feTurbulence");
var frames = 0;
var rad = Math.PI / 360;
function AnimateBaseFrequency() {
	bfx = .16;
	bfy = .1;
	frames += 1;
	bfx += 0.01 * Math.cos(frames * rad);
	bfy -= 0.01 * Math.sin(frames * rad);
	bf = bfx.toString() + ' ' + bfy.toString();
	img.setAttributeNS(null, 'baseFrequency', bf);
	window.requestAnimationFrame(AnimateBaseFrequency);
}
window.requestAnimationFrame(AnimateBaseFrequency);


$(document).ready(function(){

	$(":checkbox").click(function(){

		if ($(this).is(':checked')) {
        //$(this).prop('checked',false);
        $('.menu-btn__line').css("background", "#fff");
    } else {
         //$(this).prop('checked',true);
         $('.menu-btn__line').css("background", "#000");
     }
 });
});

//scroll
$(document).ready(function(){

	$("#main-nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//json
var getPost = document.getElementById('get-btn');
;(function($) {
	"use strict";
	$(function(){
		if (getPost){
			getPost.onclick = function () {
				$.getJSON('https://valeriia4.github.io/json/info.json', function(data) {
					for(var i=0;i<data.users.length;i++){
						$('#updates-posts').append('<div class="updates-posts-item">' + '<img src="' + data.users[i].imageUrl + '">' + '<p class="updates-posts__title"><a href="#">' + data.users[i].name + '</a></p></div>');
					}
				});
			}
		}
	})

})(jQuery);

//validation

$('.ba-footer-form').on('submit', function(e) {
	e.preventDefault();

	let inputEmail = $('#contact-email');


	let validateEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
	

	if (!validateEmail.test(inputEmail.val())) {
		inputEmail.closest('.ba-footer-form').find('.ba-form-error').css('display', 'block')
	}

})