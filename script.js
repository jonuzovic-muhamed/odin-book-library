const bookLibrary = [];

function Book(title, author, pages, rating) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.rating = rating;
}

function addBookToLibrary(title, author, pages, hasBeenRead) {
  let book = new Book(title, author, pages, hasBeenRead);
  bookLibrary.push(book);
}

function displayLibrary() {
  for (let book of bookLibrary) {
    // TODO - Implement how to display the book on Web Page
    book.info();
  }
}

// TODO - Implement button even listener for saving a book by the end-user.