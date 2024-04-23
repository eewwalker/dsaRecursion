/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) return -1;


  if (arr[0] === val) {
    return 0;

  } else {
    let result = findIndex(arr.slice(1), val);
    return result === -1 ? -1 : 1 + result;
  }





  // if (arr[0] === val) {
  //   return 0;
  // } else {
  //   return 1 + findIndex(arr.slice(1), val);
  // }

}

/**   val: 3   idx: 2
 * if arr[0] === val
 *    return i
 *
 *        findIndex([3]) 0
 *     findIndex([2, 3])  1
 *  findIndex([1, 2, 3]) 1
 */

export { findIndex };