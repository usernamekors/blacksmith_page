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
<<<<<<< HEAD
                y: '#section' + (index + 1),
                offsetY: 80
    
            }
=======
                y: topY,
                offsetY: 80,
                autoKill: true
            },
            ease: Power3.easeOut
>>>>>>> cabd15ef6f5ed908e307a6c2829b88284ed5b387
        });

        return false;
    });
});