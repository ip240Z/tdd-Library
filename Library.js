class Library {
    constructor() {
        this.books = []
    }

    listBooks() {
        return this.books
    }

    addBook(book) {
        this.books.push(...book)
    }

    issueBook(targetBook) {
        let target = this.books.find(book => book.title === targetBook)
        if(!target) {
            return "Sorry, the library does not have that book"
        };
        if(target.isCheckedOut === false ) {
            target.isCheckedOut = true
            return this.listBooks()
        } else {
            return "Sorry, that book is already checked out"
        }
    }

    returnBook(targetBook) {
        let target = this.books.find(book => book.title === targetBook)
        if(!target) {
            return "Please make sure book title is correct and is from our library"
        }
        if(target.isCheckedOut === true) {
            target.isCheckedOut = false
            return target
        } else {
            return "This book is already present in our system"
        }
    }

}

module.exports = Library 
