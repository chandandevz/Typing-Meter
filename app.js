let wordsField = document.getElementById("words");
let typingArea = document.getElementById("typed-word");
let btn = document.getElementById("btn");
let wpmField = document.getElementById("wpm");
let errorField = document.getElementById("error");

let startTime, endTime;

const randomWords = ["A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal",
"A paralegal is not a lawyer but can be employed by a law office",
"Paralegals are not allowed to offer legal services directly to the public on their own",
"In the heart of a bustling city there lay a serene park a true oasis amid the concrete jungle."
];

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*randomWords.length);
    
    wordsField.innerText = randomWords[randomNumber];
    
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "End Typing";
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

const compareWord = (str1,str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;
    
    word1.forEach(function(items, index){
        if(items == word2[index]){
            cnt++;
        }
    })
    
    let errorWords = (word1.length - cnt);
    return errorWords ;
}

const endPlay = () => {
    let date = new Date()
    endTime = date.getTime();
    let totalTime = (endTime - startTime)/1000;
    
    let totalTyped = typingArea.value;
    let wordCount = wordCounter(totalTyped);
    let speed = Math.round((wordCount/totalTime)*60);
    wpmField.innerText = "SPEED : "+speed+" WPM";
    let compareWords = compareWord(wordsField.innerText, totalTyped);
    errorField.innerText = "ERROR : "+compareWords;
}

btn.addEventListener("click", function(){
    if(this.innerText == "Start Typing"){
        typingArea.disabled = false;
        wpmField.innerText = "SPEED : ";
        errorField.innerText = "ERROR : ";
        playGame();
    }
    else if(this.innerText == "End Typing"){
        typingArea.disabled == true;
        btn.innerText = "Start Typing";
        endPlay();
    }
})

