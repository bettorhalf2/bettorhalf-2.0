import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  email: DS.attr(),
  availableBalance: DS.attr(),
  approvedBettor: DS.attr(),
  investedBalance: DS.attr(),
  name: DS.attr()
});
