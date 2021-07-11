
let button = document.getElementById('button');
body = document.getElementById('body',);

button.addEventListener('click', function(){
    body.classList.toggle('body-dark');
    body.classList.remove('body');
});
