const currentResult = document.getElementById('current-total');
const addBtn = document.querySelector('.button');



addBtn.addEventListener('click', checkUserForm);

let counter = 1;
let addCounter = 0;


function addForm(){
    const total = document.getElementById('amount-total');

    let newDiv = document.createElement('div');
    newDiv.id = 'new-container' + counter;
    newDiv.className = 'container columns first';
    total.parentNode.insertBefore(newDiv, total)

    let newField = document.createElement('div');
    newField.className = 'field';
    newDiv.appendChild(newField);

    let newField1 = document.createElement('div');
    newField1.className = 'field money-input';
    newDiv.appendChild(newField1);

    let newField2 = document.createElement('div');
    newField2.className = 'field';
    newDiv.appendChild(newField2);

    let expenseDesc = document.createElement('input');
    expenseDesc.setAttribute('type', 'text')
    expenseDesc.id = 'expense' + counter;
    expenseDesc.className = 'input expenses';
    expenseDesc.name = 'expense' + counter;
    
    let moneyInput = document.createElement("input");
    moneyInput.setAttribute('type', 'number')
    moneyInput.id = 'money-amount' + counter;
    moneyInput.className = 'input addmoney';
    moneyInput.name = 'money-amount' + counter;

    let errMsg = document.createElement('p');
        errMsg.innerText = 'Enter the amount you spent';
        errMsg.className = 'help is-danger';
        errMsg.id = 'error-message' + counter;

    let createBtn = document.createElement('button');
    createBtn.innerHTML = '+';
    createBtn.className = 'button';
    createBtn.id = 'addBtn' + counter;
    createBtn.addEventListener('click', checkUserForm)
    if(addCounter > 0){
        document.getElementById(`addBtn${counter -1 }`).remove();

     }
    
    newField.appendChild(expenseDesc);
    newField.appendChild(errMsg);
    newField1.appendChild(moneyInput);
    
    newField2.appendChild(createBtn);

   
    addCounter++
    counter++;

}
document.getElementsByName



function checkUserForm(){
    const numbersList = [];
    let userInputs = document.querySelectorAll('.addmoney');
    let numbers =  userInputs.forEach(userInput => {
    numbersList.push(parseInt(userInput.value))
    })
    
    let moneyInputList = [...document.querySelectorAll('.addmoney')];
    
    let i = 0
    for(i = 0; i < moneyInputList.length; i++) {
        let getMoneyInput = document.getElementById(`money-amount${i}`);
        let StringtoNumber = parseInt(getMoneyInput.value)
        let message = document.getElementById(`error-message${i}`)
  
        if( (isNaN(StringtoNumber) || StringtoNumber < 0)) {
            
            message.style.visibility = "visible"
            getMoneyInput.classList.add('is-danger')
            return;
            
             } else if( typeof StringtoNumber === 'number' && StringtoNumber > 0) {
                
                message.style.visibility = "hidden"
                addBtn.remove();
                getMoneyInput.classList.remove('is-danger')
            
             } ;                

     }


     let checkAllInput = numbersList.every(function(number){
         return typeof number === 'number' && number > 0;
        
     })

    if(checkAllInput){
     addBtn.remove()
        addForm()
     }

    const calculate = numbersList.filter(number => typeof number === 'number')   
    let totalNumber = calculate.reduce((a, b) => a + b, 0);
    currentResult.innerHTML = totalNumber;

}
    

    
       
        






 