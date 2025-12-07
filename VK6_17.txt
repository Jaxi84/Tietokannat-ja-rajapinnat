const book = {
    bookArray: [
        { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
        { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
        { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
        { id_book: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
        { id_book: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934" }
    ],
    getAllBooks: function() {
        console.log("getAllBooks:");
        console.table(this.bookArray);
        console.log();
    },
    getOneBook: function(x) {
        const found = this.bookArray.find(row => row.id_book === x);
        console.log();
        console.log("getOneBook:");
        console.log(`Kirja ${x}:`); //lainausmerkkien sijasta käytetään `, jotta saadaan muutja upotettua
        //console.log("Kirja "+x);
        if (found) {
            console.log(found);
            console.log();
        } else {
            console.log("Ei kirjaa ID:llä " + x);
            console.log();
        }
    },
    addBook: function(id_book, name, author, isbn) {
        const ids = this.bookArray.map(book => book.id_book);
        const maxId = Math.max(...ids);
        const newId = maxId + 1;
        console.log(`Lisää kirja ID:llä: ${newId} ja nimellä: ${name}`);
    //    console.log(Lisää kirja ID:llä: " +newID+ " ja nimellä: " +name);
        this.bookArray.push({ id_book: newId, name, author, isbn });
    }
};
book.getAllBooks();
book.addBook("","Kvanttikilpajuoksu", "Tommi Tenkanen", "9789520470494");
book.getOneBook(6);
book.getAllBooks();
//console.table(book.getAllBooks());