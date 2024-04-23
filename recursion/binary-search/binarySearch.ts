/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  if (left > right) return false;

  const idx = left + Math.floor((right - left) / 2);

  if (arr[idx] === val) return true;

  if (arr[idx] > val) {
    return binarySearch(
      arr,
      val,
      left,
      right = idx - 1);
  } else {
    return binarySearch(
      arr,
      val,
      left = idx + 1,
      right)
  }
}

export { binarySearch };

/**
 *
 *    arr: [1, 2], val: 11, left = 2, right = 2     idx = 1
 * arr: [1, 2], val: 11, left = 0, right = 2     idx = 1

 */