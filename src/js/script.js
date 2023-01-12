//значения из текстовых инпутов
const intialDeposit = document.querySelector('#intialDeposit'); 
const monthlyReplenishment = document.querySelector('#monthlyReplenishment');
const interestRate = document.querySelector('#interestRate');
const depositTerm = document.querySelector('#depositTerm');

//итогое значения
const amountAtTheEndOfThePeriod = document.querySelector('#amountAtTheEndOfThePeriod'); 
const topUpAmount = document.querySelector('#topUpAmount'); 
const interestCharges = document.querySelector('#interestCharges');
const errorMessage = document.querySelector('.error-message');

//кнопка рассчета
const btnCalculte = document.querySelector('.btn-calculte');
btnCalculte.addEventListener('click', calculate);
function calculate(finalInterestedChanges, finalTopUpAmount, finalPrice){

   

    /*
        intialDeposit -- первоначальны размер депозита 
        interestRate -- годовая процентная ставка, разделенная на 100
        K-кол-во месяцев в году  == 12
        depositTerm -- срок вложения в днях(30)
        finalPrice -- сумма на конец периода 
    */
    
    finalTopUpAmount = depositTerm.value * monthlyReplenishment.value;

    finalInterestedChanges = intialDeposit.value * depositTerm.value * (interestRate.value/12)/100;
    const finalInterestedChangesArounded = Math.round(finalInterestedChanges);

    finalPrice = intialDeposit.value * (1 + (interestRate.value/12)/100) ** depositTerm.value;
    const finalPriceArounded = Math.round(finalPrice);

    checkValue(finalPriceArounded, finalTopUpAmount, finalInterestedChangesArounded)
        
    // console.log(finalInterestedChanges);
    // console.log(finalTopUpAmount)
    // console.log(finalPriceArounded)
}


function checkValue(finalPriceArounded, finalTopUpAmount,finalInterestedChangesArounded){
    if(intialDeposit.value < 0 || monthlyReplenishment.value < 0 || depositTerm.value < 0 || interestRate.value < 0 ||interestRate.value > 100 || depositTerm.value > 30 ){
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('shown');
        return false;

    }else{
        
        amountAtTheEndOfThePeriod.innerHTML = `${finalPriceArounded} $`;
        topUpAmount.innerHTML = `${finalTopUpAmount} $`;
        interestCharges.innerHTML = `${finalInterestedChangesArounded} %`;
        errorMessage.classList.remove('shown');
        errorMessage.classList.add('hidden');
        return true;
    }
}
