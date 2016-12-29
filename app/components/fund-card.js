import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['fill', 'meter'],
  attributeBindings: ['aria-valuetransitiongoal:aria-valuetransitiongoal', 'aria-valuenow:aria-valuenow', 'percent:width'],

  didInsertElement: function () {
      //$('#' + this.elementId).css('width', this.get('percent') + '%');
  },

  someString: function() {
    console.log('this');
    return "width: " + this.get('percent') + "%";
  }.property('percent')
});
