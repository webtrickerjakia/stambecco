
(function($){
	$(function(){



        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navshown");
            /*$(".nav-wrap").slideToggle(500)*/
        });

        // $(".main-nav ul > li").find("ul").parent("li").addClass("show");
        // $(".main-nav ul > li").find("ul").parent("li").addClass("has-sub-nav");
        // $(".main-nav ul > li.has-sub-nav > a").bind('click', 'touchend', function (e) {
        //     e.preventDefault();
        //     $(".main-nav ul > li").find("> ul:visible").slideUp()
        //     $(".main-nav ul > li").removeClass("active")
        //     if ($(this).parent().find("> ul:visible").length) {
        //         $(this).removeClass("active")
        //         $(this).parent().find("> ul").slideUp()
        //     } else {
        //         $(this).addClass("active")
        //         $(this).parent().find("> ul").slideDown()
        //     }
        // })


     
        if ($('.tiramisu-slider').length) {
                $('.tiramisu-slider').slick({
                    arrows: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 1500,
                    navigation: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    prevArrow: '.tiramisu-slider-btn .arrow-prev',
                    nextArrow: '.tiramisu-slider-btn .arrow-next',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true,
                                speed: 1500,
                                swipe: true,
                                arrows: false,

                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: true,
                                speed: 1500,
                                swipe: true,
                                arrows: false,
                                dots: false,

                            }
                        },

                    ]
                })
        }

     
        if ($('.amaro-slider').length) {
                $('.amaro-slider').slick({
                    arrows: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 1500,
                    navigation: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: true,
                    prevArrow: '.amaro-slider-btn .arrow-prev',
                    nextArrow: '.amaro-slider-btn .arrow-next',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true,
                                speed: 1500,
                                swipe: true,
                                arrows: false,

                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: true,
                                speed: 1500,
                                swipe: true,
                                arrows: false,
                                dots: false,

                            }
                        },

                    ]
                })
        }


        if ($('.news-feed-inner').length) {
            $('.news-feed-inner').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 9999999,
                        settings: "unslick"
                        },

                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.news-feed-inner').slick('resize');
            });
        }




	$('.nav-left-bar a[href^="#"], .product-item a[href^="#"], .hero-btn-wrap a[href^="#"], .widget-item ul li a[href^="#"]').not('.modal-trigger').on('click',function (e) {
	    e.preventDefault();
        $('body').removeClass('navshown')
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
    
    $('.modal-trigger').click(function (e) {
        e.preventDefault();
        $('.product-modal-wrap').hide();
        $('.blank-bg-spacer').fadeIn()
        var activeTab = $(this).attr('href');
        $(activeTab).slideDown();
        return false;
    });
    $('.modal-cross, .blank-bg-spacer').click(function (e) {
        e.preventDefault();
        $('.blank-bg-spacer').fadeOut()
        $('.product-modal-wrap').slideUp();
    });

	})// End ready function.
   

 
    
    

	

})(jQuery)

