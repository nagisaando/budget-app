const currentResult = document.getElementById('current-total');
const addBtn = document.querySelector('.button');
const newForm = document.getElementById("new-form");
const originalForm = document.getElementById("original-form");
const section = document.getElementById('budget-section');
const total = document.getElementById('amount-total');
const userInput = document.getElementById('money-amount');
const moneyfield = document.getElementById('moneySpent');

let defaultresult = 0;
let currentnumber = defaultresult;


addBtn.addEventListener('click', FirstAddForm);


// function FirstAddForm(){
//      enteredNum = parseInt(userInput.value)

//     // function getUserNumberInput() {
//     //     return parseInt(userInput.value);
//     // }
//     let errMsg = document.createElement('p');
//         errMsg.innerText = 'Enter the amount you spent';
//         errMsg.className = 'help is-danger';
//         errMsg.id = 'error-message';
//     let message = document.getElementById('error-message');

//     if(message === null && (isNaN(enteredNum) || enteredNum < 0)) {
//         moneySpent.appendChild(errMsg)
//         return;
//     } else if(message != null && typeof enteredNum === 'number' && enteredNum > 0) {
//         message.remove();

//         addForm();

//         addBtn.remove();
//         userInput.setAttribute('disabled', '')
    
    
//         const enteredNumber = enteredNum;
//         currentnumber = currentnumber + enteredNumber;
//         currentResult.innerHTML = currentnumber;

//     } else if(message === null && (typeof enteredNum != 'number' || enteredNum < 0)) {
//         return;
//     } else if(message === null && typeof enteredNum === 'number' && enteredNum > 0){
//         console.log(message)
//         addForm();

//         addBtn.remove();
//         userInput.setAttribute('disabled', '')
    
    
//         const enteredNumber = enteredNum;
//         currentnumber = currentnumber + enteredNumber;
//         currentResult.innerHTML = currentnumber;

//     }

    

       
        


    // const enteredNumber = getUserNumberInput();
    // currentnumber = currentnumber + enteredNumber;
    // currentResult.innerHTML = currentnumber;
    
    //}



// function SecondAddForm () {

//     let errMsg = document.createElement('p');
//         errMsg.innerText = 'Enter the amount you spent';
//         errMsg.className = 'help is-danger';
//         errMsg.id = 'error-message';
//     let message = document.getElementById('error-message');


//     let userInput2 = document.getElementById(`userInput${counter}`);
//     enteredNum = parseInt(userInput2.value);

    

//     if(isNaN(enteredNum) || enteredNum < 0) {
        

//         return;
//     } else {

//     // function getUserNumberInput1() {
//     //     return parseInt(money.value);
//     // }

//     const enteredNumber = enteredNum;
//     currentnumber = currentnumber + enteredNumber;
//     currentResult.innerHTML = currentnumber;

    

//     addForm();
//     };

//     if(message === null && (isNaN(enteredNum) || enteredNum < 0)) {
//         moneySpent.appendChild(errMsg)
//         return;
//     } else if(message != null && typeof enteredNum === 'number' && enteredNum > 0) {
//         message.remove();

//         addForm();

//         addBtn.remove();
//         userInput.setAttribute('disabled', '')
    
    
//         const enteredNumber = enteredNum;
//         currentnumber = currentnumber + enteredNumber;
//         currentResult.innerHTML = currentnumber;

//     } else if(message === null && (typeof enteredNum != 'number' || enteredNum < 0)) {
//         return;
//     } else if(message === null && typeof enteredNum === 'number' && enteredNum > 0){
//         console.log(message)
//         addForm();

//         addBtn.remove();
//         userInput.setAttribute('disabled', '')
    
    
//         const enteredNumber = enteredNum;
//         currentnumber = currentnumber + enteredNumber;
//         currentResult.innerHTML = currentnumber;

//     }

    

// }


let counter = 0;
let addCounter = 0


