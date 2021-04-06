Function.prototype.bindThis = function (obj, ...rest) {
  const fn = this;
  console.log(arguments.length);
  return function (...args) {
    return fn.call(obj, rest.concat(args));
  }
};
let b = {a:2}
function test() {
  console.log(arguments.length);
  this.a = 1
}
test.bindThis(b,555)
test(666)
let c = new test()
console.log(c);
