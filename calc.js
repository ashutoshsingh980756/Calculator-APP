function calculator(task) {
  let getFirstValue = document.getElementById('first-value').value;
  let getSecondValue = document.getElementById('second-value').value;
  let displayVal = document.getElementById('calc-value');
  let calculatedValue;
  if (getFirstValue.trim() !== '' && getSecondValue.trim() !== '') {
    if (task === 'add') {
        calculatedValue =  +getFirstValue + +getSecondValue;
    }
    else if (task === 'substract') {
        calculatedValue = +getFirstValue - +getSecondValue
    }
    else if (task === 'multiply') {
       calculatedValue = +getFirstValue * +getSecondValue
    }
    else if (task === 'divide') {
        calculatedValue = +getFirstValue / +getSecondValue
    }
    displayVal.innerText = calculatedValue.toFixed(2)
  } else {
    displayVal.innerText = `Please add correct value to ${task}`
  }
  
}

document.getElementById('add').addEventListener('click', function() {
    calculator('add');
})

document.getElementById('substract').addEventListener('click', function() {
    calculator('substract');
})

document.getElementById('multiply').addEventListener('click', function() {
    calculator('multiply');
})

document.getElementById('divide').addEventListener('click', function() {
    calculator('divide');
})

// console.log(getFirstValue)