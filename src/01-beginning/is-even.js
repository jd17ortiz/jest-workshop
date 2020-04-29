import add from "./add";

export default (x, y) => {
  let calculation = add(x, y);
  return calculation % 2 === 0;
};
