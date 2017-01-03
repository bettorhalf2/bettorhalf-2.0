import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('user');
  },

  actions: {
    createUser() {
      let record = this.store.createRecord('user', {
        name: 'yo',
        email: 'Lorem ipsum',
        password: '123',
        availableBalance: 1200
      });
      return record.save().then().catch(e => {console.log(e.errors)});
    }
  }
  
});
