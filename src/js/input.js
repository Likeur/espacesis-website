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