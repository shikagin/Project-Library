const myLibrary = [];

const bookSection = document.querySelector(".bookSection");

const book1 = new Book("Miserable", "Vector H", "500", "true", "images/images (1).jpeg");
const book2 = new Book("Wind of The south", "A S", "500", "true", "images/images (2).jpeg");
const book3 = new Book("The Hobbit", "Vector T", "500", "false", "images/images (3).jpeg");
const book4 = new Book("Harry Potter", "W R", "500", "false", "images/images.jpeg");
const book5 = new Book("Harry Potter", "W R", "500", "false", "images/images.jpeg");


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book4);
displayBooks();

function Book(titel, author, pages, read, bookCover) {

    this.titel = titel;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookCover = bookCover;

}

function addBookToLibrary(book) {

    myLibrary.push(book);

}

function displayBooks() {


    for (let i = 0; i < myLibrary.length; i++) {


        const imag = document.createElement('img');
        const name = document.createElement('h2');
        const author = document.createElement('h4');
        const page = document.createElement('h4');
        const check = document.createElement('input');

        const element = document.createElement("div");
        check.type = "checkbox";

        element.classList.add("element");

        name.textContent = myLibrary[i].titel;
        author.textContent = myLibrary[i].author;
        page.textContent = myLibrary[i].pages;

        if (myLibrary[i].read === "true") {

            check.checked = true;

        } else {
            check.checked = false;
        }
        imag.src = myLibrary[i].bookCover;

        element.appendChild(imag);
        element.appendChild(name);
        element.appendChild(author);
        element.appendChild(page);
        element.appendChild(check);



        bookSection.appendChild(element);
    }

}