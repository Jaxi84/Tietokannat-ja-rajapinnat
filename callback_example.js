//***esimerkki***
setTimeout(doSomething,2000);
function doSomething(){
    console.log("Demonstrating the callbacks");
}

/* ***anonyyminä funktiona (anonymous function) - functiolla ei ole erillistä nimeä as doSomething ***
setTimeout(function() {
    console.log("Demonstrating the callbacks");
}, 2000);
*/

/* ***nuolifunktiona (arrow function) - ei tarvita ollenkaan funkitota/nimeä, riittää () => ***
setTimeout(() => {
    console.log("Demonstrating the callbacks");
}, 2000);
*/

console.log("The application is started");
/*
tulostaa teksin: The application is started
ja 2 sekunnin kuluttua kun timeri 2000 on kulunut: Demonstrating the callbacks
*/