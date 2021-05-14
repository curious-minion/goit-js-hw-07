const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);


categoriesEl.forEach (
    category => {
    const title = category.querySelector('h2').textContent;
    console.log(`Категория: ${title}`);

    const numberOfElements = category.querySelectorAll(`li`).length;
    console.log(`Количество элементов: ${numberOfElements}`);
});



