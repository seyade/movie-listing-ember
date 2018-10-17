import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | movies-panel', function(hooks) {
  setupRenderingTest(hooks);

  const model = EmberObject.create({
    movies: [{title: 'A movie title'}],
    genres: [{name: 'Action'}],
  });

  test('it should contain movies data', async function(assert) {
    this.set('model', model);

    await render(hbs`{{movies-panel model=model}}`);

    assert.equal(this.element.querySelector('.movie__title').textContent.trim(), 'A movie title');
  });

  test('it should contain genres data', async function(assert) {
    this.set('model', model);

    await render(hbs`{{movies-panel model=model}}`);

    assert.equal(this.element.querySelector('.genres__item').textContent.trim(), 'Action');
  });
});
