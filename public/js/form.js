//form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

//form validation

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if(name == null){ //lodin page is open

}else{ //sign up page is open
    submitBtn.addEventListener('click', () => {
        fetch('/signup-user', {
            method: 'post',
            headers:new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email:email.value,
                password: password.value
            })
        })
        .then(res => res,json())
        .then(data => {

        })
    })
}