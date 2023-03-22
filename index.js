const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

function genPassAll() {
     for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * characters.length)
            pass1El.textContent += characters[i]
        }
     for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * characters.length)
            pass2El.textContent += characters[i]
        }
}
function genPassNoSymb() {
    for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * 61)
            pass1El.textContent += characters[i]
        }
    for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * 61)
            pass2El.textContent += characters[i]
        }
}
function genPassNoNum() {
    for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * charactersNoNum.length)
            pass1El.textContent += charactersNoNum[i]
        }
    for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * charactersNoNum.length)
            pass2El.textContent += charactersNoNum[i]
        }
}
function genPassNoNumbSymb() {
    for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * 51)
            pass1El.textContent += characters[i]
        }
    for (i = 1; i < 16; i ++) {
            let i = Math.floor(Math.random() * 51)
            pass2El.textContent += characters[i]
        }
}
genButton.addEventListener("click", function() {
    pass1El.textContent = ""
    pass2El.textContent = ""
    
    let checkSymb = document.getElementById("symb").checked
    let checkNum = document.getElementById("num").checked
    
    if (checkSymb === true && checkNum === true){
    genPassAll()
    } else if (checkSymb === false && checkNum === true) {
    genPassNoSymb()    
    } else if (checkSymb === false && checkNum === false) {
    genPassNoNumbSymb()    
    } else if (checkSymb === true && checkNum === false) {
    genPassNoNum()    
    }
})
        
pass1El.addEventListener("click", function (){
   document.execCommand("copy");
})

pass1El.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass1El.textContent);
    console.log(event.clipboardData.getData("text"))
  }
})

pass2El.addEventListener("click", function (){
   document.execCommand("copy");
})

pass2El.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass2El.textContent);
    console.log(event.clipboardData.getData("text"))
  }
})   

