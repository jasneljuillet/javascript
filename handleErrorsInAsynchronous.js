function calculSquare(number, callback) {
  setTimeout(() => {
    const result = number * number;
    callback(result);
  }, 1000);
}

function calculSquare2(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      throw new Error("Invalide parametere type, number must be number type");
      const result = number * number;
      callback(result);
    }
  }, 1000);
}
const callback = (result) => {
  console.log(`Result : ${result}`);
};
calculSquare(5, callback); //25, if number is not number type we will get NaN
calculSquare2(5, callback); //25, if number is not number type Error will shows
