import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      funds: this.store.findAll('fund'),
      user: this.store.findAll('user')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'funds', model.funds);
    Ember.set(controller, 'user', model.user);
  }
});
