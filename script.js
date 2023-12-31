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
  displayItemAdded();
};

let deleteBook = (e) => {
  const parent = e.target.parentElement;
  parent.remove();
};

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

  const readLabel = document.createElement("label");
  readLabel.innerHTML = "Read";
  bookContainer.appendChild(readLabel);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = book.read;
  bookContainer.appendChild(checkBox);

  const deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.value = "Delete";
  deleteButton.addEventListener("click", deleteBook);
  bookContainer.appendChild(deleteButton);

  console.log("book", book, book.name);
});

const displayItemAdded = () => {
  const outputContainer = document.getElementById("outputContainer");

  const bookContainer = document.createElement("div");
  outputContainer.appendChild(bookContainer);
  bookContainer.classList = "bookContainer";

  const h5 = document.createElement("h5");
  const bookTitle = document.createTextNode(
    myLibrary[myLibrary.length - 1].name
  );
  h5.appendChild(bookTitle);
  bookContainer.appendChild(h5);

  const para1 = document.createElement("p");
  const bookAuthor = document.createTextNode(
    myLibrary[myLibrary.length - 1].author
  );
  para1.appendChild(bookAuthor);
  bookContainer.appendChild(para1);

  const para2 = document.createElement("p");
  const bookPages = document.createTextNode(
    myLibrary[myLibrary.length - 1].pages
  );
  para2.appendChild(bookPages);
  bookContainer.appendChild(para2);

  const readLabel = document.createElement("label");
  readLabel.innerHTML = "Read";
  bookContainer.appendChild(readLabel);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = myLibrary[myLibrary.length - 1].read;
  bookContainer.appendChild(checkBox);

  const deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.value = "Delete";
  deleteButton.addEventListener("click", deleteBook);
  bookContainer.appendChild(deleteButton);
};
