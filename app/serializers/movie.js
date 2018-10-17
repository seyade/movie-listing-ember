import DS from 'ember-data';
import { singularize } from 'ember-inflector';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { movies: payload.results };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  
  keyForRelationship(key, typeClass, method) {
    // represents "genre_ids" props in movies
    return `${singularize(key)}_ids`;
  }
});
