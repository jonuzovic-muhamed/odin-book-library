const productsSection = document.getElementById('products-section');
const templateBookCard = document.getElementById('product-item-template');
const insertBookCard = document.getElementById('insert-book-card');

let bookCounter = 0;
const bookLibrary = [];


function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
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
    currentBookCard.children[1].innerHTML = book.title;
    currentBookCard.children[2].innerHTML = book.author;
    currentBookCard.children[3].innerHTML = book.pages;
    currentBookCard.children[4].innerHTML = book.hasBeenRead ? 'Has been read' : 'Has not been read';
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
  }

})