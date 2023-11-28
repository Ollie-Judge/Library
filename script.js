const form = document.getElementById("bookForm");

let newBookName = document.getElementById("newBookNameContainer");
let newBookAuthor = document.getElementById("newBookAuthorContainer");
let newBookPages = document.getElementById("newBookPagesContainer");
let newBookRead = document.getElementById("newBookReadContainer");

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

form.onsubmit = function addBookToLibrary(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  myLibrary.push(new Book(name, author, pages, read));
  console.log(myLibrary);
  outputOfUserInputBooks();
};

let outputOfUserInputBooks = () => {
  myLibrary.forEach((book) => {
    const h5 = document.createElement("h5");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    const bookTitle = document.createTextNode(book.name);
    h5.appendChild(bookTitle);

    const bookAuthor = document.createTextNode(book.author);
    para1.appendChild(bookAuthor);

    const bookPages = document.createTextNode(book.pages);
    para2.appendChild(bookPages);

    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = book.read;

    document.getElementById("newBookNameContainer").appendChild(h5);
    document.getElementById("newBookAuthorContainer").appendChild(para1);
    document.getElementById("newBookPagesContainer").appendChild(para2);
    document.getElementById("newBookReadContainer").appendChild(checkBox);
    console.log("book", book, book.name);
  });
};
