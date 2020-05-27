const slideList = [{
        img: 'images/sectionSlider/img1.jpg',
        text: 'balustrada-wewnętrzne'
    },
    {
        img: 'images/sectionSlider/img2.jpg',
        text: 'brama'
    },
    {
        img: 'images/sectionSlider/img3.jpg',
        text: 'ogrodzenie'
    }
];
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const time = 3000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let indexInterval = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval)
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time)
    }
}

window.addEventListener('keydown', keyChangeSlide)