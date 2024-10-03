function analyzeArray(arr) {
  try {
    let sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    let length = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let average = sum / length;

    return {
      average: average,
      min: min,
      max: max,
      length: length,
    };
  } catch (e) {
    return e;
  }
}

export { analyzeArray };
