const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(variable) {
  console.log(variable.name);
}

const book1 = new Book("book1", "qwrty", 103);

addBookToLibrary(book1);
