/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const key = nums[mid];
    if (target === key) {
      return mid;
    } else if (target < key) {
      right = mid - 1;
    } else if (target > key) {
      left = mid + 1;
    }
  }
  if (nums[left] < target) {
    return left + 1;
  }
  return left;
};