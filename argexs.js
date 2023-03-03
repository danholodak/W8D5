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

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true