jQuery(window).load(function () {
    $('.pre-load').stop().animate({opacity:0}, 500, function(){$('.pre-load').css({'display':'none'});});
    $('body').css({'overflow-y':'auto'});
    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });
    function Animate_box() {
        var scroll_var = $(this).scrollTop();
        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;
            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }
});
$(document).ready(function() {
    $('.open-notification').click(function (){
        $(this).parents('.notification-box').toggleClass('notification-opened');
    });
    $('.main-body').click(function (){
        $('.notification-box').removeClass('notification-opened');
    });
    $('.close-div-btn').click(function (){
        $(this).parents('.close-div').remove();
    });
    notf_height();
    $(window).resize(function (){
        $('.mCustomScrollbar').mCustomScrollbar("update");
        notf_height();
    });
    function notf_height() {
        $('.notification-body').css({'max-height': $(window).height() - $(window).height()/2.5});
        if($(window).width() > 767){
            $('.dropdown').hover(function(){
                $(this).addClass('open');
            }, function(){
                $(this).removeClass('open');
            });
        }else {
            $('.dropdown').hover(function(){
                return;
            }, function(){
                return;
            });
        }
    }
    $('.image-uploader').change(function (event){
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'" alt="..."><button class="close">&times;</button></div>');
        removeUplodedImage();
    });
    removeUplodedImage();
    function removeUplodedImage() {
        $('.uploaded-block .close').click(function (){
            $(this).parents('.uploaded-block').remove();
        });
    }
    $('.auto-complete').slideUp(0);
    $('#search_box').focus(function () {
        $('.auto-complete').slideDown();
    }).blur(function () {
        $('.auto-complete').slideUp();
    });
    if($('#owl_news').length){
        $('#owl_news').owlCarousel({
            items: 1,
            loop: true,
            margin: 15,
            rtl: true,
            nav: true
        });
    }
    if($('#owl_users').length){
        $('#owl_users').owlCarousel({
            responsive:{0:{items:1}, 550:{items:2}, 992:{items:3}, 1200:{items:4}},
            rtl: true,
            loop: true,
            margin: 20,
            nav: true
        });
        $('.owl-nav .owl-prev').html('<i class="fa fa-angle-left"></i>');
        $('.owl-nav .owl-next').html('<i class="fa fa-angle-right"></i>');
    }
    $('.news-block').slideUp(0);
    $('.open-close').click(function (){
        if($('#news_check').is(':checked')){
            $('.news-block').slideDown();
        }else {
            $('.news-block').slideUp();
        }
    });
    $('#payment .radio-holder').click(function (){
        var radio_value = $(this).find('input[type="radio"]').val();
        if($(this).find('input[type="radio"]').is(':checked')){
            $('.payment-content').removeClass('active');
            $('#' + radio_value).addClass('active');
        }
    });
    $('#search_btn').click(function (){
        $('#to_close').toggleClass('to-open');
    });
    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    });
    if($('.chosen-select').length) {
        $(".chosen-select").selectpicker({liveSearch: true});
    }
    $('.tooltip-holder').tooltip();
});