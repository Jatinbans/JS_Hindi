// Immediately Invoked Function Expression (IIFE)
// jo function ek dum se call ho jaye
/*global scope ke pollution se dikkat hoti hai kyi bar to jo us scope ke 
variable hai ya jo declaration hai ohnu httane ke liye we use IIFE*/

(function chai(){
    console.log(`DB Connected`);
})();

// ( () => {
//     console.log("DB Connected two");
// })()

( (name) => {
    console.log(`DB Connected two ${name}`);
})("jatin")