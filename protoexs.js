
Function.prototype.inherits = function(Parent) {
    let Child = this;
    function Surrogate() {}
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
}

Function.prototype.inherits2 = function(Parent) {
    let Child = this;
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);