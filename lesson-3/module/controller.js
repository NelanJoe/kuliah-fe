import users from "./data.js";

const index = () => {
  users.map((user) => {
    console.log(`${user}`);
  });
};

const store = (user) => {
  const newUsers = [...users, user];

  newUsers.map((user) => {
    console.log(user);
  });
};

const update = (id, user) => {
  users[id] = user;

  index();
};

const destroy = (id) => {
  users.splice(id, 1);

  index();
};

export { index, store, update, destroy };
