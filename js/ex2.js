// number comparison

let number1 = prompt("Enter the first number")
let number2 = prompt("Enter the second number")

if(parseInt(number1) > parseInt(number2)) {
  console.log(`${number1} is larger than ${number2}`);
}
else
if(parseInt(number2) > parseInt(number1)) {
  console.log(`${number2} is larger than ${number1}`);
}
else
{
  console.log(`The values of ${number1} and ${number2} are same`)
} 


 
