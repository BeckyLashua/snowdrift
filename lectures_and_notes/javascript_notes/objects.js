var y = ['string', 1, true, function() {console.log("Printing from function inside object x");},];

var x = {
  a: 'string',
  b: 1,
  c: true,
  f: function() {
    console.log("Printing from function inside object x");
  },
}

// object oriented notation
console.log(x.a);
x.f();

// array notation
console.log(y[0]);
y[3]();

var Person = function (name, phone) {
  var person = {
    name: name,
    phone: phone,
  }
  
  return person;
}

var becky = Person("Becky", 5084954098);
console.log(becky.phone);

var object = {
  data: "some data",
  changeData: function() {
    this.data = "some new data";    
  }
}

console.log(object.data); // some data
object.changeData();
console.log(object.data); // some new data