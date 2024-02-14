//Greetings/Name

const text = prompt("Как вас зовут?");
if (text) {
  alert("Привет " + text);
  console.log("Привет " + text);
} else {
  alert("Пожалуйста введите свое имя.");
}

//Date

const currentYear = new Date().getFullYear();

const birthday = prompt("Введите год вашего рождения:");

const birthdayNum = parseInt(birthday);

const age = currentYear - birthdayNum;

alert("Вам " + age + " лет.");

//Square Perimeter

const sideWidth = prompt("Введите длину стороны квадрата:");
const sideWidthNum = parseFloat(sideWidth);

if (sideWidthNum > 0) {
  alert("Периметр квадрата " + 4 * sideWidthNum);
} else {
  alert("Пожалуйста, введите корректное положительное число ");
}

//Circle radius

const radius = prompt("Введите радиус окружности :");
const radiusNum = parseFloat(radius);
if (radiusNum > 0) {
  alert("Площадь окружности: " + Math.PI * radiusNum ** 2);
} else {
  alert("Пожалуйста, введите корректное положительное число ");
}

//Speed

const distance = prompt("Введите расстояние между городами в км :");

const time = prompt("Введите , за сколько часов вы хотите добраться :");

const distanceNum = parseFloat(distance);
const timeNum = parseFloat(time);

if (distance > 0 && time > 0) {
  alert(
    "Чтобы добраться за " +
      time +
      " часов, нужно двигаться со скоростью " +
      distance / time +
      "км/ч"
  );
} else {
  alert("Пожалуйста, введите корректные положительные числа ");
}

//Currency

const euroCurrency = 0.85;

const dollarSum = parseFloat(prompt("Введите сумму в долларах"));

if (dollarSum < 0) {
  alert("Пожалуйста, введите корректное положительное число.");
} else {
  const euroSum = (dollarSum * euroCurrency).toFixed(2);
  alert("Сумма в евро: " + euroSum);
}

//Data

const flashCapacity = parseFloat(prompt("Введите объем флешки в Гб:"));

const fileSizeMB = 820;

if (flashCapacity && fileSizeMB > 0) {
  const fileNum = Math.floor((flashCapacity * 1024) / fileSizeMB);
  alert(
    "На флешку объемом " +
      flashCapacity +
      "Гб " +
      "поместиться " +
      fileNum +
      " файлов размером 820мб"
  );
} else {
  alert("Пожалуйста, введите корректное положительное число.");
}

//Remainder

const moneySum = parseFloat(prompt("Введите сумму денег в кошельке: "));

const chocPrice = parseFloat(prompt("Введите сумму одной шоколадки: "));

if (moneySum >= 0 && chocPrice > 0) {
  const chocCount = Math.floor(moneySum / chocPrice);
  const remain = moneySum % chocPrice;
  alert(
    "Вы можете купить " +
      chocCount +
      " шоколадок, и у вас останется сдача " +
      remain +
      " денег"
  );
} else {
  alert("Пожалуйста, введите корректные положительные числа.");
}

// Three digit number

const digitNum = prompt("Введите трехзначное число:");

if (digitNum.length === 3) {
  const unit = digitNum % 10;
  const tens = Math.floor((digitNum % 100) / 10);
  const hundreds = Math.floor(digitNum / 100);
  const reverseNum = unit * 100 + tens * 10 + hundreds;

  alert("Число задом наперед: " + reverseNum);
} else {
  alert("Пожалуйста, введите трехзначное число.");
}

// Even nums

const enteredNum = parseInt(prompt("Введите целое число: "));

const evenNum = enteredNum % 2 === 0;

alert("Число " + enteredNum + "является " + evenNum);
