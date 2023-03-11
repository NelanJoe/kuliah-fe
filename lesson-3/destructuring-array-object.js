/**
 * * Destructuring Object
 */

const req = {
  body: {
    name: "Budi Santoso",
    age: 21,
    height: 170,
  },
};

// Destructuring object
const { name: fullName, age, height } = req.body;

console.log(fullName, age, height);

// Array Destructring
const family = ["Michael", "Hanna", "Jonas"];

const [husband, wife, son] = family;
console.log(husband, wife, son);
