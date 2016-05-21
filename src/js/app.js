(function(context) {

  Parse.initialize("rXS3bKysxBRibj6MnlCD");
  Parse.serverURL = 'https://dry-forest-60293.herokuapp.com/parse/'

  console.log('context', context);




  /*


  var CardSet = Parse.Object.extend("CardSet");

  var cardSet = new CardSet();
  cardSet.set('name', 'default');
  cardSet.set('description', 'This is your default card set.');




cardSet.save(null, {
  success: function(successCardSet) {
    // Execute any logic that should take place after the object is saved.
    console.log('successCardSet', successCardSet);
    alert('New object created with objectId: ' + successCardSet.id);
  },
  error: function(errorCardSet, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('errorCardSet', errorCardSet, error);
    alert('Failed to create new object, with error code: ' + error.message);
  }
});



*/



})(window.FlashCard)
