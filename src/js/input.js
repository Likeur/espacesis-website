
//   document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide',{
//         perPage: 4,
//         type    : 'loop',
//         autoplay: 'play',
//         perMove: 1,
//         arrows: false,
//         pagination: false,
//         interval : 2000,
//         breakpoints : {
//             400 : {
//                 perPage: 1,
//             }
//         }
//     } );
//     splide.mount();
//   } );

const btnMenu = document.querySelector('#menubtn')
const barUn = document.querySelector('#bar-1')
const barDeux = document.querySelector('#bar-2')
const menu = document.querySelector('#menu')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('scale-0')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('absolute')
    barDeux.classList.toggle('mt-2')
    barDeux.classList.toggle('-rotate-45')
})