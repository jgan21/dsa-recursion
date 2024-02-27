import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  //base case
  if (words === null) return 0;

  let wordLength = words.val.length;
  return Math.max(wordLength, longest(words.next));
}

export { longest };


// banana, apple, strawberry

// 1. longestWord = 5
// 2. longestWord = 6