
; (function () {
	'use strict';

	var ckav = {},
		package_ver = 'v1.0',
		$document = $(document),
		$window = $(window),
		$html = $("html"),
		pageLoader = $('.page-loader'),

		userAgent = navigator.userAgent.toLowerCase(),
	  	isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
	  	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  	window.ckav = ckav;

	/* FORM CONFIGURE  
	------------------------------------*/
	ckav.config = {
		
		twitter: {
			consumer_key: 'YOUR_CONSUMER_KEY',
			consumer_secret: 'YOUR_CONSUMER_SECRET_KEY'
		},

		/*
		URL OF SUCCESS PAGE ON FORM SUBMIT
		*********************/
		success_url: "thankyou.html"
	}

	/* PAGE LOADER
	------------------------------------*/
	if (pageLoader > 0 && !isNovi) {
		$window.on('load', function () {
			pageLoader.fadeOut('slow');
			$window.trigger("resize");
		});
	} else {
		pageLoader.remove();
	};

	ckav.dmod = false;
	ckav.demo = function () { if (ckav.dmod) { return ckavNotice(); } else { return true; }; }

	$(function () {


	var $o = {};
	$o.r                = !ckav.demo ? false : ckav.demo();
	$o.tooltip          = $o.r ? $('[data-toggle="tooltip"]') : false;
	$o.pageLoader       = $('.page-loader').length > 0 && $o.r ? $(".page-loader") : false;
	$o.header           = $('.main-head').length > 0 && $o.r ? $('.main-head') : false;
	$o.menuwrp          = $('.menu-wrp').length > 0 && $o.r ? $('.menu-wrp') : false;
	$o.navlink          = $('.menu-wrp').find(".menu-item").length > 0 && $o.r ? $('.menu-wrp').find(".menu-item") : false;
	$o.fullwh           = $("[data-fullwh='y']").length > 0 && $o.r ? $("[data-fullwh='y']") : false;
	$o.fullh            = $("[data-fullh='y']").length > 0 && $o.r ? $("[data-fullh='y']") : false;
	$o.bgimg            = $("[data-bg]").length > 0 && $o.r ? $("[data-bg]") : false;
	$o.slidebg          = $("[data-slide-bg]").length > 0 && $o.r ? $("[data-slide-bg]") : false;
	$o.section       	= $('#page > section').length > 0 && $o.r ? $("#page > section") : false;
	$o.hoverclass       = $("[data-hover-class]").length > 0 && $o.r ? $("[data-hover-class]") : false;
	$o.bgcolor          = $("[data-bgcolor]").length > 0 && $o.r ? $("[data-bgcolor]") : false;
	$o.txtcolor         = $("[data-txtcolor]").length > 0 && $o.r ? $("[data-txtcolor]") : false;
	$o.gradient         = $("[data-gradient]").length > 0 && $o.r ? $("[data-gradient]") : false;
	$o.rgradient        = $("[data-rgradient]").length > 0 && $o.r ? $("[data-rgradient]") : false;
	$o.videopop         = $(".video-popup").length > 0 && $o.r ? $(".video-popup") : false;
	$o.setpop           = $(".set-popup").length > 0 && $o.r ? $(".set-popup") : false;
	$o.countbox         = $(".count-box").length > 0 && $o.r ? $(".count-box") : false;
	$o.tabwidget        = $(".tab-widget").length > 0 && $o.r ? $(".tab-widget") : false;
	$o.tabsauto         = $(".tabs-auto").length > 0 && $o.r ? $(".tabs-auto") : false;
	$o.carouselwidget   = $(".carousel-widget").length > 0 && $o.r ? $(".carousel-widget") : false;
	$o.accordionwidget  = $(".accordion-widget").length > 0 && $o.r ? $(".accordion-widget") : false;
	$o.swiperwidget     = $(".swiper-widget").length > 0 && $o.r ? $(".swiper-widget") : false;
	$o.swipergallery    = $(".swiper-gallery").length > 0 && $o.r ? $(".swiper-gallery") : false;
	$o.videobg          = $(".videobg").length > 0 && $o.r ? $(".videobg") : false;
	$o.videwidget       = $(".vide-widget").length > 0 && $o.r ? $(".vide-widget") : false;
	$o.othersection1    = $(".other-section-1").length > 0 && $o.r ? $(".other-section-1") : false;
	$o.popgallerywidget = $(".popgallery-widget").length > 0 && $o.r ? $(".popgallery-widget") : false;
	$o.bgslider         = $("[data-bgslider]").length > 0 && $o.r ? $("[data-bgslider]") : false;
	$o.countdownwidget  = $(".countdown-widget").length > 0 && $o.r ? $(".countdown-widget") : false;
	$o.filterwidget     = $(".filter-widget").length > 0 && $o.r ? $(".filter-widget") : false;
	$o.gmapwidget       = $(".gmap-widget").length > 0 && $o.r ? $(".gmap-widget") : false;
	$o.socialsection    = $(".social-section").length > 0 && $o.r ? $(".social-section") : false;
	$o.instagramwidget  = $(".instagram-widget").length > 0 && $o.r ? $(".instagram-widget") : false;
	$o.twitterwidget    = $(".twitter-widget").length > 0 && $o.r ? $(".twitter-widget") : false;
	$o.formwidget       = $(".form-widget").length > 0 && $o.r ? $(".form-widget") : false;
	$o.jparallax        = $("[data-jparallax='y']").length > 0 && $o.r ? $("[data-jparallax='y']") : false;
	//$o.stellar          = $("[data-stellar]").length > 0 && $o.r ? $("[data-stellar]") : false;
	//$o.parallax         = $("[data-parallax-img]").length > 0 && $o.r ? $("[data-parallax-img]") : false;
	$o.elanimate        = $("[data-animate-in]").length > 0 && $o.r ? $("[data-animate-in]") : false;
	$o.bLazy            = $(".b-lazy").length > 0 && $o.r ? $(".b-lazy") : false;
	$o.masonry 			= $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : false;

	$o.styleid          = $("[data-style-id]").length > 0 && $o.r ? $("[data-style-id]") : false;
	$o.searchpop        = $("#popup-search").length > 0 && $o.r ? $("#popup-search") : false;

	ckav.bgimg = function(obj) {
		$(obj).css({ backgroundImage: "url(" + $(obj).attr("data-bg") + ")" });
	}
	
	if ($o.r) {

