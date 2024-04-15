export default function hasValuesFromArray(set, array) {
  let test = false;
  const uniqueArr = [...set];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < uniqueArr.length; j += 1) {
      if (array[i] === uniqueArr[j]) {
        test = true;
        break;
      } else test = false;
    }
  }

  return test;
}
