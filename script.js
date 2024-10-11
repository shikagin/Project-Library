const myLibrary = [];

const bookSection = document.querySelector(".bookSection");
const submit = document.querySelector(".btn");
const submit2 = document.querySelector(".btn2");
const titel2 = document.querySelector(".titel2");

const titel = document.querySelector(".titel");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");

const cover = "images/images.jpeg";

const book1 = new Book("SOUL1", "OLIVIA WILSON", "500", "Finished", cover);
const book2 = new Book("SOUL2", "OLIVIA WILSON", "500","Finished", cover);
const book3 = new Book("SOUL3", "OLIVIA WILSON", "500", "Finished", cover);
const book4 = new Book("SOUL4", "OLIVIA WILSON", "500", "Not Finished", cover);
const book5 = new Book("SOUL5", "OLIVIA WILSON", "500", "Not Finished", cover);


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book4);

displayBooks();

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function openForm2() {
    document.getElementById("myForm2").style.display = "block";
  }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
 }
 function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
 }

submit.addEventListener("click",(event)=>{

    event.preventDefault();

    const bookn = new Book (titel.value ,author.value,pages.value,read.value,cover);

    addBookToLibrary(bookn);
    displayBooks();

});

submit2.addEventListener("click",(event)=>{

    event.preventDefault();

    removeBookFromLibrary(titel2.value);

    displayBooks();

});

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
function removeBookFromLibrary(titel){
    console.log("titel");
    
    for(let i=0 ; i< myLibrary.length ; i++){
 
        console.log(i);
        if (titel === myLibrary[i].titel){

            myLibrary.splice(i,1);

            console.log("heree");
            break;

        }
    }
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

        if (myLibrary[i].read === "Finished") {

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





