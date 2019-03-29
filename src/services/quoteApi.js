export const getQuote = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json()); 
};
