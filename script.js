const form = document.getElementById("bookForm");
const outputDiv = document.getElementById("outputContainer");

form.addEventListener("submit", createLibraryItem);

function createLibraryItem(e) {
  e.preventDefault();
  const myFormData = new FormData(e.target);
  console.log(myFormData);

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);

  let newEntry = document.createElement("div");
  newEntry.className = "newEntry";
  newEntry.innerText = formDataObj.name;
  outputDiv.appendChild(newEntry);
}

const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(variable) {
  myLibrary.push(variable);
  console.log(myLibrary);
}

const book1 = new Book("book1", "qwrty", 103);

addBookToLibrary(book1);
