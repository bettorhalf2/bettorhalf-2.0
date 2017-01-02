import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  currentInvestorCount: DS.attr(),
  minInvestment: DS.attr(),
  symbol: DS.attr(),
  maxTotalInvestment: DS.attr(),
  currentTotalInvestment: DS.attr(),
  sport: DS.attr(),
  targetReturn: DS.attr(),
  closingTime: DS.attr('Date'),
});
