var characters = 0;
var count = false;
var character = '';
var word = "";
var aux = 0;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
var startTime, endTime;
var runner;

function startTimer() {
    startTime = new Date();
};

function clearAll() {
    characters = 0;
    document.getElementById("outputBox").innerHTML = "";
    clearInterval(runner);
    document.getElementById("timeElapsed").innerHTML = "";
    document.getElementById("probability").innerHTML = "";
    document.getElementById("charTyped").innerHTML = "";
    document.getElementById("btnStop").style.display = "block";
    document.getElementById("btnClear").style.display = "none";
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    document.getElementById("queryFound").style.display = "none";
};

function endTimer() {
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;
    var seconds = Math.round(timeDiff);
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    document.getElementById("timeElapsed").innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

};

function startCount() {
    word = document.getElementById("inputMatch").value;
    if (word == "") {
        alert("Please insert a valid input!!");
    }
    else {
        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
        document.getElementById("probability").innerHTML = "1/" + Math.pow(alphabet.length, word.length) + " or " + ((1 / Math.pow(alphabet.length, word.length)) * 100).toString() + "%"
        count = true;
        startTimer();
        runner = setInterval(
            function () {
                if (count == true) {
                    character = alphabet[Math.floor(Math.random() * alphabet.length)];
                    characters += 1;
                    document.getElementById("outputBox").innerHTML += character;
                    if (character == word.charAt(aux)) {
                        aux++
                        if (aux >= word.length) {
                            stopCount();
                            document.getElementById("queryFound").style.display = "block";
                        }
                    }
                    else {
                        aux = 0;
                    }
                }
            }
            , 1);
    }
};

function stopCount() {
    document.getElementById("btnStop").style.display = "none";
    document.getElementById("btnClear").style.display = "block";
    count = false
    document.getElementById("charTyped").innerHTML = characters.toString();
    endTimer();
};
