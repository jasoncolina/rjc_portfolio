var toggle = document.querySelector('.toggle');
var navItems = document.querySelector('.nav-collapse');
var nav = document.querySelector('nav');
var prevScrollpos = window.pageYOffset;

toggle.addEventListener('click', function(){
    if(navItems.classList.contains('nav-show-transition')){
        fade();
        setTimeout(show,300);
    }else{
        show();
        setTimeout(fade);
    }
});


function show(){
    navItems.classList.toggle('nav-show');
}

function fade(){
    navItems.classList.toggle('nav-show-transition');
}

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
