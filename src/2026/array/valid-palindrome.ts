export type ValidPalindromeInput = string;

export function isPalindrome(input: ValidPalindromeInput): boolean {
  const maybePalindrome = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    if (char.toLowerCase().match('[a-z]')) {
      maybePalindrome.push(char);
    }
  }
  let left = 0;
  let right = maybePalindrome.length - 1;
  while (left <= right) {
    if (maybePalindrome[left] !== maybePalindrome[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
