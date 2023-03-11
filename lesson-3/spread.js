/**
 * * Spread Operator
 */

// Spread Array
const family = ["Michael", "Hannah"];
const newFamily = [...family, "Susan"];

console.log(newFamily);

// Spread Object
const user = {
  name: "Budi Santoso",
  age: 20,
};

const newUser = {
  ...user,
  major: "Infomatics",
};

console.log(newUser);
