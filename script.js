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

console.log("end");
