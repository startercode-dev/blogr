import $ from 'jquery';

$(function () {
    const navMenu = ['product', 'company', 'connect'];

    $('.nav .dropdown').on('click', (e) => {
        $('.dropdown > img').removeClass('flip');
        $('.dropdown-content').addClass('hidden');
        navMenu.forEach((el) => {
            if (e.target.dataset.nav === el) {
                $(`.content-${el}`).removeClass('hidden');
                $(`.content-${el}`).siblings('img').addClass('flip');
            }
        });
    });

    $('.hero-section, main').on('click', () => {
        $('.dropdown-content').addClass('hidden');
        $('.dropdown > img').removeClass('flip');
    });

    $('.icon-burger, .icon-close').on('click', () => {
        if ($('.mobile-nav .menu_wrapper').hasClass('hidden')) {
            $('.mobile-nav .menu_wrapper, .icon-close').removeClass('hidden');
            $('.icon-burger').addClass('hidden');
        } else {
            $('.mobile-nav .menu_wrapper, .icon-close').addClass('hidden');
            $('.icon-burger').removeClass('hidden');
        }
    });

    $('.mobile-nav .dropdown').on('click', (e) => {
        $(`.dropdown-content-mobile`).addClass('hidden');
        $('.dropdown-wrapper img').removeClass('flip');
        navMenu.forEach((el) => {
            if (e.target.dataset.nav === el) {
                $(`.mobile-${el}`).removeClass('hidden');
                $(`.mobile-arrow-${el}`).addClass('flip');
            }
        });
    });
});
