const elem1s = document.querySelector('.value');


const btn = document.querySelector('.btn');
btn.addEventListener('click', func);
function func() {
  let arr = elem1s.value.split('');
  let sum = '';

  for (let elem1 of arr) {
    if(elem1 === '0' || isNaN(elem1) || elem1 === ' ')continue;
    
    sum = sum + elem1;
  }

  const finalValue = document.querySelector('.finalValue');
  finalValue.innerHTML = sum.split('').join(',');
}