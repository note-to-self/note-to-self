import { getFavorites } from '../selectors/journal';
// import { getPublicNotes } from '../selectors/community';

export const getSearchTerm = state => state.search.searchTerm;

import { getFavorites } from '../selectors/journal';
// import { getPublicNotes } from '../selectors/community';


export const getFiltered = (state, theArray) => {
  const searchTerm = getSearchTerm(state);
  const lowerCaseSearch = searchTerm.toLowerCase();
  return theArray.filter(note => {
    const { body } = note;
    const lowerCaseBody = body.toLowerCase();

    return lowerCaseBody.includes(lowerCaseSearch);
  });
}
;

