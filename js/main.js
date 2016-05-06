$(document).ready(function(){
    $('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });
	$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true,
	  pager: false,
	  auto: true
	});
    $('.animate-block, .step-wrap').on('inview', function(event, isInView) {
        if(isInView && $(this).hasClass('animate-block')) {
            $('.anim-block_1').animate({
                opacity: 1
            },800, function(){
                $('.anim-block_2').animate({
                    opacity: 1
                },800, function(){
                    $('.anim-block_3').animate({
                        opacity: 1
                    },800, function(){
                        $('.anim-block_4').animate({
                            opacity: 1
                        },800);
                    });
                });
            });
        }
        if(isInView && $(this).hasClass('step-wrap')) {
            $('.step-first').animate({
                opacity: 1
            },800, function(){
                $('.step-second').animate({
                    opacity: 1
                },800, function(){
                    $('.step-third').animate({
                        opacity: 1
                    },800, function(){
                        $('.step-fourth').animate({
                            opacity: 1
                        },800);
                    });
                });
            });
        }
    });

});