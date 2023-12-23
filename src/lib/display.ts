export const joinTexts = (...texts: (string | undefined | null)[]) => texts.filter(t => t).join("");

export const displayNumber = (value: number, digits?: number) => parseFloat(value.toFixed(digits)).toLocaleString();
