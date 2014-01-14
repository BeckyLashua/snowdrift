var person = {
  firstname: "becky",
  lastname: "lashua",
}

var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname  = lastname;
  
  this.getFullName = function() {
    return firstname + " " + lastname;
  }
}

var becky = new Person("becky", "lashua");

console.log(becky.getFullName());