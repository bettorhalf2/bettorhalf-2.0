import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing', { path: '/' });
  this.route('signin');
  this.route('funds');
  this.route('instruction');
  this.route('signup');
  this.route('instruction2');
  this.route('instruction3');
  this.route('fund', { path: '/funds/:fund_id' });
  this.route('football');
  this.route('basketball');
  this.route('baseball');
  this.route('soccer');
  this.route('hockey');
});

export default Router;
