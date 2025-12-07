//1.
const bookArray = [
    { 
        id_book: 1, 
        name: "Everything You Ever Wanted to Know", 
        author: "Upton", 
        isbn: "082305649x" 
    },
    { 
        id_book: 2, 
        name: "Photography", 
        author: "Vilppu", 
        isbn: "205711499" 
    },
    { 
        id_book: 3, 
        name: "Drawing Manual Vilppu", 
        author: "Zelanshi", 
        isbn: "1892053039" 
    },
    { 
        id_book: 4, 
        name: "TBA", 
        author: "Zelanshi", 
        isbn: "0534613932" 
    },
    { 
        id_book: 5, 
        name: "Shaping Space", 
        author: "Speight", 
        isbn: "0534613934" 
    }
];

//2.
console.log("Luodun taulun tietotyyppi:");
console.log(typeof bookArray);
//3.
console.log("Tulosta konsolille koko bookArrayn sisältö:")
console.log(bookArray);
console.log("tai sama tauluna:");
console.table(bookArray);
console.log();
//4.
console.log("Tulosta konsolille bookArrayn ensimmäinen rivi");
console.log(bookArray[0]);
console.log("tai sama tauluna:");
console.table(bookArray[0]);
console.log();
//5.
console.log("Tulosta konsolille ensimmäisen kirjan nimi");
console.log(bookArray[0].name);
console.log();
//6.
console.log("Tulosta konsolille arrayn rivien määrä");
console.log(bookArray.length);
console.log();
//7.
console.log("Tulosta konsolille kaikkien kirjojen nimet: ");
console.log("- forEach -loopilla:");
bookArray.forEach(row => {console.log(row.name)});
console.log("- tai sama - for -loopilla:");
for (let i = 0; i < bookArray.length; i++) {console.log(bookArray[i].name);}
console.log("- tai sama - for of -loopilla:");
for (const book of bookArray) {console.log(book.name);}
console.log("- tai sama map -funktiolla:");
bookArray.map(book => console.log(book.name));
console.log("- tai luodana table ja katotaan siitä nimet:");
console.table(bookArray, ['name']);