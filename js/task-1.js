const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  const categoryTitle = category.querySelector('.title-main').textContent;
    const elementsCount = category.querySelectorAll('.main-list .list-item').length;
    
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});