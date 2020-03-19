// var accItem = document.getElementsByClassName('accordionItem');
// var accHD = document.getElementsByClassName('accordionItemHeading');
// for (i = 0; i < accHD.length; i++) {
// 	accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
// 	var itemClass = this.parentNode.className;
// 	for (i = 0; i < accItem.length; i++) {
// 		accItem[i].className = 'accordionItem close';
// 	}
// 	if (itemClass == 'accordionItem close') {
// 		this.parentNode.className = 'accordionItem open';
// 	}
// }
// -----------------------------------------------------------------------------------------------------------
// var accItem = document.querySelector('.open-project-item');
// var accHD = document.querySelector('.project-item');

// for (i = 0; i < accHD.length; i++) {
// 	accHD[i].addEventListener('click', toggleItem, false);
// }

// function toggleItem() {
// 	var itemClass = document.querySelector('.project-item');
// 	for (i = 0; i < accItem.length; i++) {
// 		accItem[i].className = 'project-item';
// 	}
// 	if (itemClass == 'project-item') {
// 		this.parentNode.className = 'open-project-item';
// 	}
// }
// ------------------------------------------------------------------------------------------------------
const btn = document.querySelector('.project-item');
const hidden = document.querySelector('.open-project-item');

btn.addEventListener('click', () => {
	if (hidden.style.display === 'block') {
		hidden.style.display = 'none';
	} else {
		hidden.style.display = 'block';
	}
});
