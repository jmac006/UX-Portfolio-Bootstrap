$(".submitButton").click(function(e){
    e.preventDefault(); //prevents the site from scrolling back to the top when button is clicked
    console.log("user pressed submit");
    $('.alert').css("display","block");
});

const reveal = {
    origin: 'left',
    delay: 200,
    distance: '50px',
    easing: 'ease-in-out',
};
// ScrollReveal().reveal('.display-3');
// ScrollReveal().reveal('.card');


window.sr = ScrollReveal({ reset: true });
sr.reveal('.card', {origin: 'right', distance: '300px', duration: 1000});
