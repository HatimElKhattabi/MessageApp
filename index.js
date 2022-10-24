const {hash} = window.location;

const message = atob(hash.replace('#',''));

if (message) {
    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message; 
}

document.querySelector('form').addEventListener('submit',event => {
    event.preventDefault();

    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    const input = document.querySelector('#message');

    const encrypted = btoa(input.value);

    const msg = document.querySelector('#link-input');
    msg.value = `${window.location}#${encrypted}`;
    msg.select();

    
});

