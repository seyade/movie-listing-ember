import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import EmberObject from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.movie = EmberObject.create({
      title: 'a movie title',
      poster_path: 'movie-poster-image.jpg',
      genres: [{name: 'Action'}, {name: 'Comedy'}, {name: 'Romance'}]
    });
  })

  test('should show movie title', async function(assert) {
    await render(hbs`{{movie-list-item movie=movie}}`);

    assert.equal(this.element.querySelector('.movie__title').textContent.trim(), 'a movie title');
  });

  test('should display movie poster', async function(assert) {
    await render(hbs`{{movie-list-item movie=movie}}`);

    assert.equal(
      this.element.querySelector('.movie__image').src, 
      'https://image.tmdb.org/t/p/w200/movie-poster-image.jpg'
    );
  });

  test('should show movie genre', async function(assert) {
    await render(hbs`{{movie-list-item movie=movie}}`);

    assert.equal(this.element.querySelector('.movie__genre-item').textContent.trim(), 'Action');
  });
});
