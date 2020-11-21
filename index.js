const nav = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const listItems = document.querySelectorAll('li');

nav.addEventListener('click',()=>{
	nav.classList.toggle('opened');
	navLinks.classList.toggle('open');
	listItems.forEach(item => {
		item.classList.toggle('fade');
	})
})