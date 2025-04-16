// Show Categories -fetch

// Create LoadCategories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
loadCategories();

// // DisplayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach(element => {
        console.log(element);

        // create btn 
        const btn = document.createElement('button');
        btn.classList = "btn ";
        btn.innerText = element.category;//categories

        // add btn to category container
        categoryContainer.append(btn);
    });
} 
displayCategories()
