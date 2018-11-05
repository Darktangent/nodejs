var square = (num) => {
  var result = num * num
  return result
}
console.log(square(9))

var add = (num1, num2) => num1 + num2
console.log(add(90, 91))

var user = {
  name: 'Rohan',
  sayHi() {
    console.log(`Hi. I am ${this.name}`)
  }
}
user.sayHi()