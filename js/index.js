const strictEquals = (valueA, valueB) => {
  if (isNaN(valueA) && isNaN(valueB)) {
    return false;
  } else if (Number(!valueA) && Number(!valueB)) {
    return true;
  }
  return Object.is(valueA, valueB);
};

console.log(strictEquals(1, 1)); // true
console.log(strictEquals(NaN, NaN)); // false
console.log(strictEquals(0, -0)); // true
console.log(strictEquals(-0, 0)); // true
console.log(strictEquals(1, "1")); // false
console.log(strictEquals(true, false)); // false
console.log(strictEquals(false, false)); // true
console.log(strictEquals("Water", "oil")); // false
