let USD = {
	name: 'USD',
	course : 0.014
};

let RUB = {
	name: 'RUB',
	course: 69.92
};

const usdAmount = document.querySelector('#usd');
const rubAmount = document.querySelector('#rub');

const totalUsdAmount = document.querySelector('.final-value-USD');
const totalRubAmount = document.querySelector('.final-value-RUB');

const btn = document.querySelector('.btn');
btn.addEventListener('click', calculate);

function calculate(finalUsdAmount, finalRubAmount){
	finalUsdAmount = rubAmount.value * USD.course;
	finalRubAmount = usdAmount.value * RUB.course;
	console.log(finalUsdAmount);
	console.log(finalRubAmount);

	
	checkValue(finalUsdAmount, finalRubAmount);
}

function checkValue(finalUsdAmount, finalRubAmount){
	if(usdAmount.value < 0 || rubAmount < 0){
		alert('Вводимы занчения должны быть больше 0');
		return false;

	}
	else{
		totalRubAmount.innerHTML = `${finalRubAmount} ₽`;
		totalUsdAmount.innerHTML = `${finalUsdAmount} $`;
	}

}


















