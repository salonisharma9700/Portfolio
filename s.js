ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-content,projects-content,contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

/*typed js*/
const typed = new Typed('.multiple-text',{
    strings:['Full Stack Developer','Software Developer','Data Scientist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop:true
});