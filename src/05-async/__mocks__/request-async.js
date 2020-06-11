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
  
};

export default request;
