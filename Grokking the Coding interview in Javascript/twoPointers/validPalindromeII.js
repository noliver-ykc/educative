function validPalindrome(str) {
  let start = 0;
  let end = str.length-1;

  while(start < end){
    if(str[start] !== str[end]){
      return(isPalindromeRange(str, start+1, end ) || isPalindromeRange(str, start, end-1))
    }
    start++;
    end--;
  }
  return true
}

function isPalindromeRange(str, start, end) {
  while(start < end) {
    if(str[start] !== str[end]) return false
    start++;
    end--;
  }
  return true;
}

// https://leetcode.com/problems/valid-palindrome-ii/description/
