

Parse.initialize("rXS3bKysxBRibj6MnlCD");
Parse.serverURL = 'https://dry-forest-60293.herokuapp.com/parse/'


var TestObject = Parse.Object.extend("TestObject");


var testObject = new TestObject();
testObject.set('whatever', 'stuff ' + Math.random());
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});


var query = new Parse.Query(TestObject);
//query.equalTo("playerName", "Dan Stemkoski");
query.find({
  success: function(results) {
    console.log('results', results);
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.get('whatever'));
      //alert(object.id + ' - ' + object.get('playerName'));
    }
  },
  error: function(error) {
    console.log('error', error);
    alert("Error: " + error.code + " " + error.message);
  }
});
