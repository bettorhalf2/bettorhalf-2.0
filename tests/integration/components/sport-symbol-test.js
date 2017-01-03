import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sport-symbol', 'Integration | Component | sport symbol', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sport-symbol}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sport-symbol}}
      template block text
    {{/sport-symbol}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
