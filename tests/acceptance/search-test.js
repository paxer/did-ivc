import { module, test } from 'qunit';
import { visit, currentURL, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | search', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting home page / I can search and find recordings', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelector('[data-test-search-result]').textContent, 'Полная коллекция Дед ИВЦ - Дед ИВЦ(2004-2010)');

    await fillIn('[data-test-search-input]', 'Вещ');
    await triggerKeyEvent('[data-test-search-input]', 'keyup', 13);

    assert.equal(this.element.querySelector('[data-test-search-result]').textContent, 'вещи сопряжены');
    assert.equal(currentURL(), '/');
  });
});
