function App() {
  function Animal(typeOfAnimal) {
    var self = this;
    self.type = typeOfAnimal;
    return self;
  }

  Animal.prototype.setName = function (name) {
    var self = this;
    self.name = name;
    return self;
  }

  Animal.prototype.setLegs = function (legs) {
    var self = this;
    self.legs = legs;
    return self;
  };

  Animal.prototype.setColor = function (color) {
    var self = this;
    self.color = color;
    return self;
  };

  Animal.prototype.setTail = function (tail) {
    var self = this;
    self.tail = tail;
    return self;
  };

  Animal.prototype.setFood = function (food) {
    var self = this;
    self.setFood = food;
    return self;
  };

  Animal.prototype.setChildren = function (children) {
    var self = this;
    self.children = children;
    return self;
  };

  Animal.prototype.breed = function () {
    var self = this;
    if (self.children == undefined) {
      self.children = 1;
    } else {
      self.children = self.children + 1;
    }
    return self;
  }

  Animal.prototype.serialize = function () {
    var self = this;
    var objAnimal = {
      type: self.type,
      name: self.name,
      legs: self.legs,
      bodyColor: self.color,
      tailLength: self.tail,
      typeOfFood: self.food,
      numberOfChildren: self.children
    };
    return (JSON.stringify(objAnimal));
  };

  Animal.prototype.save = function () {
    var self = this;
    window.localStorage.setItem(self.name, self.serialize());
  }

  var kalu = new Animal("dog");
  kalu.setName("Kalua");
  kalu.setLegs(4);
  kalu.setColor("black");
  kalu.setTail("short");
  kalu.setFood("gu");
  kalu.setChildren(3);
  kalu.breed();
 
  kalu.save();
  
  var man = new Animal("humanBeing");
  man.setName("khepu");
  man.setLegs(2);
  man.setColor("wheat");
  man.setTail("none");
  man.setFood("cake");
  man.breed();
  man.save();
}


$("body").ready(function () {
  App();
})


function Foo() {}
Foo.prototype.setName = function (name) {
  this.name = name;
};


function Bar() {
  
};
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.setColor = function(color) {
  this.color = color;
};

var x1 = new Foo();
var x2 = new Bar();
