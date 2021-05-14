const numberOfCategories = document.querySelectorAll(.item);
if (numberOfCategories.length === 1) {
    console.log('В списке ${numberOfCategories} категория.');
}
else if (numberOfCategories.length === 2 || 3 || 4) {
    console.log('В списке ${numberOfCategories} категории.');
}
else { console.log('В списке ${numberOfCategories} категорий.') };

