//npm isntall prompt-sync jos ei toimi
const prompt = require('prompt-sync')();

console.log("--- Valitse: ---");
console.log("Syötä numero, jos haluat vertailla lukuja.");
console.log("Syötä kirjain, jos haluat tutkia onko sana palindromi.");

const valinta = prompt("Valintasi: ");
if (!isNaN(parseFloat(valinta))) {
    console.log("\nHyvä verrataan lukuja:");

    let num1=parseFloat(prompt("Anna ensimmäinen numero:") );
    let num2=parseFloat(prompt("Anna toinen numero:") );
    num2=parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Numeroita sanoin!");
    } else {
            if ((num1 < num2)) {
                console.log("2. numero " +num2+ " on suurempi kuin 1. numero " +num1);
            } else if ((num1 > num2)) {
                console.log("1. numero " +num1+ " on suurempi kuin 2. numero " +num2);
            } else {
                console.log("Numerot ovat samat: " +num1+ " = " +num2);
            }
    }
} else {
    console.log("\nHienoa että olet kiinnostunut palindromeista!");

    let sana = prompt("Mitä sanaa haluat tutkia? ").toLowerCase();
    let nurinpain = sana.split('').reverse().join('');

    if (sana === nurinpain) {
        console.log("KYLLÄ! '" +sana+ "' on palindromi!");
    } else {
        console.log(`Nope, "${sana}" ei ole palindromi, vaan se on takaperin: "${nurinpain}".`);
    }
}