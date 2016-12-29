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

// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//
//       firebase: Ember.inject.service(),
//       actions: {
//           submission: function(){
//               const ref = this.get('firebase');
//               ref.createUser({
//                   email: this.get('email'),
//                   password: this.get('password')
//               }, function(error, userData) {
//
//               if (error) {
//
//                   switch (error.code) {
//
//                       case "EMAIL_TAKEN":
//                           console.log('user already exists');
//                       break;
//                       case "INVALID_EMAIL":
//                           console.log('your email looks wrong');
//                       break;
//                       case "INVALID_PASSWORD":
//                           console.log('your password looks incorrect');
//                       break;
//                       default:
//                           console.log(error.message);
//
//                   }
//
//               } else {
//
//                   console.log('record added!');
//                   console.log(userData);
//
//               }
//
//
//               });
//
//           }
//       }
//
//
// });
