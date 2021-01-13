function calculSquare(number, callback) {
  setTimeout(() => {
    const result = number * number;
    callback(result);
  }, 1000);
}

function calculSquare2(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected."));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}
let callback = (error, result) => {
  if (error !== null) {
    console.log("Caught error: " + String(error));
    return;
  }
  console.log(result);
};
calculSquare(5, callback); //25, if number is not number type we will get NaN
calculSquare2("Jasnel", callback); //25, if number is not number type Error will shows
