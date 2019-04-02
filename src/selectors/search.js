export const getSearchTerm = state => state.search.searchTerm;

export const getFiltered = (state, theArray) => {
  const searchTerm = getSearchTerm(state);
  const lowerCaseSearch = searchTerm.toLowerCase();
  return theArray.filter(note => {
    const { body } = note;
    const lowerCaseBody = body.toLowerCase();

    return lowerCaseBody.includes(lowerCaseSearch);
  });
};
