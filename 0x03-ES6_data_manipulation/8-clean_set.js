export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const unique = [...set];
  const bonElements = unique.filter((ele) => ele.startsWith(startString))
    .map((bon) => bon.slice(startString.length));

  return bonElements.join('-');
}
