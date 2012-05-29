describe( "Person", function() {
  var person;
  beforeEach( function() {
    person = new Person('name1', 1111111111 );
  });

  it("should be able to have a name, a phone number", function () {
    var person2;
    person2 = new Person('Name1', 2222222222 );
    expect(person2.getName()).toEqual('Name1');
  });

  it('should have more than one phonenumber', function() {
    person.addPhone( 1234567890 );
    expect(person.getPhoneNumbers()).toEqual([ 1111111111, 1234567890 ]);
  });
});
