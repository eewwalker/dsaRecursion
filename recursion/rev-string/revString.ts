/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if (!str) return '';
  return str[str.length - 1] + revString(str.slice(0, -1));
}

export { revString };