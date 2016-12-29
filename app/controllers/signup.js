import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),

  actions: {

createUser(email, pass) {
  const auth = this.get('firebaseApp').auth();
  auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
    const user = this.store.createRecord('user', {
      id: userResponse.uid,
      email: userResponse.email
    });
    return user.save();
  });
}

  }

});
