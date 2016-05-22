(function(context) {

  var CardSetView = Backbone.View.extend({
    tagName: 'li',
    className: 'card-set',

    render: function() {
      console.log('rendering', this.model);
      this.$el.html('<div>' + this.model.get('name') + '</div>');
    }
  });

  context.CardSetView = CardSetView;

})(window.FlashCard.Views)
