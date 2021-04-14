const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const item2 = euroCities[1];
console.log(item2);

euroCities[0] = "Berlin";
console.log(euroCities);

console.log(euroCities.length);

euroCities.pop();
console.log(euroCities);

euroCities.push("Budapest");
console.log(euroCities);

const asianCities = ["Tokio", "Peking", "Hong-Kong", "Seoul", "Bankog"];
console.log(asianCities);

const selectedCities = asianCities.slice(1,4);
console.log(selectedCities);

const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

const reversedCities = worldCities.reverse();
console.log(reversedCities);

worldCities[2] = "Toronto";
console.log(worldCities);

worldCities.splice(1, 0, 'Washington');
console.log(worldCities);

let string = worldCities.join(", ");
console.log(string);

let sentence = "Hello World";
let splitString = sentence.split("");
let reverseString = splitString.reverse();
console.log(reverseString.join(""));



