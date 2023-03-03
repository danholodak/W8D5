function sum() {
    let count = 0
    let args = Array.prototype.slice.call(arguments)
    args.forEach(arg => {
        count += arg;
    })
    return count
}
// console.log(sum(1,2,3,4,5))
function sum2(...args) {
    count = 0
    args.forEach(arg => {
        count += arg;
    })
    return count
}
// console.log(sum2(1,2,3,4,5))

Function.prototype.myBind = function(context) {
    let bindArgs = Array.prototype.slice.call(arguments).slice(1)
    let binder = this
    return function() {
        let callArgs = Array.prototype.slice.call(arguments)
        return binder.apply(context, bindArgs.concat(callArgs))
    }
}

Function.prototype.myBind2 = function(context, ...bindArgs) {
    let binder = this
    return function(...callArgs) {
        return binder.call(context, ...bindArgs, ...callArgs)
    }
}

function curriedSum(numArgs){
  let numbers = [];
  return function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      return numbers.reduce((a, b) => {
        return a+b
      })
    }else{
      return _curriedSum
    }
  }
}

// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   let func = this;
//   return function _curry(arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return _curry;
//     } else {
//       return func.apply(this, args);
//     }
//   }
// }

Function.prototype.curry = function(numArgs) {
  let args = [];
  let func = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length < numArgs) {
      return _curry;
    } else {
      return func(...args);
    }
  }
}

function sum(a, b, c){
  console.log(a+b+c);
}

let a = sum.curry(3)

a(1)
a(2)
a(3)