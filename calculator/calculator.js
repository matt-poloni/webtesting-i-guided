module.exports = {
  add,
};

function add(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
