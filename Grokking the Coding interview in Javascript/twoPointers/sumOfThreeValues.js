export function findSumOfThree(nums, target) {
  nums = nums.sort((a,b) => a - b);

  for(let i = 0; i < nums.length-2; i++){
    let low = i + 1;
    let high = nums.length - 1;
    

    while(low < high){
      let curSum = (nums[i] + nums[low] + nums[high]);
      if(curSum < target){
        low++;
      } else if(curSum > target){
        high--;
      } else {
        return true;
      }
    }
  }
  return false;
}
