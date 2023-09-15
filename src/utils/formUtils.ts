export const setValueAsNumber = (value: string) =>
  isNaN(parseFloat(value)) ? undefined : parseFloat(value);
