const library = [];
// created an empty array for storing all the books. 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); //creating unique id for books. 
}

// method to toggle book status- 
Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

// Creating the new Book adding- 
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    // calling new book in the constructor BOOK function. 
    library.push(newBook);
    // pushing this to array.

}



//  to show on the page
function displayBooks() {
    const display = document.getElementById("libraryDisplay");
    display.innerHTML = "";
    // clearing the container

    library.forEach((book) => {
        const bookcard = document.createElement("div");
        bookcard.classList.add("book-card");
        // created a division for each book. 

        bookcard.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Status: ${book.read ? 'Read' : 'Unread'}</p>
                <button class = "toggle-btn"  data-id="${book.id}"> Toggle status </button> 

            `;
        display.appendChild(bookcard);
    });
}


const form = document.querySelector(".bookForm");
const dialog = document.getElementById("book-details");

// Add book button on the page. 
document.getElementById("addbookbutton").addEventListener("click", () => {
    document.getElementById("book-details").showModal();
});

document.getElementById("cancel").addEventListener("click", () => {
    document.getElementById("book-details").close();
});

document.querySelector(".bookForm").addEventListener("submit", (e) => {

    e.preventDefault() //it will prevent default page load. 

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name= "read"]:checked').value === "true";

    // Adding the new book to tha library. 
    addBookToLibrary(title, author, pages, read);

    //refresh the display by showing the output.
    displayBooks();
    document.getElementById("book-details").close();
    document.querySelector(".bookForm").reset();

}); 
