const Library = require("./Library")

describe("The Library", () => {
    test("should be able to contain books", () => {
        const lib = new Library()
        expect(lib.listBooks()).toEqual([]);
    });

    test("should be able to add books to it's list", () => {
        const lib = new Library()
        lib.addBook([{ title: "The Things They Carried", isCheckedOut: false }])
        expect(lib.listBooks()).toEqual([{ title: "The Things They Carried", isCheckedOut: false }])
    })

    test("should be able to issue books to patrons", () => {
        const lib = new Library()
        lib.addBook([{ title: "The Things They Carried", isCheckedOut: false }])
        lib.issueBook("The Things They Carried")
        expect(lib.listBooks()).toEqual([{ title: "The Things They Carried", isCheckedOut: true }])
    })

    test("should be able to accept returned books from patrons", () => {
        const lib = new Library()
        lib.addBook([{ title: "The Things They Carried", isCheckedOut: false }])
        lib.issueBook("The Things They Carried")
        expect(lib.returnBook("The Things They Carried")).toEqual({ title: "The Things They Carried", isCheckedOut: false })
    })

    test("should be able to display an accurate book list at all times", () => {
        const lib = new Library()
        lib.addBook([{ title: "The Things They Carried", isCheckedOut: false }, { title: "The Lord of The Rings", isCheckedOut: true }])
        lib.issueBook("The Things They Carried")
        lib.returnBook("The Lord of The Rings")
        lib.issueBook("The Things They Carried")
        expect(lib.listBooks()).toEqual([{ title: "The Things They Carried", isCheckedOut: true }, { title: "The Lord of The Rings", isCheckedOut: false }])
    })
});