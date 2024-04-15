export default function updateUniqueItems(groceriesList) {
  for (const [k, v] of groceriesList) {
    if (v === 1) {
      groceriesList.set(k, 100);
    }
  }

  return groceriesList;
}
