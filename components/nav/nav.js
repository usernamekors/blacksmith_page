document.querySelectorAll('nav ul li').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#section' + (index + 1),
                offsetY: 80
            }
        });
    });
});