const request = jest.genMockFromModule("../request-async");

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

request.getName = (id) => {
  return new Promise((resolve, reject) => {
    const match = users.find((user) => user.id === id);
    match ? resolve(match) : reject(`User with ${id} not found.`);
  });
};

export default request;
