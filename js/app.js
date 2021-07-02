console.log('hello');
let signup = document.querySelector('.signup');
let form = document.getElementsByClassName('form')[0];
let img = document.querySelector('.img-section');
let login = document.querySelector('.login');
let main = document.getElementsByTagName('main')[0];

signup.addEventListener('click', signupfunc);
login.addEventListener('click', loginfunc);


function signupfunc() {
    if (window.innerWidth > 868) {
        main.style.backgroundColor = '#686de0';
        form.classList.remove('form2');
        img.classList.remove('floatremove');
        if (form.className.includes('form1') && img.className.includes('float')) {
            form.classList.remove('form1');
            img.classList.remove('float');
        } else {
            form.classList.add('form1');
            img.classList.add('float');
        }
    } else {
        let form = document.getElementsByClassName('form');
        form[0].style.display = 'none';
        form[1].classList.remove('signup-form');

    }

}

function loginfunc() {
    if (window.innerWidth > 868) {
        main.style.backgroundColor = '#8d0cb4f1';
        form.classList.remove('form1');
        img.classList.remove('float');
        if (form.className.includes('form2') && img.className.includes('floatremove')) {
            form.classList.remove('form2');
            img.classList.remove('floatremove');
        } else {
            form.classList.add('form2');
            img.classList.add('floatremove');
        }
    } else {
        let form = document.getElementsByClassName('form');
        form[1].classList.add('signup-form');
        form[0].style.display = 'block';

    }
}