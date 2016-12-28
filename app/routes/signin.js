import Ember from 'ember';

export default Ember.Route.extend({
  login: function() {
  let controller = this.get('controller');
  let email = controller.get('userEmail');
  let password = controller.get('userPassword');
  this.get('session').open('firebase', {
    provider: 'password',
    email: email,
    password: password
  }).then(function() {
    this.transitionTo('protected');
  }.bind(this));
}
});