import gsap from "gsap"

const btnMenuOpen = document.querySelector('#menu-open')
const btnMenuClose = document.querySelector('#menu-close')
const menu = document.querySelector('#navigation')

const liens = document.querySelectorAll('.link');

let mouseX
let mouseY

window.addEventListener('mousemove',(e) =>{
    mouseX = e.clientX
    mouseY = e.clientY

    gsap.to('#mouse_follow',{
        x: mouseX,
        y: mouseY,
        duration:0.5
    })
})

liens.forEach((lien) => {
    lien.addEventListener('mouseenter', (e) => {
      const lienSurvole = e.target;
      const autresLiens = [...liens].filter((l) => l !== lienSurvole);
      gsap.to(autresLiens, { color: 'gray' });
    });
  
    lien.addEventListener('mouseleave', () => {
      gsap.to(liens, { color: 'black' });
    });
  });

gsap.set(menu,{
    x:-1000
})
gsap.set('#wrapper',{
    opacity:0,
    zIndex:0
})

const tl = gsap.timeline()

btnMenuOpen.addEventListener('click', () => {
    
    gsap.to("#wrapper", {
        opacity:1,
        zIndex: 40,
        duration:0.3
    })
    gsap.to(menu, {
        x:0,
        duration:0.5,
        ease:'ease-out'
    })
})
btnMenuClose.addEventListener('click', () => {
    tl.to(menu, {
        x:-1000,
        duration:0.5,
        ease:'ease-out'
    }).to("#wrapper", {
        opacity:0,
        zIndex: 0,
        duration:0.3
    })
})

// Bouton plus
const plus1 = document.querySelector('#plus1')
const plus2 = document.querySelector('#plus2')
const plus3 = document.querySelector('#plus3')
const plus4 = document.querySelector('#plus4')


// plus 1
plus1.addEventListener('click', () => {
    
    tl.to('#box-img1',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox1, #infoBox2, .reseaux1, .reseaux2', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

// plus 2
plus2.addEventListener('click', () => {
    
    tl.to('#box-img2',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox3, #infoBox4, .reseaux3, .reseaux4', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

// plus 3
plus3.addEventListener('click', () => {
    
    tl.to('#box-img3',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox5, #infoBox6, .reseaux5, .reseaux6', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})
// plus 4
plus4.addEventListener('click', () => {
    
    tl.to('#box-img4',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox7, #infoBox8, .reseaux7, .reseaux8', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

// Card
const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')

// card1
card1.addEventListener('mouseenter',() => {
    gsap.set('#mouse_follow',{
        display: 'none'
    })
    tl.to('#box-img1',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox1, #infoBox2, .reseaux1, .reseaux2', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

card1.addEventListener('mouseleave',() => {
    
    gsap.set('#mouse_follow',{
        display: 'block'
    })
    tl.to('#infoBox1, #infoBox2, .reseaux1, .reseaux2', {
        opacity:0,
        y : '4rem',
        stagger : {amount:0.2},    
    }).to('#box-img1',{
        height: '100%',
        width: '100%',
    })
})

// card2
card2.addEventListener('mouseenter',() => {
    gsap.set('#mouse_follow',{
        display: 'none'
    })
    tl.to('#box-img2',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox3, #infoBox4, .reseaux3, .reseaux4', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

card2.addEventListener('mouseleave',() => {
    
    gsap.set('#mouse_follow',{
        display: 'block'
    })
    tl.to('#infoBox3, #infoBox4, .reseaux3, .reseaux4', {
        opacity:0,
        y : '4rem',
        stagger : {amount:0.2},    
    }).to('#box-img2',{
        height: '100%',
        width: '100%',
    })
})

// card 3
card3.addEventListener('mouseenter',() => {
    gsap.set('#mouse_follow',{
        display: 'none'
    })
    tl.to('#box-img3',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox5, #infoBox6, .reseaux5, .reseaux6', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

card3.addEventListener('mouseleave',() => {
    
    gsap.set('#mouse_follow',{
        display: 'block'
    })
    tl.to('#infoBox5, #infoBox6, .reseaux5, .reseaux6', {
        opacity:0,
        y : '4rem',
        stagger : {amount:0.2},    
    }).to('#box-img3',{
        height: '100%',
        width: '100%',
    })
})
// card 4
card4.addEventListener('mouseenter',() => {
    gsap.set('#mouse_follow',{
        display: 'none'
    })
    tl.to('#box-img4',{
        height: '4rem',
        width: '4rem',
    }).to('#infoBox7, #infoBox8, .reseaux7, .reseaux8', {
        opacity:1,
        y : 0,
        stagger : {amount:0.2},    
    })
})

card4.addEventListener('mouseleave',() => {
    
    gsap.set('#mouse_follow',{
        display: 'block'
    })
    tl.to('#infoBox7, #infoBox8, .reseaux7, .reseaux8', {
        opacity:0,
        y : '4rem',
        stagger : {amount:0.2},    
    }).to('#box-img4',{
        height: '100%',
        width: '100%',
    })
})

