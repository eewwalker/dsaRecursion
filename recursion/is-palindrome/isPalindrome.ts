/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  if (str[0] !== str[str.length - 1]) return false;

  if (str.length < 2) return true;

  return isPalindrome(str.slice(1, -1));
}

export { isPalindrome };


/**
 * "tacocat"
 *

          o     return true
        coc       return true
      acoca         return true
    tacocat           return true
 */