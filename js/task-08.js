const inputEl = document.querySelector('input');
const makeBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById('boxes');

makeBtnEl.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtnEl.addEventListener('click', clearAll);

function generateRandomColor() {
    const createRgb = () => Math.floor(Math.random() * 256);

    return `rgb(${createRgb()}, ${createRgb()}, ${createRgb()})`
};

function createBoxes(amount) {
    const initialSize = 30;
    const containerForNewBoxes = [];
    
    for (let i = 0; i < amount; i += 1) {
        const newSize = initialSize + i * 10;
        const newDiv = document.createElement('div');
        newDiv.style = `width: ${newSize}px; height: ${newSize}px; background-color: ${generateRandomColor()}`;
    
        containerForNewBoxes.push(newDiv);
    };
    boxesEl.append(...containerForNewBoxes);
}


function clearAll() {
    boxesEl.innerHTML = "";
}