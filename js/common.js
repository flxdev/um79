$(document).ready(function() {

	// compare
	$('.compare').on('click', function(event){
		event.stopPropagation();
	});

	//compare scroll
	(function(){
		var table_area = $('.compare-table-container'),
			scroller = table_area.find('.compare-table-scroller__content'),
			table = table_area.find('.compare-table__tbody').width(),
			container = $('.compare-table-container'),
			tableScroll = table_area.find('#compare-table'),
			hidden = table_area.find('.compare-table-bar__scroll');

		scroller.css('width', table - 249);

		scroller.parent().on('scroll', function(e){
			container.add(hidden).scrollLeft($(e.target).scrollLeft());
		});
		tableScroll.parent().on('scroll', function(e){
			scroller.parent().add(hidden).scrollLeft($(e.target).scrollLeft());
		});

		$('.compare-table__cell_duplicate').each(function(){
			var _ = $(this),
				parent = _.parent(),
				pH = parent.innerHeight();

			//_.css('height', pH);
		});
		var this_ = $('.compare-table-container'),
			head = this_.find('.compare-table-scroller__scroll'),
			footer = this_.find('.product-table-scroller')
			widthSheet 	= this_.width();
			if($('html').hasClass('ff')) {
				head.width(widthSheet - 247);
			} else {
				head.width(widthSheet - 248);
			}
			

		if(head.width() >= scroller.width()) {
			$('.compare-table-scroller').hide();
			table_area.addClass('hidden');
		} else {
			$('.compare-table-scroller').show();
			table_area.removeClass('hidden');
		}

		$(window).resize(function() {
			var this_ 		= $('.compare-table-container'),
				head 		= this_.find('.compare-table-scroller__scroll'),
				footer = this_.find('.product-table-scroller')
				widthSheet 	= this_.width();
			
			if($('html').hasClass('ff')) {
				head.width(widthSheet - 247);
			} else {
				head.width(widthSheet - 248);
			}

			if(head.width() >= scroller.width()) {
			$('.compare-table-scroller').hide();
			table_area.addClass('hidden');
		} else {
			$('.compare-table-scroller').show();
			table_area.removeClass('hidden');
		}
		});
	})();

	var vi2 = "";
	vi2 += '<video id="vi2" autoplay="autoplay" poster="MYPOSTER.jpg" loop muted>';
	vi2 += 	'<source src="video/tnt24.ogv" type="video/ogg">';
	vi2 += 	'<source src="video/tnt24.mp4" type="video/mp4">';
	vi2 += 	'<source src="video/tnt24.webm" type="video/webm">';
	vi2 +=  '</video>';
	var vi3 = "";
	vi3 += '<video id="vi3" autoplay="autoplay" poster="MYPOSTER.jpg" loop muted>';
	vi3 += 	'<source src="video/tnt24.ogv" type="video/ogg">';
	vi3 += 	'<source src="video/tnt24.mp4" type="video/mp4">';
	vi3 += 	'<source src="video/tnt24.webm" type="video/webm">';
	vi3 +=  '</video>';
	//$("#videoDiv").html(html);

	// $('#someVideo').attr('src', url);
	// $('#someVideo')[0].load();
	function loadvideo(idd,vi){
		$('[data-video='+idd+']').append(vi);
	}
	if($('#header__medias').length){
		$('#header__medias').cycle({
		    speed: 600,
		    timeout: 0,
		    manualSpeed: 400,
		    slides: '.header__media',
		    pager: '#pagi'
		});
		$('#objs').cycle({
		    speed: 600,
		    timeout: 0,
		    manualSpeed: 400,
		    slides: '.obj'
		});
		$('#vi1').get(0).play();
		$( '#header__medias' ).on( 'cycle-before', function( event, opts ) {
		    // your event handler code here
		    // argument opts is the slideshow's option hash
		    console.log(opts);
		    $('#objs').cycle('goto', opts.nextSlide);
		    if(opts.nextSlide==1){
		    	loadvideo('vi2',vi2);
		    	$('#vi2').get(0).play();
		    }
		    if(opts.nextSlide==2){
		    	loadvideo('vi3',vi3);
		    	$('#vi3').get(0).play();
		    }
		    if(opts.nextSlide==0){
		    	$('#vi1').get(0).play();
		    }
		});
	}

/*
	$('.sorting__link').click(function(event) {
		event.preventDefault();
		if($(this).hasClass("is-active")){
			$(this).toggleClass('is-rotated');
		}
		else{
			$('.sorting__link').removeClass('is-active');
			$(this).addClass('is-active');
		}
	});
*/
	$('.js-nextstep').click(function(event) {
		event.preventDefault();
		$('.toggleme').toggle();
	});
	$('.popup__close,.overlay').click(function(event) {
		event.preventDefault();
		$('.popup').removeClass('is-visible');
		$('.overlay').fadeOut();
	});
/*
	$('.popup__menu a').click(function(event) {
		event.preventDefault();
		$('.popup__menu a').removeClass('is-selected-popup__link');
		$(this).addClass('is-selected-popup__link');
	});
*/
	$('.js-popup').click(function(event) {
		event.preventDefault();
		idd = $(this).data('popup');
		$('#'+idd).addClass('is-visible');
		$('.overlay').fadeIn();
	});

	$('body').addClass('a');
	// $('.news__link-year').click(function(event) {
	// 	event.preventDefault();
 //        idd = $(this).attr('href')
 //        $('html, body').animate({
 //            scrollTop: $(idd+'').offset().top -30
 //        }, 500);
 //        $('.news__link-year').removeClass('is-selected__year');
 //        $(this).addClass('is-selected__year');
	// });
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.tabs__mark').click(function(event) {
		event.preventDefault();
		$('.tabs__mark').removeClass('is-active__mark');
		$(this).addClass('is-active__mark');
		$('.bb').hide();
		idd = $(this).data('toshow');
		$('#'+idd).show();
	});
	$(".catalog4-2-left,.tofix").sticky({topSpacing:10});

	if($('.pg__menu').length){

		m = $( ".pg__menu li" ).index( $('.pg__menu li.is-active'));
		if(m==-1){m=0;$( ".pg__menu li:nth-child(1)" ).addClass('is-active');}
		function gotomenu(n){
			$('.pg__menuline')
				.css('left',$('.pg__menu li').eq(n).position().left)
				.css('width',$('.pg__menu li').eq(n).children('a').width());
		}
		gotomenu(m);


		$('.pg__menu li').hover(function() {
			gotomenu($( ".pg__menu li" ).index( $(this) ));
		}, function() {
			gotomenu($( ".pg__menu li" ).index( $('.pg__menu li.is-active')));
		});
	}


	//$(document).on("scroll", onScroll);

	//smoothscroll
	$('.tofix a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    $(document).off("scroll");

	    $('.news__link-year').each(function () {
	        $(this).removeClass('is-active');
	    })
	    $(this).addClass('is-active');

	    var target = this.hash,
	        menu = target,
	    	$target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top+2
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	        //$(document).on("scroll", onScroll);
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.news__link-year').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.news__link-year').removeClass("is-active");
	            currLink.addClass("is-active");
	        }
	        else{
	            currLink.removeClass("is-active");
	        }
	    });
	}
	function ajaxpostshow(urlres, datares, wherecontent){
		$.ajax({
			type: "POST",
			url: urlres,
			data: datares,
			dataType: "html",
			success: function(fillter){
				$(wherecontent).html(fillter);
			}
		});
	}
	function ajax_init(){
		// $(".formsubmit").on("click", function(){
		// 	var formsubscrube = $(this).parents("form").serialize(),
		// 		target = $(this).data('target'),
		// 		block = $(this).data('block');
		// 	formsubscrube = formsubscrube + '&action=ajax';
		// 	ajaxpostshow(target, formsubscrube, block);
		// 	return false;
		// });
		$('.popup__menu a').click(function(event) {
			event.preventDefault();
			$('.popup__menu a').removeClass('is-selected-popup__link');
			$(this).addClass('is-selected-popup__link');
			var zakaz = $(this).data('id');
			$('#zakaz').val(zakaz);
			zakaz = '/includes/zakaz' + zakaz + '.php';
			ajaxpostshow(zakaz, zakaz, '.popup__content1');
		});
	}
	ajax_init();

	function ajaxSubmit(form){
		var formsubscrube = $(form).serialize(),
			target = $(form).find('.formsubmit').data('target'),
			block = $(form).find('.formsubmit').data('block');
		formsubscrube = formsubscrube + '&action=ajax';
		ajaxpostshow(target, formsubscrube, block);
		return false;
	}



	//validation
	(function(){
		var form_validate = $('.validation');
		if (form_validate.length) {
			form_validate.each(function () {
				var form_this = $(this);
				$.validate({
					form : form_this,
					validateOnBlur : true,
					borderColorOnError : false,
					scrollToTopOnError : false,
					onSuccess : function() {
						if(form_this.hasClass('ajax_form')) {
							target = form_this.find('input[type="submit"]').data('target');
							$.ajax({
								url:target,
								data:form_this.serialize(),
								method: 'post',
								dataType: 'html',
								success: function(otvet) {
									form_this.html(otvet)
								}
							})
							if( form_this.hasClass('cbk') && typeof yaCounter26526957 != 'undefined' ){
								yaCounter26526957.reachGoal('perezvonite');
								ga('send', 'event', 'zvonok', 'zakazat');
							}
							if( form_this.hasClass('wts') && typeof yaCounter26526957 != 'undefined' ){
								yaCounter26526957.reachGoal('pismo2');
								ga('send', 'event', 'forma', 'otpravit');
							}
							return(false);
						}
						if(form_this.hasClass('ajax_form_order')) {
							ajaxSubmit(form_this);
							if(typeof yaCounter26526957 != 'undefined'){
								yaCounter26526957.reachGoal('otpravit');
								ga('send', 'event', 'tehnika', 'zakazat');
							}
							return(false);
						}
					}
				});
			});
		}
	})();

});



