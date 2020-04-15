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

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => {
    if (btn1.style.display === 'block') {
        btn2.style.display = 'none';
    } else if ((btn1.style.display = 'none')) {
        btn2.style.display = 'block';
    }
});

btn2.addEventListener('click', () => {
    if (btn2.style.display === 'none') {
        btn1.style.display = 'block';
    } else if ((btn2.style.display = 'none')) {
        btn1.style.display = 'block';
    }
});