const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Кількість категорій:', categoryItems.length);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const subItems = item.querySelectorAll('ul li');

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${subItems.length}`);
});