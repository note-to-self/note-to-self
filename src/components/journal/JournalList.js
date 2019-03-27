import { connect } from 'react-redux';
import { getJournalList } from '../../selectors/journal';


const mapStateToProps = state => ({
  journalList: getJournalList(state) 
});

export default connect(

)();
