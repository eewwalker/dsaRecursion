import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if (words === null) return 0;

  const nextWordLength = longest(words.next);

  if (nextWordLength > words.val.length) {
    return nextWordLength
  } else {
    return words.val.length;
  }
}

export { longest };

/**
 *
 * ["hi", "hello", "hola"]


                    null            return 0
        { val:hola, next: null}         return 4
    {val: hello, next: hola}                return 5
{val: hi, next: hello}                          return 5
*/
