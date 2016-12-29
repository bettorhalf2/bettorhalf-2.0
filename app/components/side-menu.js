import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
session: Ember.inject.service('session'),

  actions: {
    open () {
      $('.sidemenu').css('left', '0');
      $('.sidemenu').css('box-shadow', '2px 0 1px rgba(1,1,1,.5)');
    },

    close () {
      $('.sidemenu').css('left', '-300px');
      $('.sidemenu').css('box-shadow', '0 0 rgba(1,1,1,.5)');
    },
    signOut() {
        this.get('session').close();
      }

  }
});
