// following day

let dayName = prompt("Enter a day name!");

switch (dayName) {
  case "Monday":
    if (dayName === "Monday" || dayName === "Mon")
    console.log("The following day is Tuesday");
    break;
  case "Tues":
    if (dayName === "Tuesday" || dayName === "Tues")
    console.log("The following day is Wednesday");
    break;
  case "Wed":
    if (dayName === "Wednesday" || dayName === "Wed")
    console.log("The following day is Thursday");
    break;
  case "Thurs":
    if (dayName === "Thursday" || dayName === "Thurs")
    console.log("The following day is Friday");
    break;
  case "Fri":
    if (dayName === "Friday" || dayName  ==="Fri")
    console.log("The following day is Saturday");
  case "Sat":
    if (dayName === "Saturday" || dayName === "Sat")
    console.log("The following day is Sunday");
    break;
  case "Sun":
    if (dayName === "Sunday" || dayName === "Sun")
    console.log("The following day is Monday");
    break;
  default:
    console.log("Not a valid input") 
}