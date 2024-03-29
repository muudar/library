let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  read = false;
}

const error = document.querySelector(".error");
const title = document.querySelector("#title");

title.addEventListener("input", (event) =>{
    console.log(title.validity);
    if(title.validity.valueMissing){
        error.textContent = "Blank value is not okay!";
    }
    else if(title.validity.tooShort){
        error.textContent = "Book title must be between 3 and 20 characters";
    }
    else{
        error.textContent = ""
    }
})


window.addEventListener("load", (event) =>{
    console.log(title.validity);
    if(title.validity.valueMissing){
        error.textContent = "Blank value is not okay!";
    }
    else if(title.validity.tooShort){
        error.textContent = "Book title must be between 3 and 20 characters";
    }
    else if(title.validity.tooLong){
        error.textContent = "Book title must be between 3 and 20 characters";
    }
    else{
        error.textContent = ""
    }
})




function addBookToLibrary() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    const close = document.querySelector(".close");
    close.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    const submitBtn = document.querySelector(".submitBtn");
    // submitBtn.onclick = function(e){
    //     modal.style.display = "none";
    //     e.preventDefault(); // Prevents refresh when closing modal box
    //     const titleInput = document.querySelector("#title");
    //     let title = titleInput.value;
    //     const authorInput = document.querySelector("#author");
    //     let author = authorInput.value;
    //     const pagesInput = document.querySelector("#pages");
    //     let pages = pagesInput.value;
    //     let book = new Book(title,author,pages);
    //     myLibrary.push(book);
    //     addBookToPage(book, myLibrary.length-1);
    // }
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