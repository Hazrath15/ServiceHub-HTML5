/***************************************************
==================== JS INDEX ======================
****************************************************
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// mobile menu 
	var stMenuWrap = $('.mobile-menu-active > ul').clone();
	var stSideMenu = $('.offcanvas-menu nav');
	stSideMenu.append(stMenuWrap);
	if ($(stSideMenu).find('.submenu, .mega-menu').length != 0) {
		$(stSideMenu).find('.submenu, .mega-menu').parent().append
			('<button class="menu-close"><i class="fa-solid fa-circle-arrow-right"></i></button>');
	}
	var sideMenuList =
		$('.offcanvas-menu nav > ul > li button.menu-close, .offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.submenu, .mega-menu').slideDown();
		} else {
			$(this).siblings('.submenu, .mega-menu').slideUp();
			$(this).parent().removeClass('active');
		}
	});

	// offcanvas
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	// // 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 04. search form
	$(".search-click").on("click", function () {
		$(".header-input-toggle,.input-body-overlay").addClass("active");
	});

	$(".input-body-overlay").on("click", function () {
		$(".header-input-toggle,.input-body-overlay").removeClass("active");
	});
	$(".input-body-overlay").on("click", function () {
		$(".header-input-toggle,.input-body-overlay").removeClass("active");
	});
	////////////////////////////////////////////////////
	// header-sticky
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	//  Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	//  Wow Js
	new WOW().init();

	////////////////////////////////////////////////////



})(jQuery);