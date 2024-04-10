export default function guardrail(mathFunction) {
  const queue = [0, 'Guardrail was processed'];

  try {
    const val = mathFunction();
    queue[0] = val;
  } catch (err) {
    queue[0] = `Error: ${err.message}`;
  }

  return queue;
}
