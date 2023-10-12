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

// TOPIC 6 ===================================== DESTRUCTURING

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(yesterday);
// console.log(icon);

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

const colors1 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors1 = [];
const rgbColors1 = [];

for (const { hex, rgb } of colors1) {
  hexColors1.push(hex);
  rgbColors1.push(rgb);
}
console.log(hexColors1);

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

console.log(highTomorrow);

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
);

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(worstScore);

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(allScores);
console.log(bestScore);

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  const task = {
    category: "General",
    priority: "Normal",
    ...data,
    completed: false,
  };

  return task;
}

console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(74, 11, 62, 46, 12, 36));

function addOverNum(specifiedNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > specifiedNumber) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

function findMatches(array, ...args) {
  const matches = [];
  for (const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
  },
};
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    return this.potions;
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
      }
    }
    return this.potions;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
      }
    }
    return this.potions;
  },
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);

// TOPIC 8 ============================= CALLBACKS AND ARROW FUNCTIONS

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return onSuccess(pizzaName);
      }
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};

function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! ${error}`;
}

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item, index) {
    totalPrice += orderedItems[index];
  });

  return totalPrice;
}

console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([12, 85, 37, 4]));

/**
 * Filter array function
 * @param {number} numbers
 * @param {number} value
 * @returns {number} filtered array of numbers higher than value
 */

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 38));

/**
 * compares two arrays
 * @param {array} firstArray
 * @param {array} secondArray
 * @returns the elements the arrays have in common
 */
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (item) {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  });

  return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));

const calculateTtlPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

// const calculateTtlPrice = (quantity, pricePerItem) => quantity * pricePerItem;
console.log(calculateTtlPrice(5, 100));

const calculateTotalPr = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};

console.log(calculateTotalPr([12, 85, 37, 4]));

// ====== REFACTORED AS ARROW FUNCTION ================

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }

// TOPIC 9 ================= ITERATING METHODS =============

function changeEven(numbers, value) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i] + value);
    } else {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(({ title }) => title);
console.log(titles);

const booksA = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = booksA.flatMap(({ genres }) => genres);
console.log(genres);

const getUserNames = (users) => {
  return users.map(({ name }) => name);
};

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
  ])
);

const getUserEmails = (users) => {
  return users.map(({ email }) => email);
};
console.log(
  getUserEmails([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
    },
  ])
);

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 === 1);
console.log(evenNumbers);
console.log(oddNumbers);

const booksB = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = booksB.flatMap(({ genres }) => genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);
console.log(allGenres);
console.log(uniqueGenres);

const booksC = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = booksC.filter(({ rating }) => rating >= MIN_RATING);
const booksByAuthor = booksC.filter(({ author }) => author === AUTHOR);

console.log(booksByAuthor);
console.log(topRatedBooks);

const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};
console.log(
  getUsersWithEyeColor(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
      },
    ],
    "green"
  )
);

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(({ age }) => age >= minAge && age <= maxAge);
};
console.log(
  getUsersWithAge(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37,
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24,
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21,
      },
    ],
    30,
    40
  )
);

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};
console.log(
  getUsersWithFriend(
    [
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24,
      },
    ],
    "Marilyn Mcintosh"
  )
);

const getFriends = (users) => {
  return users
    .flatMap(({ friends }) => friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};

console.log(
  getFriends([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
  ])
);

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

const booksD = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR1 = "Robert Sheckley";

const bookWithTitle = booksD.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = booksD.find(({ author }) => author === AUTHOR1);

console.log(bookWithTitle);
console.log(bookByAuthor);

/**
 *function that returns a user object whose email address (the email property) matches the value of the email parameter.
 * @param {string} users
 * @param {string} email
 * @returns a user object
 */

const getUserWithEmail = (users, email) => {
  return users.find(({ email: userEmail }) => userEmail === email);
};

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((number) => number % 2);

const eachElementInSecondIsEven = secondArray.every(
  (number) => number % 2 === 0
);
const eachElementInSecondIsOdd = secondArray.every((number) => number % 2 != 0);

const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2);

/**
 *function that checks if all users are currently active (the isActive property)
 * @param {string} users
 * @returns true or false
 */
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};

const firstArr = [26, 94, 36, 18];
const secondArr = [17, 61, 23];
const thirdArr = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArr.some((number) => number % 2 === 0);
const anyElementInFirstIsOdd = firstArr.some((number) => number % 2);

const anyElementInSecondIsEven = secondArr.some((number) => number % 2 === 0);
const anyElementInSecondIsOdd = secondArr.some((number) => number % 2 != 0);

const anyElementInThirdIsEven = thirdArr.some((number) => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArr.some((number) => number % 2 != 0);

const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive);
};

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);

/**
 *Our service needs to calculate the average time spent on one game for each player, and get the total amount of these times. You can calculate the time for each of the players by dividing its time (the playtime property) by the number of games (the gamesPlayed property).
 */

const playersB = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = playersB.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed,
  0
);
console.log(totalAveragePlaytimePerGame);

/**
 *calculates and returns the sum of all funds (the balance property) stored by users from the users array
 * @param {string} users
 * @returns
 */
const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};

/**
 * it counts and returns the total number of friends (the friends property) of all users from the users array
 * @param {string} users
 * @returns {number}
 */
const getTotalFriendCount = (users) => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);

const releaseDatesA = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDatesA = [...releaseDatesA].sort((a, b) => a - b);

const descendingReleaseDatesA = [...releaseDatesA].sort((a, b) => b - a);

console.log(ascendingReleaseDatesA);
console.log(descendingReleaseDatesA);

const authorsA = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = [...authorsA].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authorsA].sort((a, b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

const booksE = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...booksE].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...booksE].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...booksE].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...booksE].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
];

const sortByAscendingBalance = (users) => {
  return [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );
};
console.log(sortByAscendingBalance(users));

const sortByDescendingFriendCount = (users) => {
  return [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );
};
console.log(sortByDescendingFriendCount(users));

const sortByName = (users) => {
  return [...users].sort((firstUser, secondUser) =>
    firstUser.name.localeCompare(secondUser.name)
  );
};
console.log(sortByName(users));

const booksF = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = booksF
  .filter(({ rating }) => rating > MIN_BOOK_RATING)
  .map(({ author }) => author)
  .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));
console.log(names);

// returns an array of usernames sorted in ascending order by the number of their friends (the friends property)
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length
    )
    .map(({ name }) => name);
};

// returns an array of unique friends' names (the friends property) sorted alphabetically
const getSortedFriends = (users) => {
  return users
    .flatMap(({ friends }) => friends)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort((a, b) => a.localeCompare(b));
};

// returns the total balance of users (the balance property) whose gender (the gender property) matches the value of the gender parameter
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(({ gender: userGender }) => userGender === gender)
    .reduce((total, user) => total + user.balance, 0);
};

// =================== TOPIC 10 THIS ================

const pizzaPalace1 = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace1.order("Four meats"));
console.log(pizzaPalace1.order("Viennese"));

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],

  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
};

console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(child.surname);

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent1 = Object.create(ancestor);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child1.name = "Jason";
child1.age = 27;

console.log(parent1.heritage);
console.log(child1.name);

// TOPIC 11 ===================== CLASSES ===========================

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}
const instance = new Car({ brand: "Audi", model: "Q3", price: 36000 });
instance.changePrice(35000);
console.log(instance.getPrice());

// ===================================================

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexToRemove = this.items.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());

// ===================================================

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = this.value.concat(str);
  }

  padStart(str) {
    this.value = str.concat(this.value);
  }

  padBoth(str) {
    this.value = str.concat(this.value, str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=

// ===================================================

class Cars {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
    return this.#brand;
  }
}
const instance1 = new Cars({ brand: "Audi", model: "Q3", price: 36000 });
console.log(instance1);
console.log(instance1.getBrand());
console.log(instance1.changeBrand("Volvo"));
console.log(instance1.getBrand());

// ===================================================

class Storage1 {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage1 = new Storage1(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage1.addItem("Droid");
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage1.removeItem("Prolonger");
console.log(storage1.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ===================================================

class StringBuilder1 {
  // Change code below this line
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder1 = new StringBuilder1(".");
console.log(builder1.getValue()); // "."
builder1.padStart("^");
console.log(builder1.getValue()); // "^."
builder1.padEnd("^");
console.log(builder1.getValue()); // "^.^"
builder1.padBoth("=");
console.log(builder1.getValue()); // "=^.^="

// ===================================================

class Bike {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// =================STATIC PROPERTIES============================

class Car5 {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car5.MAX_PRICE >= newPrice) this.#price = newPrice;
  }
}

const audi = new Car5({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// =========================================

class Car6 {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (Car6.#MAX_PRICE < price) {
      return "Error! Price exceeds the maximum";
    } else {
      return "Success! Price is within acceptable limits";
    }
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi6 = new Car6({ price: 36000 });
const bmw6 = new Car6({ price: 64000 });

console.log(Car6.checkPrice(audi6.price)); // "Success! Price is within acceptable limits"
console.log(Car6.checkPrice(bmw6.price)); // "Error! Price exceeds the maximum"

// =============================

class User5 {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User5 {
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);

// ===================================================

class User7 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin7 extends User7 {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
}

const mango7 = new Admin7({
  email: "mango@mail.com",
  accessLevel: Admin7.AccessLevel.SUPERUSER,
});

console.log(mango7.email); // "mango@mail.com"
console.log(mango7.accessLevel); // "superuser"

// ===================================================
class User8 {
  email;
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin8 extends User8 {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    } else {
      return false;
    }
  }
}

const mango8 = new Admin8({
  email: "mango@mail.com",
  accessLevel: Admin8.AccessLevel.SUPERUSER,
});

console.log(mango8.email); // "mango@mail.com"
console.log(mango8.accessLevel); // "superuser"

mango8.blacklist("poly@mail.com");
console.log(mango8.blacklistedEmails); // ["poly@mail.com"]
console.log(mango8.isBlacklisted("mango@mail.com")); // false
console.log(mango8.isBlacklisted("poly@mail.com")); // true

console.log("end");
