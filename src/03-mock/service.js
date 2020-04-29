const users = [
  {
    name: "Ben",
    id: 1,
  },
  {
    name: "Anna",
    id: 2,
  },
  {
    name: "Eli",
    id: 3,
  },
];

export default {
  getName: (id) => {
    return users.find((user) => user.id === id) ? users[id] : "Unknown";
  },
};
