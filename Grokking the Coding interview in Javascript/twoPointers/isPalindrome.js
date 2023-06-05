function isPalindrome(str){
    let start = 0;
    let end = str.length-1;
    let mid = end/2;
  
    while(start < mid) {
      if(str[start] === str[end]){
        
        start += 1;
        end -= 1;
      } else {
        return false;
      }
    }
    return true;
  
  }
  
  console.log(isPalindrome("bob")) // true;
  console.log(isPalindrome("RACEACAR")) // false;