const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const productsList = ingredients.map(ingredient =>{
    const listOfIngredients = document.createElement('li');
    listOfIngredients.textContent = ingredient;

    return listOfIngredients;
})

listEl.append(...productsList);