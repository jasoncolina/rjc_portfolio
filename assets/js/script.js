var toggle = document.querySelector('.toggle');
var nav = document.querySelector('.nav-collapse');

toggle.addEventListener('click', function(){
    if(nav.classList.contains('nav-show-transition')){
        fade();
        setTimeout(show,300);
    }else{
        show();
        setTimeout(fade);
    }
});


function show(){
    nav.classList.toggle('nav-show');
}

function fade(){
    nav.classList.toggle('nav-show-transition');
}