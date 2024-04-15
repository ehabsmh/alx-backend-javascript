export const weakMap = new WeakMap();

export const queryAPI = (endPoint) => {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 0);
  }

  if (weakMap.get(endPoint) && weakMap.get(endPoint) >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endPoint, weakMap.get(endPoint) + 1);
};
