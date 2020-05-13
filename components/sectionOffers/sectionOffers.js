document.querySelectorAll('.foto').forEach((btn) => {
    btn.addEventListener('click', () => {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: { y: '#specjalSmallPic', offsetY: 80, autoKill: false },
            ease: 'power3'
        });
    });
});