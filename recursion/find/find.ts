/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  // Keep calling the find function until we're at the end of arr
  // Base case will be [], which returns False

  if (arr.length === 0) return false;

  if (arr[0] === val) return true;
  return find(arr.slice(1), val);
}

export { find };