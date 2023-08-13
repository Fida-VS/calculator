import { numbers } from './constants';
import { signs } from './constants';
import styles from './App.module.css';
import { useState } from 'react';



export const App = () => {

	const [displayValue, setDisplayValue] = useState(0);

	const calculate = (num1, num2, op) => {

		let result = 0;

if(op === '+'){
	result = num1 + num2;
} else if(op === '-'){
	result = num1 - num2;
}
console.log(result);
return result;

	}

	const convertInNumbers = (str) => {

let arr = str.split('');
console.log(arr);
let opInd = arr.findIndex((item) => {
	if(item === '+' || item === '-'){
	  return item;
	}
   });

   let op = arr.splice(opInd, 1).join();

   console.log(op);

   let num1 = Number(arr.slice(0, opInd).join(''));

   let num2 = Number(arr.slice(opInd).join(''));

console.log(num1);
console.log(num2);

   return calculate(num1, num2, op);
	}




const getNumberInDisplay = (el) => {

if(el === 'c'){
	setDisplayValue(0)
} else if(el === '='){

	setDisplayValue(convertInNumbers(displayValue));

} else {

	if(displayValue === 0){
		setDisplayValue(displayValue + el)
	} else {
		setDisplayValue(displayValue + String(el))
	}

}
};

	return (
		<div className={styles.app}>

		<div className={styles.calculator}>
			<div className={styles.display}>
				<div className={convertInNumbers ? styles.numbersField : styles.numbersFieldGreen}>{displayValue}</div>
			</div>
			<div className={styles.signs}>
			{signs.map(( el ) => <button onClick={() => getNumberInDisplay(el)} className={styles.signsItem} key={el}>{el}</button>)}
			</div>
			<div className={styles.numbers}>
				{numbers.map(( el ) => <button onClick={() => getNumberInDisplay(el)} className={styles.numbersItem} key={el}>{el}</button>)}
				</div>
		</div>

		</div>
	);
};











