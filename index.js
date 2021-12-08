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
        if (firstNumber == 0 && secondNumber == 0){
            if (button.className == "number"){
                if (numberDisplay.innerHTML.length < 11){
                numberDisplay.innerHTML = numberDisplay.innerHTML + button.textContent;
                }
            }else if(button.className == "operation"){
                switch(button.textContent){
                    case "+":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "+";
                        numberDisplay.innerHTML = "";
                        break;
                    case "-":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "-";
                        numberDisplay.innerHTML = "";
                        break;
                    case "÷":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "÷";
                        numberDisplay.innerHTML = "";
                        break;
                    case "×":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "×";
                        numberDisplay.innerHTML = "";
                        break;
                    case "AC":
                        AC();
                        break;
                    case "+/-":
                        console.log("trying")
                        plusMinus();
                        break;
                    case "DEL":
                        numberDisplay.innerHTML = numberDisplay.innerHTML.slice(0,-1);
                        break;
                    default:
                        console.log("Not gonna do it");
                    
                }

            }
        }else if (numberDisplay.innerHTML == "" && secondNumber != 0){
            if (button.className == "number"){
                if (numberDisplay.innerHTML.length < 11){
                    numberDisplay.innerHTML = numberDisplay.innerHTML + button.textContent;
                    }
            }else if(button.className == "operation"){
                switch(button.textContent){
                    case "+":
                        numberSecondDisplay.innerHTML= numberSecondDisplay.innerHTML.slice(0,-1) + "+";
                        break;
                    case "-":
                        numberSecondDisplay.innerHTML= numberSecondDisplay.innerHTML.slice(0,-1) + "-";
                        break;
                    case "÷":
                        numberSecondDisplay.innerHTML= numberSecondDisplay.innerHTML.slice(0,-1) + "÷";
                        break;
                    case "×":
                        numberSecondDisplay.innerHTML= numberSecondDisplay.innerHTML.slice(0,-1) + "×";
                        break;
                    case "+/-":
                        plusMinus();
                        break;
                    case "AC":
                        AC();
                        break; 
                    case "=":
                        updateOnTheGo("=");
                        break;                   
                    }
                }
        }else if (String(numberSecondDisplay.innerHTML[numberSecondDisplay.innerHTML.length - 1]) == "="){
            if (button.className == "number"){
                if (secondNumber == parseFloat(numberDisplay.innerHTML)||secondNumber == parseFloat("-"+numberDisplay.innerHTML)){
                    AC()
                    numberDisplay.innerHTML = button.textContent;
                    return
                }
            }else if(button.className == "operation"){
                switch(button.textContent){
                    case "+":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "+";
                        numberDisplay.innerHTML = "";
                        break;
                    case "-":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "-";
                        numberDisplay.innerHTML = "";
                        break;
                    case "÷":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "÷";
                        numberDisplay.innerHTML = "";
                        break;
                    case "×":
                        secondNumber = parseFloat(numberDisplay.innerHTML);
                        numberSecondDisplay.innerHTML=secondNumber + "×";
                        numberDisplay.innerHTML = "";
                        break;
                    case "+/-":
                        plusMinus();
                        break;
                    case "AC":
                        AC();
                        break;
                    case "DEL":
                        AC();
                        break;
                    default:
                        console.log("Not gonna do it");
                    
                }
            }
        }else if (numberDisplay.innerHTML != "" && secondNumber != 0){
            if (button.className == "number"){
                if (numberDisplay.innerHTML.length < 11){
                    numberDisplay.innerHTML = numberDisplay.innerHTML + button.textContent;
                    }
            }else if(button.className == "operation"){
                switch(button.textContent){
                    case "+":
                        updateOnTheGo("+")
                        break;
                    case "-":
                        updateOnTheGo("-");
                        break;
                    case "÷":
                        updateOnTheGo("÷");
                        break;
                    case "×":
                        updateOnTheGo("×");
                        break;
                    case "=":
                        updateOnTheGo("=");
                        break;
                    case "AC":
                        numberSecondDisplay.innerHTML = "";
                        numberDisplay.innerHTML = "";
                        firstNumber = 0
                        secondNumber= 0
                        break;
                    case "+/-":
                        plusMinus();
                        break;
                    case "DEL":
                        numberDisplay.innerHTML = numberDisplay.innerHTML.slice(0,-1);
                        break;
                    default:
                        console.log("Not gonna do it");
                    
                }
            }
        }
    })
});

function computeResult(innerStringTwo, innerString){
    n1 = parseFloat(innerStringTwo.slice(0,-1));
    n2 = parseFloat(innerString);
    switch(innerStringTwo[innerStringTwo.length - 1]){
        case "+":
            return add(n1,n2).toFixed(3);
        case "-":
            return subtract(n1,n2).toFixed(3);
        case "÷":
            return divide(n1,n2).toFixed(3);
        case "×":
            return multiply(n1,n2).toFixed(3);
    }
}

function updateOnTheGo(signal){
    if (signal == "="){
        let temp = secondNumber
        firstNumber = parseFloat(numberDisplay.innerHTML)
        secondNumber = parseFloat(computeResult(numberSecondDisplay.innerHTML,numberDisplay.innerHTML));
        signal = String(numberSecondDisplay.innerHTML[numberSecondDisplay.innerHTML.length - 1])
        numberSecondDisplay.innerHTML = `${temp} ${signal} ${firstNumber} =`
        numberDisplay.innerHTML = secondNumber;
        firstNumber = 0;
        return
    }
    let temp = secondNumber
    firstNumber = parseFloat(numberDisplay.innerHTML)
    secondNumber = computeResult(numberSecondDisplay.innerHTML,numberDisplay.innerHTML);
    numberSecondDisplay.innerHTML = `${secondNumber}${signal}`
    numberDisplay.innerHTML = "";
    firstNumber = 0;
}

function AC(){
    numberSecondDisplay.innerHTML = "";
    numberDisplay.innerHTML = "";
    firstNumber = 0
    secondNumber= 0
}

function plusMinus(){
    if (numberDisplay.innerHTML.charAt(0) == "-"){
        numberDisplay.innerHTML = numberDisplay.innerHTML.slice(1,numberDisplay.innerHTML.length)
        return
    } else if(numberDisplay.innerHTML == ""){
        numberDisplay.innerHTML = "-"
        return
    }else{    
        numberDisplay.innerHTML = `-${parseFloat(numberDisplay.innerHTML)}`
        return
    }
}