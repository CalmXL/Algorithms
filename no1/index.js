

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns { number[]}
 */
var sumTwo = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const n = target - num;

    if (num in obj) {
      console.log(obj);
      return [i, obj[num]];
    } else {
      console.log(i);
      obj[n] = i;
    }
  }
};

/**
 * i = 0
 * num = 2; n = 7;
 * obj = {
 *   7: 0
 * }
 * 
 * i = 1
 * num = 7, n = 2;
 * [1, 0]
 */

const res = sumTwo([2, 7, 11, 13], 9);
console.log(res);
