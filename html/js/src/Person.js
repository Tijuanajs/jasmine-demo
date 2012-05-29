// visit: http://addyosmani.com/resources/essentialjsdesignpatterns/book/
//

function Person( name, phone_number ){
  this.name = name;
  this.phone_numbers = [];
  this.phone_numbers.push( phone_number );
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.addPhone = function( phone_number ) {
  this.phone_numbers.push( phone_number );
}

Person.prototype.getPhoneNumbers = function() {
  return this.phone_numbers;
}
