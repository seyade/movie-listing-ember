import DS from 'ember-data';

const apiKey = '723383cc6998c4f69c4b7fff40a393c2'

export default DS.RESTAdapter.extend({
  host: `https://api.themoviedb.org/`,
  namespace: '3',

  pathForType() {
    return `genre/movie/list?api_key=${apiKey}`;
  },
});
