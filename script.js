function toggleMenu() {
    
    const menu = document.getElementById('mobileMenu');
    const classList = menu.classList;
    
    const isOpen = classList.contains('translate-x-full');
    classList.remove(isOpen ? 'translate-x-full' : 'translate-x-0');
    classList.add(isOpen ? 'translate-x-0' : 'translate-x-full');
    
    const navItems = document.querySelectorAll('nav > ul > li');
    
    gsap.killTweensOf(navItems); 
    
    gsap.fromTo(navItems, 
        {
            y: -30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out", 
            stagger: 0.1, 
            overwrite: true 
        }
    );
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

gsap.from('.logo,#desktop>li', {
    y:-200,
     opacity: 0,
     duration: 1.5,
     ease: 'ease-in.Out',
    stagger : .3,
});
