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

})(window.FlashCard.Models);
