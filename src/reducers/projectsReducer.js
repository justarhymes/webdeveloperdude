import _ from 'lodash';
import { FETCH_PROJECT, FETCH_PROJECTS } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_PROJECT:
      action.payload.slug = action.payload.slugs[0];
      return { ...state, [action.payload.slugs[0]] : action.payload };
    case FETCH_PROJECTS:
      const results = action.payload.results;
      _.map(results, ( result, index ) => {
        result.slug = result.slugs[0];
      });
      return _.mapKeys(results, 'slug');
    default:
      return state;
  }
}
