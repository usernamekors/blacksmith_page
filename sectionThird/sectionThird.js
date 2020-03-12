let btn = document.querySelector('.movement');
let textOne = document.querySelector('.textOne');

// let btn = document.querySelectorAll('.movement');
// let textOne = document.querySelectorAll('.textOne');

btn.addEventListener('click', () => {
	if (textOne.style.display === 'block') {
		textOne.style.display = 'none';
	} else {
		textOne.style.display = 'block';
	}
});
