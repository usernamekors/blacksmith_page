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
    gsap.to(window, { duration: 2, scrollTo: { y: '#home', offsetY: 50 } });
});