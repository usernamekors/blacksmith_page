document.querySelectorAll('.foto').forEach((btn) => {
    btn.addEventListener('click', () => {
        gsap.to(window, {
            duration: 2.5,
            scrollTo: { y: '#specjalSmallPic', offsetY: 80, autoKill: false },
            ease: 'bounce'
        });
    });
});