let current = 1;

const btnRight = document.getElementById('hero-btn-right')
const btnLeft = document.getElementById('hero-btn-left')

const hamburger = document.getElementById('hamburger')
const navbar = document.querySelector('.navbar')
const logo = document.getElementById('logo')
const close = document.getElementById('close')
const background = document.getElementById('background')
const navlist = document.getElementById('ul')

const h = [
	'',
	'Discover innovative ways to decorate',
 	'We are available all across the globe',
 	'Manufactured with the best materials'
]

const p = [
	'',
	'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
	'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
	'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
]

const heading = document.getElementById('hero-content-h1')
const paragraph = document.getElementById('hero-content-p')

const slideRight = () => {
	if (current < 3) {
		let imageCurrent = document.getElementById(`hero-image-${current}`)
		let imageNext = document.getElementById(`hero-image-${current + 1}`)
		current++
		heading.innerText = `${h[current]}`
		paragraph.innerText = `${p[current]}`
		imageNext.style.display = 'block';
		imageNext.style.animation = 'fade 1s'
		imageCurrent.style.display = 'none'
	} else {
		let imageCurrent = document.getElementById(`hero-image-${current}`)
		let imageNext = document.getElementById('hero-image-1')
		current = 1;
		heading.innerText = `${h[current]}`
		paragraph.innerText = `${p[current]}`
		imageNext.style.display = 'block';
		imageNext.style.animation = 'fade 1s'
		imageCurrent.style.display = 'none'
	}
}

const slideLeft = () => {
	if (current > 1) {
		let imageCurrent = document.getElementById(`hero-image-${current}`)
		let imageNext = document.getElementById(`hero-image-${current - 1}`)
		current--
		heading.innerText = `${h[current]}`
		paragraph.innerText = `${p[current]}`
		imageNext.style.display = 'block';
		imageNext.style.animation = 'fade 1s'
		imageCurrent.style.display = 'none'
	} else {
		let imageCurrent = document.getElementById(`hero-image-${current}`)
		let imageNext = document.getElementById('hero-image-3')
		current = 3;
		heading.innerText = `${h[current]}`
		paragraph.innerText = `${p[current]}`
		imageNext.style.display = 'block';
		imageNext.style.animation = 'fade 1s'
		imageCurrent.style.display = 'none'
	}
}

const openMenu = () => {
	hamburger.style.display = 'none'
	logo.style.display = 'none'
	background.style.display = 'block'
	close.style.display = 'block'
	navbar.style.backgroundColor = 'white'
	navlist.style.display = 'flex'
}

const closeMenu = () => {
	hamburger.style.display = 'block'
	logo.style.display = 'block'
	background.style.display = 'none'
	close.style.display = 'none'
	navbar.style.background = 'none'
	navlist.style.display = 'none'
}

hamburger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)

btnRight.addEventListener('click', slideRight)
btnLeft.addEventListener('click', slideLeft)
