const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validationCheck);
inputEl.addEventListener('focus', onInputFocus);

const numberOfCharacters = Number(inputEl.getAttribute('data-length'));

function validationCheck(event) {
    if (event.currentTarget.value.length === numberOfCharacters) {
        inputEl.classList.add('valid');
    }
    else { inputEl.classList.add('invalid'); }
};

function onInputFocus() {
    inputEl.classList.remove('valid', 'invalid');
};