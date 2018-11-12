document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const watchListItem = createWatchListItem(event.target);
  const watchList = document.querySelector('#watch-list');
  watchList.appendChild(watchListItem);

  event.target.reset();
}

const createwatchListItem = function (form) {
  const watchListItem = document.createElement('li');
  watchListItem.classList.add('watch-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  watchListItem.appendChild(title);

  const genre = document.createElement('h3');
  genre.textContent = form.genre.value;
  watchListItem.appendChild(genre);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  watchListItem.appendChild(category);

  return watchListItem;
}

const handleDeleteAllClick = function (event) {
  const watchList = document.querySelector('#watch-list');
  watchList.innerHTML = '';
}
