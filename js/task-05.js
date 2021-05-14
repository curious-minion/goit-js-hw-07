const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const initialOutputValue = 'незнакомец';
inputEl.addEventListener('input', onOutputChangeGreeting);


// function onOutputChangeGreeting(event) {
    
//     outputEl.textContent = event.currentTarget.value;
// }



function onOutputChangeGreeting(event) {
    if (event.currentTarget.value.length > 0) {
        outputEl.textContent = event.currentTarget.value;
    }
    else { outputEl.textContent = `${initialOutputValue}`;}
};