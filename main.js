const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases = ["a Software Engineer....", "Student....", "Fullstack Web Developer"];

//to keep track of letters so far
let letterIndex = 0;
let phraseIndex=0;
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
  if(letterIndex > -1){
    let updatedPhrase= "";
    for (let index=0;index<letterIndex;index++){
      updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatedPhrase;
    letterIndex-=1
    setTimeout(clearLetter,100);
  }
}
  printLetters(phrases[0]);
//1000 milli sec= 1sec