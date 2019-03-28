import { getFavorites } from '../selectors/journal';
// import { getPublicNotes } from '../selectors/community';

export const getSearchTerm = state => state.search.searchTerm;

export const getFileteredNotes = state => {
  const searchTerm = getSearchTerm(state);
  return getFavorites(state).filter(note => {
    const { body } = note;
    return body.includes(searchTerm);
  })
}

