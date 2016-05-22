(function(context) {

  console.log('card-set model', context);

  var CardSet = context.CardSet = Parse.Object.extend('CardSet', {

    promptName: function() {
      var setName = prompt('Give me the name of the set.');
      console.log('setName', setName);
      this.set({ name: setName });
    }

  });

  /*
  var cardSet = new context.Models.CardSet();

  //cardSet.on('change', function() {
  //  console.log('general change event', arguments);
  //});

  //cardSet.on('change:name', function(model, name) {
  //  console.log('change:name', model, name);
  //});

  cardSet.promptName();

  cardSet.save();
  */

  /*
  // Parse sample

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

})(window.FlashCard.Models);
