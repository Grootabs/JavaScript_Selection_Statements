console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

var favoriteNum = "13"

let answer = prompt(`Guess the random number between 1-100`);
answer = parseFloat(answer)
console.log(answer)

if (answer<favoriteNum) {
  alert("too low");
} else if (answer>favoriteNum) {
  alert("too high");
} else {
  alert("Congratulations");
}

//exercise 2

let birthMonth = window.prompt("What is your birth month?")

switch (birthMonth) {
  case "December":
  case "december":
  case "January":
  case "january":
  case "February":
  case "february":
    alert("Your Birth Season is Winter");
    break;
  case "March":
  case "march":
  case "April":
  case "april":
  case "May":
  case "may":
    alert("Your Birth Season is Spring");
    break;
  case "June":
  case "june":
  case "July":
  case "july":
  case "August":
  case "august":
    alert("Your Birth Season is Summer");
    break;
  case "September":
  case "september":
  case "October":
  case "october":
  case "November":
  case "november":
    alert("Your Birth Season is Fall");
    break;
  default:
    alert("Check the spelling of your month and type name out fully");
}

//exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";
switch (typeId) {
  case "01":
    type = "Tank top";
    break;

  case "02":
    type = "T-Shirt";
    break;

  case "03" :
    type = "Long Sleeve";
    break;

  case "04" :
    type == "Sweat Shirt";
    break;

  default:
    type = "Other";
    break;
}

switch (colorId) {
  case "BL" :
    color = "Black";
    break;

  case "BL" : 
    color = "Blue";
    break;

  case "RD" : 
    color = "Red";
    break;

  case "PU" : 
    color = "Purple";
    break;

  default: 
    color = "White";
    break;
}

switch (sizeId) {
  case "S" : 
    size = "Small";
    break;

  case "M" : 
    size = "Medium";
    break;

  case "L" : 
    size = "Large";
    break;

  case "XL" : 
    size = "Extra Large";
    break;

  default : 
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);