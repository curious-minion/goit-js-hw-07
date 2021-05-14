const fontSizeControlEl = document.querySelector('#font-size-control');
const textInputEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', function() {
  textInputEl.style.fontSize = this.value + "px";
});


// fontSizeControlEl.addEventListener('input', slider);

// function slider(event) {
//     textInputEl.style.fontSize = event.currentTarget.value + "px";
// }




