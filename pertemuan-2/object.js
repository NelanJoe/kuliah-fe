/**
 * * Object
 */

const user = {
  name: "Joko",
  age: 25,
  address: "Depok, Jawa, Barat",
};

// console.log(`Nama: ${user.name} | With [] => ${user["name"]}`);

for (let label in user) {
  console.log(user[label]);
}
