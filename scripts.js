var characters = 0;
var count = false;
var character = '';
const alphabet = "abcdefghijklmnopqrstuvwxyz"


function startCount() {
    count = true;
    setInterval(
        function () {
            if (count == true) {
                character = alphabet[Math.floor(Math.random() * alphabet.length)]; 
                characters += 1;
                document.getElementById("outputBox").innerHTML += character;
            }
        }
        , 1);
}

function stopCount() {
    count = false
    console.log(characters);
}
