console.log("hello");

// TOPIC 2

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

console.log(checkAge(6));
console.log(checkAge(20));

function checkStorage(available, ordered) {
  let message;
  if (available <= ordered) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }
  return message;
}
console.log(checkStorage(100, 3));
console.log(checkStorage(100, 130));

let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  return message;
}

console.log(makeTransaction(3000, 5, 200));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
  return message;
}
console.log(checkPassword("qwerty"));

function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}

console.log(checkStorage(12, 100));

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip";
  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;
  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17));

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  return discount;
}

console.log(getDiscount(137000));

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }

//  SAME WITH TERNARY OPERATOR

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     available > ordered
//       ? "The order is accepted, our manager will contact you"
//       : "Not enough goods in stock!";
//   return message;
// }

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  message =
    ADMIN_PASSWORD === password
      ? "Access is allowed"
      : "Access denied, wrong password!";
  return message;
}

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "starter":
      price = 0;
      break;
    case "professional":
      price = 20;
      break;
    case "organization":
      price = 50;
      break;
  }
  return price;
}

console.log(getSubscriptionPrice("professional"));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case (password = null):
      message = "Canceled by user!";
      break;
    case (password = ADMIN_PASSWORD):
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }
  return message;
}

console.log(checkPassword());

function getShippingCost(country) {
  let message;
  switch (country) {
    case (country = "China"):
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case (country = "Chile"):
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case (country = "Australia"):
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case (country = "Jamaica"):
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Ukraine"));

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}
console.log(getNameLength("Julia"));

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

function getSubstring(string, length) {
  const substring = string.slice(0, length);
  return substring;
}
console.log(getSubstring("Javascript", 6));

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
  return result;
}

console.log(formatMessage("Vestibulum facilisis purus nec", 20));

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

console.log(normalizeInput("OnjwIOUkj"));

function checkForName(fullName, name) {
  const result = fullName.includes(name);

  return result;
}

console.log(checkForName("Korben Dallas", "Korben"));
console.log(checkForName("Korben Dallas", "korben"));

function checkForSpam(message) {
  let result;
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  return result;
}
console.log(checkForSpam("SPAM"));
console.log(checkForSpam("Hello"));
console.log(checkForSpam("SaLe"));

// TOPIC 3 ===========================    ARRAYS

console.log("topic 3");

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
  return "You are a minor";
}
console.log(checkAge(21));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}
console.log(checkPassword("qwerty"));

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
}
console.log(checkStorage(30, 15));

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
console.log(lastElementIndex);
console.log(lastElement);

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  return [firstElement, lastElement];
}
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));

function calculateEngravingPrice(message, pricePerWord) {
  let totalCost = message.split(" ").length * pricePerWord;
  return totalCost;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);

  return string;
}
console.log(makeStringFromArray(["best for week"], "_"));

function slugify(title) {
  let slug;
  slug = title.toLowerCase().split(" ").join("-");
  return slug;
}
console.log(slugify("How to become a JUNIOR developer for TWO WEEKS"));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(lastThreeEls);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients);
console.log(allClients);

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;
}
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

// TOPIC 4 ===========================   FUNCTIONS

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}
console.log(calculateTotal(7));

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 1; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));

function findLongestWord(string) {
  const arr = string.split(" ");
  console.log(arr);
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

function filterArray(numbers, value) {
  let newArray = [];
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 4));

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
}
console.log(checkFruit("mandarin"));
console.log(checkFruit("plum"));

function getCommonElements(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

function calculateTotalPrice(order) {
  let total = 0;
  for (const item of order) {
    total += item;
  }
  return total;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function filterArray(numbers, value) {
  let filteredNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 4));

// modulo (%) returns the integer remainder of the division of the two numbers, the dividend and the divisor.

// the variable a must be the number 0
// the variable b must be the number 1
// the variable c must be the number 3
// the variable d must be the number 5
// the variable e must be the number 2

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

function getEvenNumbers(start, end) {
  const evenArray = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;
}
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));

const st = 6;
const en = 27;
let number;

for (let i = st; i < en; i += 1) {
  if (i % 5 === 0) {
    number = i;
    console.log(number);
    break;
  }
}

// Refactor the findNumber(start, end, divisor) function so that it:

// returns the first number from in the range start to end, which is divisible by divisor without a remainder
// does not use the break operator
// does not use the variable number

function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log(findNumber(8, 17, 3));
console.log(findNumber(16, 35, 7));

function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);

// TOPIC 5 =========================== OBJECTS

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
  tags: ["premium", "promoted", "top"],
};

console.log(apartment.rating);
console.log(apartment.descr);
console.log(apartment.owner.phone);

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

console.log(aptTags);

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];

console.log(lastTag);
console.log(numberOfTags);

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

console.log(apartment.owner.name);

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

console.log(apartment.location.city);

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product.price);
console.log(product.tags);

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

console.log(credentials.email);
console.log(credentials.password);

const apt = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (key in apt) {
  if (apt.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apt[key]);
  }
}

console.log(key);
console.log(apt[key]);
console.log(keys);
console.log(values);

function countProps(object) {
  let propCount = 0;

  for (key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

const apartment1 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values1 = [];
const keys1 = Object.keys(apartment1);
for (const key of keys1) {
  values1.push(apartment1[key]);
}

console.log(keys1);
console.log(values1);

function countProps(object) {
  const propCount = [];
  const keys = Object.keys(object);
  for (const key of keys) {
    propCount.push(object[key]);
  }

  return propCount.length;
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (let color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}

const productsA = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let array = [];
  for (const product of productsA) {
    const keys = Object.keys(product);
    if (keys.includes(propName)) {
      array.push(product[propName]);
    }
  }
  return array;
}
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));

// const productsC = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let productCost = 0;
//   for (const product of productsC) {
//     if (product.name === productName) {
//       productCost = product.price * product.quantity;
//     }
//   }
//   return productCost;
// }
// console.log(calculateTotalPrice("Radar"));

console.log("end");
