let USD = {
	name: 'USD',
	course : 0.59
};

let RUB = {
	name: 'RUB',
	course: 41.07
};

const inputAmount = document.querySelector('#input-amount');
// const rubAmount = document.querySelector('#rub');

const totalUsdAmount = document.querySelector('.final-value-USD');
const totalRubAmount = document.querySelector('.final-value-RUB');

// const btn = document.querySelector('.btn');
inputAmount.addEventListener('blur', calculate);

function calculate(finalUsdAmount, finalRubAmount){
	finalUsdAmount = inputAmount.value * USD.course;
	finalRubAmount = inputAmount.value * RUB.course;
	console.log(finalUsdAmount);
	console.log(finalRubAmount);

	
	checkValue(finalUsdAmount, finalRubAmount);
}

function checkValue(finalUsdAmount, finalRubAmount){
	if(inputAmount.value < 0){
		alert('Вводимы занчения должны быть больше 0');
		return false;
	}
	else{
		totalRubAmount.innerHTML = `${finalRubAmount} ₽`;
		totalUsdAmount.innerHTML = `${finalUsdAmount} $`;
	}

}


















