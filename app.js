//two functions 
//increment 
//for increment, you need a global variable count = 0
//you keep adding one, and show it on the html 
let count = 0;
let incrementEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
    count++;
    incrementEl.innerHTML = count;
}
function save() {
    let saveCount = count + " - ";
    saveEl.textContent += saveCount;
    incrementEl.textContent = 0;
    count = 0;
}


//save 
//you will need to get the count and add a dash to it 
// then change the text of the html in save 
//reset the count = 0, so it starts over 
