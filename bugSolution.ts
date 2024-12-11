function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

let result1 = add(1, 2); 

let num1: any = 1;
let num2: any = '2';

if (isNumber(num1) && isNumber(num2)) {
    let result2 = add(num1, num2);
} else {
    console.log('Invalid input type');
}
//or
let result3 = add(1, parseInt(String(num2)));