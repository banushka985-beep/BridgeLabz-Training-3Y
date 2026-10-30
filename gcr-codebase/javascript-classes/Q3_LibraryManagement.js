// Book class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued === false) {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        } else {
            console.log(this.title + " is already issued.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully.");
    }
}

let book1 = new Book("JavaScript", "John", "101");
let book2 = new Book("Java", "James", "102");
let book3 = new Book("Python", "Smith", "103");

let books = [book1, book2, book3];

console.log("Available Books:");

books.forEach(function(book) {
    if (book.isIssued === false) {
        console.log(book.title + " - " + book.ISBN);
    }
});

let searchISBN = "102";

let foundBook = books.find(function(book) {
    return book.ISBN === searchISBN;
});

if (foundBook) {
    foundBook.issueBook();
} else {
    console.log("Book not found.");
}