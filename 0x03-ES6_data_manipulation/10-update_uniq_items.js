export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) throw new Error('Cannot process');

  for (const [k, v] of groceriesList) {
    if (v === 1) {
      groceriesList.set(k, 100);
    }
  }

  return groceriesList;
}
