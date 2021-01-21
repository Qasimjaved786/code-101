function addFive(number) {
  const someVariable = "you can't see me outside this function";
  return number + 5;
}
//"someVariable" is a variable which will works inside of the block,if i write console-thing outside the block than it won`t work;

addFive(10);
console.log(someVariable);