import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('user');
  },

  // actions: {
  //   createUser() {
  //     let record = this.store.createRecord('user', {
  //       name: 'yo',
  //       email: 'Lorem@ipsum.com',
  //       password: '123456',
  //       availableBalance: 1200
  //     });
  //     return record.save().then().catch(e => {console.log(e.errors)});
  //   }
  // }
  
});
