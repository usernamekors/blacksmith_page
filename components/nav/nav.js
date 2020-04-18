$(function() {
    var wrapper = $('#main'),
        $menu = $('#menu'),
        $window = $(window);

    $menu.on('click', 'a', function() {
        var $this = $(this),
            href = $this.attr('href'),
            topY = $(href).offset().top;

        TweenMax.to($window, 1, {
            scrollTo: {
                y: topY,
                offsetY: 80,
                autoKill: true
            },
            ease: Power3.easeOut
        });

        return false;
    });
});

let btn = document.querySelector('.logo');
btn.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: '#home', offsetY: 50 } });
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const hidden = document.querySelector('ul');
    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
    });
    hidden.addEventListener('click', () => {
        hidden.style.opacity = '0.7';
    });
}
navSlide();