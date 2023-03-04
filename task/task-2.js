let users = [
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
];

const uniqueId = () => {
  return Math.random().toLocaleString(36).substring(2, 6);
};

const all = () => {
  users.map((user) => {
    console.log(`Id: ${user.id}`);
    console.log(`Nama: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Major: ${user.major}`);
    console.log();
  });
};

const store = (newUser) => {
  users = [...users, newUser];

  all();
};

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

const destroy = (id) => {
  const index = users.findIndex((user) => user.id !== id);

  if (id !== index) {
    console.log(`Error not found user with ${id}`);
  }

  users.splice(id, 1);

  all();
};

const main = () => {
  console.log(`# Get All Users`);
  all();

  console.log(`# Add New User`);
  const newUsers = {
    id: uniqueId(),
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
