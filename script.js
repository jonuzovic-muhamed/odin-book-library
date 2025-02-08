const productsSection = document.getElementById('products-section');
const templateBookCard = document.getElementById('product-item-template');
const insertBookCard = document.getElementById('insert-book-card');
const modalDialog = document.getElementById('modal-dialog');
const modalForm = document.getElementById('modal-form');
const closeModalButton = document.getElementById('close-modal-button');

let bookCounter = 0;
const bookLibrary = [];

class Book {
  constructor(title, author, pages, hasBeenRead) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._hasBeenRead = hasBeenRead;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get pages() {
    return this._pages;
  }

  set pages(value) {
    this._pages = value;
  }

  get hasBeenRead() {
    return this._hasBeenRead;
  }

  set hasBeenRead(value) {
    this._hasBeenRead = value;
  }
}

function addBookToLibrary(title, author, pages, hasBeenRead) {
  let book = new Book(title, author, pages, hasBeenRead);
  bookLibrary.push(book);
}

function displayLibrary() {
  productsSection.replaceChildren();
  for (let book of bookLibrary) {
    let currentBookCard = templateBookCard.cloneNode(true);
    currentBookCard.id = `${bookCounter}`
    currentBookCard.children[1].textContent = book.title;
    currentBookCard.children[2].textContent = book.author;
    currentBookCard.children[3].textContent = book.pages;

    if (book.hasBeenRead) {
      currentBookCard.children[4].textContent = 'Has been read';
      currentBookCard.children[4].style.color = "lightgreen";
    } else {
      currentBookCard.children[4].textContent = 'Has not been read';
      currentBookCard.children[4].style.color = "red";
    }

    productsSection.appendChild(currentBookCard);
    bookCounter++;
  }
  productsSection.appendChild(insertBookCard);
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Moby Dick", "Herman Melville", 635, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, false);
addBookToLibrary("The Odyssey", "Homer", 352, true);
addBookToLibrary("Brave New World", "Aldous Huxley", 268, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 430, false);
addBookToLibrary("The Great Expectations", "Charles Dickens", 505, true);
addBookToLibrary("Anna Karenina", "Leo Tolstoy", 864, true);
addBookToLibrary("Catch-22", "Joseph Heller", 453, false);
addBookToLibrary("Frankenstein", "Mary Shelley", 280, true);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);
addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 254, false);
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 796, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 689, true);
addBookToLibrary("The Shining", "Stephen King", 447, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Odyssey", "Homer", 352, false);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 374, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, true);

displayLibrary();

productsSection.addEventListener('click', (event) => {

  if (event.target && event.target.classList.contains('close-card-button')) {
    const card = event.target.closest('.product-item');
    const cardId = card.id;
    bookLibrary.splice(cardId, 1);
    card.remove();
    let children = productsSection.childNodes;
    for(let i = 0;i <= bookLibrary.length;i++) {
      children[i].id = i;
    }
    productsSection.lastChild.id = 'insert-book-card';
  }

  if (event.target && event.target.classList.contains('product-item')) {
    const card = event.target.closest('.product-item');
    const cardId = card.id;

    if (bookLibrary[cardId].hasBeenRead === true) {
      bookLibrary[cardId].hasBeenRead = false;
      card.children[4].textContent = 'Has not been read'
      card.children[4].style.color = 'red';
    } else {
      bookLibrary[cardId].hasBeenRead = true;
      card.children[4].textContent = 'Has been read'
      card.children[4].style.color = 'lightgreen';
    }
  }

  if (event.target.id == 'insert-book-card') {
    modalDialog.showModal();
  }
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let hasBeenRead = event.target.read.value;

  if (hasBeenRead == 'yes') {
    hasBeenRead = true;
  } else {
    hasBeenRead = false;
  }

  let submittedBook = new Book(
    event.target.title.value,
    event.target.author.value,
    event.target.pages.value,
    hasBeenRead
  );

  bookLibrary.push(submittedBook);

  let currentBookCard = templateBookCard.cloneNode(true);
  currentBookCard.id = bookLibrary.length - 1;
  currentBookCard.children[1].textContent = submittedBook.title;
  currentBookCard.children[2].textContent = submittedBook.author;
  currentBookCard.children[3].textContent = submittedBook.pages;

  if (submittedBook.hasBeenRead) {
    currentBookCard.children[4].textContent = 'Has been read';
    currentBookCard.children[4].style.color = "lightgreen";
  } else {
    currentBookCard.children[4].textContent = 'Has not been read';
    currentBookCard.children[4].style.color = "red";
  }

  productsSection.appendChild(currentBookCard);
  productsSection.appendChild(insertBookCard);

  modalForm.reset();
  modalDialog.close();
});

closeModalButton.addEventListener('click', (event) => {
  modalForm.reset();
  modalDialog.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalForm.reset();
  }
})