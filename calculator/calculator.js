module.exports = {
  add,
};

function add(...args) {
  return args.reduce((sum, num) => {
    return sum + num;
  }, 0);
}
