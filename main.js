document.addEventListener("DOMContentLoaded",function(){
  const dynamicContent = document.getElementById("dynamic-text");


  const phrases = ["a Software Engineer....", "Student....", "Fullstack Web Developer"];
  
  //to keep track of letters so far
  let letterIndex = 0;
  let phraseIndex=0;
  const typingSpeed=150;
  const erasingSpeed=75;

  function printLetters(phrase) {
    if(letterIndex===phrase.length){
      //create a function to clear letters
      clearLetter();
    }
    else if (letterIndex < phrase.length) {
      dynamicContent.textContent += phrase.charAt(letterIndex);
      letterIndex = letterIndex + 1;
      setTimeout(function() {
        printLetters(phrase)
      },typingSpeed)
    }
  }
  
  function clearLetter(){
    if (letterIndex==-1){
      phraseIndex += (phraseIndex+1)%phrases.length;
      letterIndex=0;
      printLetters(phrases[phraseIndex])
    }
    else if(letterIndex > -1){
      let updatedPhrase= "";
      for (let index=0;index<letterIndex;index++){
        updatedPhrase += phrases[phraseIndex].charAt(index);
      }
      dynamicContent.textContent = updatedPhrase;
      letterIndex-=1
      setTimeout(clearLetter,erasingSpeed);
    }
  }
  printLetters(phrases[phraseIndex]);


//1000 milli sec= 1sec

// live link:https://nuha-portfolio.netlify.app/

window.addEventListener("scroll",function(){
  // console.log(this.window.scrollY);
  //client hide 
  //offset height of the element relative to its parent
  //offsetTop diferent for different position
  let intro=this.document.querySelector(".intro");
  if(this.window.scrollY >= (intro.offsetHeight+intro.offsetTop)){
    this.document.querySelector(".header").style.position="sticky";
  }else{
    this.document.querySelector(".header").style.position="revert";
  }
})
  
})



