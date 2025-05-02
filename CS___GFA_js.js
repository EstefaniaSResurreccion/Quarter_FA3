
function EnteredValue(){
    let input;
    while(true){
     input = prompt ("Enter a number:");
        if (!isNaN(input) && Number.isInteger(Number(input))){
            return Number(input);
        }

        else{
            alert("Please enter a valid whole number. ");
        }
    }
}

function genShape(num){
    let result = "Number Inputted: " + num + "\n";
    if (num % 2 === 1){
        for (let i = num; i>= 1; i--){
            result += (i + " ").repeat(num).trim() + "\n";
        }
    }

     else {
    for (let i = num; i >= 1; i--) {
      result += (i + " ").repeat(i).trim() + "\n";
    }
  }
    
  return result;
}
  

const number = EnteredValue();
const shape = genShape(number);
document.getElementById("shape").textContent = shape;



