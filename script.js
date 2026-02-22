//your JS code here. If required.
let btn = document.querySelector('.btn')
let p = document.querySelector('p')

btn.addEventListener('click',()=>{
	let h1 = document.createElement('h1')
	h1.innerText = "Entered Metaverse"
	p.remove()
	document.body.prepend(h1)
})