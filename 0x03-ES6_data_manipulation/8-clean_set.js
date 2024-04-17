export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const unique = [...set];
  const bonElements = unique.filter((ele) => ele && ele.startsWith(startString))
    .map((bon) => bon.slice(startString.length));

  return bonElements.join('-');
}
