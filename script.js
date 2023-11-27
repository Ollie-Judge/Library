const form = document.getElementById("bookForm");

let name = document.getElementById("name").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").value;

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

form.onsubmit = function addBookToLibrary(e) {
  e.preventDefault();

  myLibrary.push(new Book(name, this.author, this.pages, this.read));
  console.log(myLibrary);
};
