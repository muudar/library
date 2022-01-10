let myLibrary = [];

let book1 = new Book("The Hobbit", "J.R.R", 286);
let book2 = new Book ("Atomic Habits", "James Clear",319 );
myLibrary.push(book1);
myLibrary.push(book2);

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
  addBookToPage(book, myLibrary.length-1);
}

function displayLibrary(){
    const bottomPage = document.querySelector(".bottom-page");
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        addBookToPage(book, i);
    }
}


function addBookToPage(book, index){
    const bottomPage = document.querySelector(".bottom-page");
    const card = document.createElement("div");
    card.classList.add("exampleCard");
    const cardText = document.createElement("div");
    cardText.classList.add("cardText");
    const title = document.createElement("p");
    title.textContent = "Name: " + book.title;
    const author = document.createElement("p");
    author.textContent = "Author: "+ book.author;
    const pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;
    const readText = document.createElement("p");
    if(book.read == true)
        readText.textContent = "Read before!";
    else
        readText.textContent = "Not read yet!";
    cardText.appendChild(title);
    cardText.appendChild(author);
    cardText.appendChild(pages);
    cardText.appendChild(readText);
    card.appendChild(cardText);
    bottomPage.appendChild(card);
    const buttons = document.createElement("div");
    buttons.classList.add("bookButtons");
    const readButton = document.createElement("button");
    readButton.textContent = "Read";
    readButton.classList.add("readButton");
    readButton.classList.add("cardButton");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.classList.add("cardButton");
    readButton.dataset.index = index;
    readButton.onclick = function(e){
        const index = e.target.dataset.index;
        let book = myLibrary[index];
        if(book.read == true){
            book.read = false;
            readText.textContent = "Not read yet!";
            readButton.textContent = "Read";
        }
        else{
            book.read = true;
            readText.textContent = "Read before!";
            readButton.textContent = "Unread";
        }
    }
    buttons.appendChild(readButton);
    buttons.appendChild(deleteButton);
    deleteButton.onclick = function(e){
        const index = e.target.dataset.index;
        myLibrary.splice(index,1);
        bottomPage.innerHTML = "";
        displayLibrary();
    }
    card.appendChild(buttons);
    bottomPage.appendChild(card);
    deleteButton.dataset.index = index;
}

displayLibrary();