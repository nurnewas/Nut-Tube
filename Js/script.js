// Create LoadCategories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// load Videos - fetch
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

// // DisplayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((element) => {
    console.log(element);

    // create btn
    const btn = document.createElement("button");
    btn.classList = "btn ";
    btn.innerText = element.category; //categories

    // add btn to category container
    categoryContainer.append(btn);
  });
};
// displayVideos
// const cardDemo=
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video");
  videos.forEach((element) => {
    console.log(video);
    // createCard
    const card = document.createElement("div");
    card.className  =  "card card-compact"
    card.innerHTML = `
  <figure>
    <img
      src=${element.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
`;
videoContainer.appendChild(card);
  });
};
loadCategories();
loadVideos();
