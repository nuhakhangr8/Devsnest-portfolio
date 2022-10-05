const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases = ["a Software Engineer....", "Student....", "Fullstack Web Developer"];

//to keep track of letters so far
let letterIndex = 0;

function printLetters(phrase) {
  if(letterIndex==phrase.length){
    //create a function to clear letters
    clearLetter();
  }
  else if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    letterIndex = letterIndex + 1;
    setTimeout(function() {
      printLetters(phrase)
    },300)
  }
}

function clearLetter(){
  
}
  printLetters(phrases[0]);
//1000 milli sec= 1sec