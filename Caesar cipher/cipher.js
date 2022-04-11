
function enDeCode(){
    let userInput = document.querySelector("#textArea").value;
    let encode = document.querySelector("#encode");
    let shiftKey = document.querySelector("#shift").value;
    let cleanString = (userInput.trim()).toUpperCase();
    let outputMessage = [];
    let flag = true;
   
    if (encode.checked) {
      flag = true;
    } else{
    flag = false;
    }
    for (let i = 0; i < cleanString.length; i++){
      outputMessage.push(codeLetter(cleanString[i], shiftKey, flag));
    }
  
    document.getElementById("output").value = outputMessage.join("");
  }
  
  
  function convertIndexToLetter(index){
    let alphabet = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y","Z"];
    let letter = alphabet[index];
    return letter;
  }
  
  function convertLetterToIndex(letter){
    let alphabet = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y","Z"];
    index = alphabet.indexOf(letter);
    return index;
  }
  
  function calculateNewIndex(letter, shiftKey, encode){
    let index = Number(convertLetterToIndex(letter));
  
    if (encode) { 
      index = index + Number(shiftKey); 
    } else {
      index = index - Number(shiftKey);
    }  
    
    if (index > 25){
      index = index % 26;
    } else if (index < 0) {
      index = index % 26;
    }
    return index;
  }
  
  function codeLetter(letter, shiftKey, flag){
    //deal with non letter like space or number
    let letterRegEx = /[^A-Z]/;
    
    if (letterRegEx.test(letter)){
      return letter;
    } else {
      let newIndex = calculateNewIndex(letter, shiftKey, flag);
      let codedLetter = convertIndexToLetter(newIndex);
      return codedLetter;
    }
  };