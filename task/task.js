/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    id: 1,
    name: "Aufa Billah",
    age: 23,
    major: "Teknik Informatika",
  },
  {
    id: 2,
    name: "Nurul Ulfah",
    age: 21,
    major: "Sistem Informasi",
  },
  {
    id: 3,
    name: "Susan Safira",
    age: 23,
    major: "Bisnis Digital",
  },
  {
    id: 4,
    name: "Annisa",
    age: 23,
    major: "Sistem Informasi",
  },
  {
    id: 5,
    name: "Mas Agung",
    age: 23,
    major: "Teknik Mesin",
  },
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const user of users) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Major: ${user.major}`);
    console.log();
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (newUser) => {
  users.push(newUser);
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (id, editedUser) => {
  const index = users.findIndex((user) => user.id !== id);

  if (id !== index) {
    console.log(`Error not found with user ${id}`);
  }

  users[index] = {
    ...users[index],
    ...editedUser,
  };

  all();
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (id) => {
  const index = users.findIndex((user) => user.id !== id);

  if (id !== index) {
    console.log(`Error not found user with ${id}`);
  }

  users.splice(id, 1);

  all();
};

/**
 * Function main.
 */
const main = () => {
  console.log(`# Get All Users`);
  all();

  console.log(`# Add New User`);
  const newUsers = {
    id: 6,
    name: "Sabiq",
    age: 20,
    major: "Teknik Informatika",
  };
  store(newUsers);

  console.log(`# Edit Users`);
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(1, editedUser);

  console.log(`# Delete User`);
  destroy(1);
};

main();
