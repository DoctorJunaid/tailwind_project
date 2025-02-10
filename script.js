function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('translate-x-full');
    menu.classList.toggle('translate-x-0');
    gsap.from('nav>ul>li', {
        y: -30,
        opacity: 0,
        duration: .3,
        ease: 'ease',
        stagger: 0.2,
    });
}
// // animation
gsap.from('#hero_text1,#hero_text2', {
    x:-200,
     opacity: 0, 
     duration: 1.5,
     ease: 'ease-in.Out',
    stagger : 1 ,
    });
gsap.from('.hero_img', {
    y: 200,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.inOut',
});


gsap.from('form', {
    x:-200,
     opacity: 0,
     duration: 1.5,
     ease: 'ease-in.Out',
    stagger : 0.5,
    
});
