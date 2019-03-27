export const getQuote = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json()); 
};
