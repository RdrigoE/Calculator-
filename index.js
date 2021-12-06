function add(n1,n2){
    return n1 + n2
}

function subtract(n1,n2){
    return n1 - n2
}

function multiply(n1,n2){
    return n1 * n2
}

function divide(n1,n2){
    return n1 / n2
}

function operate(operator,n1,n2){
    return operator(n1,n2)
}

let buttons = document.querySelectorAll("button")
let numberDisplay = document.querySelector("#display")
let numberSecondDisplay = document.querySelector(".secondDisplay")
let firstNumber = 0
let secondNumber= 0
buttons.forEach(button => {
    button.addEventListener("click",function(){
        if (button.className == "number"){
            numberDisplay.innerHTML = numberDisplay.textContent + button.textContent
        }
        if (button.className == "operation"){
            let number_2 =  String(numberSecondDisplay.innerHTML)
            if(button.textContent == "AC"){
                numberDisplay.innerHTML = "";
                numberSecondDisplay.innerHTML = "";
            }else if(button.textContent == "+"){
                if(number_2 == ""){
                    numberSecondDisplay.innerHTML = numberDisplay.innerHTML +"+";
                    numberDisplay.innerHTML = "";
                    return
                }
                make_result(number_2)
                numberSecondDisplay.innerHTML = numberSecondDisplay.innerHTML +"+"
            }else if(button.textContent == "-"){
                if(number_2 == ""){
                    numberSecondDisplay.innerHTML = numberDisplay.innerHTML +"-";
                    numberDisplay.innerHTML = "";
                    return
                }
                make_result(number_2)
                numberSecondDisplay.innerHTML = numberSecondDisplay.innerHTML +"-"
            }else if(button.textContent == "÷"){
                if(number_2 == ""){
                    numberSecondDisplay.innerHTML = numberDisplay.innerHTML +"÷";
                    numberDisplay.innerHTML = "";
                    return
                }
                make_result(number_2)
                numberSecondDisplay.innerHTML = numberSecondDisplay.innerHTML +"÷"
            }else if(button.textContent == "×"){
                if(number_2 == ""){
                    numberSecondDisplay.innerHTML = numberDisplay.innerHTML +"×";
                    numberDisplay.innerHTML = "";
                    return
                }
                make_result(number_2)
                numberSecondDisplay.innerHTML = numberSecondDisplay.innerHTML +"×"
            }else if(button.textContent == "="){
                let number_2 =  String(numberSecondDisplay.innerHTML)
                if (number_2 == ""){
                    return
                }
                make_result(number_2)
            }
        }
    }
)});

function make_result(number_2){
        if (number_2 == ""){
            return
        }else if(number_2[number_2.length - 1] == "+"){
        firstNumber = parseInt(numberDisplay.innerHTML);
        
        secondNumber = parseInt(numberSecondDisplay.innerHTML.slice(0,-1));
       
        result = operate(add,secondNumber,firstNumber);
        
        numberDisplay.innerHTML = "";
        
        numberSecondDisplay.innerHTML = result;
        return
    }else if(number_2[number_2.length - 1] == "-"){
        firstNumber = parseInt(numberDisplay.innerHTML);
        
        secondNumber = parseInt(numberSecondDisplay.innerHTML.slice(0,-1));
        
        result = operate(subtract,secondNumber,firstNumber);
        
        numberDisplay.innerHTML = "";
        
        numberSecondDisplay.innerHTML = result;
        return
    }else if(number_2[number_2.length - 1] == "÷"){
        firstNumber = parseInt(numberDisplay.innerHTML);
        
        secondNumber = parseInt(numberSecondDisplay.innerHTML.slice(0,-1));
        
        result = operate(divide,secondNumber,firstNumber);
        
        numberDisplay.innerHTML = "";
        
        
        numberSecondDisplay.innerHTML = result;
        return
    }else if(number_2[number_2.length - 1] == "×"){
        firstNumber = parseInt(numberDisplay.innerHTML);
        
        secondNumber = parseInt(numberSecondDisplay.innerHTML.slice(0,-1));
        
        result = operate(multiply,secondNumber,firstNumber);
        
        numberDisplay.innerHTML = "";
        numberSecondDisplay.innerHTML = result;
        return
    }
}