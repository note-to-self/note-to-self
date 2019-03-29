import { fetchRandomQuote } from '../selectors/quote';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/quote';
import Quote from '../components/quote/Quote';
import { WithFetch } from '../components/WithFetch';


const mapStateToProps = (state) => ({
  quote: fetchRandomQuote(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    dispatch(fetchQuote());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithFetch(Quote));

