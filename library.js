const library = [];
// created an empty array for storing all the books. 

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
// Creating the new Book adding- 
function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    // calling new book in the constructor BOOK function. 
    library.push(newBook);
    // pushing this to array.

}

// // Checking in the console new books if added (in console)- 
// addBookToLibrary("Make time", "Jake znapp", "200");
// addBookToLibrary("Deep work", "cal Newport", "400");
// console.log(library);


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
            `;
        display.appendChild(bookcard);
    });
}

// // Checking in the console new books is displayed on the web page.  
// addBookToLibrary("Make time", "Jake znapp", "200");
// addBookToLibrary("Deep work", "Cal Newport", "400");
// displayBooks();
// //to print the books in the page. 

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

    // Adding the new book to tha library. 
    addBookToLibrary(title, author, pages);

    //refresh the display by showing the output.
    displayBooks();
    document.getElementById("book-details").close();
    document.querySelector(".bookForm").reset();
}); 
