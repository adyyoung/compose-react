export const compose = (...functions) => component =>
  functions.reduce((comp, func) => func(comp), component);
