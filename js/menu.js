jQuery(document).ready(function($) {

   //Mobile Menu Button hide on JS
    $('.main-header-nav').addClass('js-menu-holder');
    $('.js-menu-holder').addClass('is-hidden');
    $('.mobile-nav-expand a').click(function(){

        if (!$('.js-menu-holder').hasClass('is-open')){
            $('.js-menu-holder').addClass('is-open');
            $('.js-menu-holder').slideDown();
            $('.mobile-nav-expand a span').removeClass('fa-bars');
            $('.mobile-nav-expand a span').addClass('fa-times');
        } else {
            $('.js-menu-holder').slideUp();
            $('.js-menu-holder').removeClass('is-open');
            $('.mobile-nav-expand a span').addClass('fa-bars');
            $('.mobile-nav-expand a span').removeClass('fa-times');
        }
    }); //end mobile menu toggle

//Menu accordion toggles
    $('.menu > .menu-item > .sub-menu-holder').addClass('js-menu'); //override CSS Fallback
    $('.menu-item-link').click(function(){

        $activeBlock = $(this).closest("li");
        $activeBlock.addClass('is-active');

        if ($activeBlock.hasClass('is-open')){
            $activeBlock.children('.menu-item > .sub-menu-holder.js-menu').slideUp();
            $activeBlock.removeClass('is-open');
            $activeBlock.removeClass('is-active');
        } else {
            $activeBlock.children('.menu-item > .sub-menu-holder.js-menu').slideDown('slow');
            $activeBlock.addClass('is-open');
            $(".menu-item > .sub-menu-holder.js-menu").not($activeBlock.children('.menu-item > .sub-menu-holder.js-menu')).slideUp();
            $(".menu-item").not($activeBlock).removeClass('is-open');
             $(".menu-item").not($activeBlock).removeClass('is-active');
        }
    }); //end menu accordion toggles

}); //End jQuery wrapper
