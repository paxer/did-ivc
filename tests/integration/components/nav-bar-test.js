import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

//Stub database service
const databaseStub = Service.extend({
    quotes: null,

    init() {
      this._super(...arguments);
      this.quotes = ['quote 1'];
    }
  },
);

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function(/* assert */) {
    this.owner.register('service:database', databaseStub);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`{{nav-bar}}`);

    assert.equal(this.element.textContent.trim(), 'quote 1');

    // Template block usage:
    await render(hbs`
      {{#nav-bar}}
        template block text
      {{/nav-bar}}
    `);

    assert.equal(this.element.textContent.trim(), 'quote 1');
  });
});
