export const getQuote = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=jsonp', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json());
};