function addForm(){

    counter++;


    let newDiv = document.createElement('div');
    newDiv.id = 'new-container' + counter;
    newDiv.className = 'container columns first';
    total.parentNode.insertBefore(newDiv, total)

    let newField = document.createElement('div');
    newField.className = 'field';
    newDiv.appendChild(newField);

    let newField1 = document.createElement('div');
    newField1.className = 'field';
    newDiv.appendChild(newField1);

    let newField2 = document.createElement('div');
    newField2.className = 'field';
    newDiv.appendChild(newField2);

    let expenseDesc = document.createElement('input');
    expenseDesc.setAttribute('type', 'text')
    expenseDesc.id = 'expense' + counter;
    expenseDesc.className = 'input expense';
    expenseDesc.name = 'expense' + counter;
    


    let moneyInput = document.createElement("input");
    moneyInput.setAttribute('type', 'number')
    moneyInput.id = 'money-amount' + counter;
    moneyInput.className = 'input money';
    moneyInput.name = 'money-amount' + counter;
    
    

    let createBtn = document.createElement('button');
    createBtn.innerHTML = '+';
    createBtn.className = 'button';
    createBtn.id = 'addBtn' + counter;
    createBtn.addEventListener('click', SecondAddForm)
    if(addCounter > 0){
        document.getElementById(`addBtn${counter -1 }`).remove();
        document.getElementById(`userInput${counter -1 }`).setAttribute('disabled', '');

     }

    //console.log(document.getElementById(`addBtn${counter -1 }`))


    
    newField.appendChild(expenseDesc);
    newField1.appendChild(moneyInput);
    newField2.appendChild(createBtn);

    console.log(counter)

    console.log(addCounter);
    addCounter++

}
document.getElementsByName



function FirstAddForm(){

    let userInputs = document.querySelectorAll('.addmoney');

userInputs.forEach(userInput => {
  console.log(parseInt(userInput.value));
});
    // let allMoney = document.getElementsByClassName("addmoney");
    // for
    // console.log(allMoney[0].value);
   
    let errMsg = document.createElement('p');
        errMsg.innerText = 'Enter the amount you spent';
        errMsg.className = 'help is-danger';
        errMsg.id = 'error-message';
    let message = document.getElementById('error-message');

    // if(message === null && (isNaN(enteredNum) || enteredNum < 0)) {
    //     moneySpent.appendChild(errMsg)
    //     return;
    // } else if(message != null && typeof enteredNum === 'number' && enteredNum > 0) {
    //     message.remove();

    //     addForm();

    //     addBtn.remove();
    //     userInput.setAttribute('disabled', '')
    
    
    //     const enteredNumber = enteredNum;
    //     currentnumber = currentnumber + enteredNumber;
    //     currentResult.innerHTML = currentnumber;

    // } else if(message === null && (typeof enteredNum != 'number' || enteredNum < 0)) {
    //     return;
    // } else if(message === null && typeof enteredNum === 'number' && enteredNum > 0){
    //     console.log(message)
    //     addForm();

    //     addBtn.remove();
    //     userInput.setAttribute('disabled', '')
    
    
    //     const enteredNumber = enteredNum;
    //     currentnumber = currentnumber + enteredNumber;
    //     currentResult.innerHTML = currentnumber;

    // }

}

       
        






 // let userInput = document.getElementsByClassName('money');
    // a = parseInt(userInput.value)

    // console.log(a)

//     let userInputs = document.querySelectorAll('addmoney');
  
//   userInputs.forEach(userInput => {
//     console.log(parseInt(userInput.value));
//   });
    // userInput.forEach(input=>{
    //      if(typeof input === 'number' && input > 0){
    //         console.log('a')
    //      }
    //     })
    // let userInput = document.getElementsByName('money-amount');
    // inputNum = parseInt(userInput.value);
    
    // console.log(inputNum) 

    // var allMoney = document.getElementsByClassName("addmoney");
    // console.log(allMoney[0].value);

        // let userInputs = document.querySelectorAll('.addmoney');
        
        // userInputs.forEach(userInput => {
        //   console.log(parseInt(userInput.value));
        // });
        

    // function getUserNumberInput() {
    //     return parseInt(userInput.value);
    // }