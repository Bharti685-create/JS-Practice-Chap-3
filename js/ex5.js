//following second

let hour = Number(prompt("Enter the time in hour"))
let minute = Number(prompt("Enter the time in minutes"))
let second = Number(prompt("Enter the time in seconds"))

if (second > 59 || second < 0 || minute > 59 || minute < 0 || hour > 23 || hour < 0){
  console.log("Please enter a valid time");
} else if ((hour === 23) && (minute === 59) && (second === 59)) {
  hour = 0;
  minute = 0;
  second = 0;
  console.log(`${hour} h ${minute}m ${second}s`);
} else if ((second <= 59) && (minute <= 59) && (hour <= 23)) {
  hour ++;
  minute= 0;
  second= 0
}

