let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  read = false;
}

function addBookToLibrary() {
  let title = prompt("Enter book title: ");
  let author = prompt("Enter book author: ");
  let pages = prompt("Number of pages: ");
  let book = new Book(title,author,pages);
  myLibrary.push(book);
}