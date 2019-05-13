module.exports = {
  add,
};

function add(nums) {
  const numbers = Array.isArray(nums)
    ? nums
    : [...arguments];
  return numbers.reduce((sum, num) => {
    return sum + num
  }, 0);
}
