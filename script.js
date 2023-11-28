const form = document.getElementById("bookForm");

let newBookName = document.getElementById("newBookNameContainer");
let newBookAuthor = document.getElementById("newBookAuthorContainer");
let newBookPages = document.getElementById("newBookPagesContainer");
let newBookRead = document.getElementById("newBookReadContainer");

let myLibrary = [
  {
    name: "Lord of The Rings: The Fellowship of The Ring",
    author: "J.R.R Tolkein",
    pages: 432,
    read: true,
  },
  {
    name: "Lord of The Rings: The Two Towers",
    author: "J.R.R Tolkein",
    pages: 448,
    read: true,
  },
  {
    name: "Lord of The Rings: The Return of The King",
    author: "J.R.R Tolkein",
    pages: 432,
    read: true,
  },
];

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
    const outputContainer = document.getElementById("outputContainer");

    const bookContainer = document.createElement("div");
    outputContainer.appendChild(bookContainer);
    bookContainer.classList = "bookContainer";

    const h5 = document.createElement("h5");
    const bookTitle = document.createTextNode(book.name);
    h5.appendChild(bookTitle);
    bookContainer.appendChild(h5);

    const para1 = document.createElement("p");
    const bookAuthor = document.createTextNode(book.author);
    para1.appendChild(bookAuthor);
    bookContainer.appendChild(para1);

    const para2 = document.createElement("p");
    const bookPages = document.createTextNode(book.pages);
    para2.appendChild(bookPages);
    bookContainer.appendChild(para2);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = book.read;
    bookContainer.appendChild(checkBox);

    console.log("book", book, book.name);
  });
};
