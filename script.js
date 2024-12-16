const bookLibrary = [];

function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;

  this.info = function() {
    return this.title + ' by ' + 
            this.author + ', ' +
            this.pages + ' pages,' +
            (this.hasBeenRead === true ? ' has been read' : ' not read yet')
  };
}

function addBookToLibrary(title, author, pages, hasBeenRead) {
  let book = new Book(title, author, pages, hasBeenRead);
  library.push(book);
}