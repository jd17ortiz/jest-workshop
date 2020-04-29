export default (...numbers) => {
  const x = numbers[0];
  const y = numbers[1];

  if (
    typeof x !== "number" ||
    (numbers.length === 2 && typeof y !== "number")
  ) {
    throw new Error("Invalid arguments");
  }

  if (numbers.length === 1) {
    return x;
  }

  return x + y;
};
