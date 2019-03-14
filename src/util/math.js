export function mean(itr) {
  let sum = 0;
  let count = 0;
  for (let item of itr) {
    sum += item;
    count += 1;
  }
  return sum / count;
}

export function stddev(itr) {
  return Math.sqrt(variance(itr));
}

export function variance(itr) {
  let sum = 0;
  let count = 0;
  let sumOfSquares = 0;
  for (let item of itr) {
    sum += item;
    sumOfSquares += item * item;
    count += 1;
  }
  let mean = sum / count;
  // variance = sum(X^2) / N - mean(X)^2
  return sumOfSquares / count - mean * mean;
}

export function roundToPlaces(value, places) {
  let pow10 = Math.pow(10, places);
  return Math.round(value * pow10) / pow10;
}

/**
 * js Math.min and Math.max will cause stack overflow for large array size
 * @param {numnber array} arr
 */
export function minInArray(arr) {
  if (!arr) return undefined;
  return arr.reduce((acc, x) => {
    return acc < x ? acc : x;
  }, arr[0]);
}

export function maxInArray(arr) {
  if (!arr) return undefined;
  return arr.reduce((acc, x) => {
    return acc > x ? acc : x;
  }, arr[0]);
}
