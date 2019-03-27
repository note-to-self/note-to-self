import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList } from '../../selectors/journal';
import Search from '../search/Search';
import JournalList from './JournalList';
import { updateCheckbox, deleteNote } from '../../actions/journal';
import { getSearchTerm } from '../../selectors/search';
import { updateSearchTerm } from '../../actions/search';

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array,
    handleSubmit: PropTypes.func,
    handleCheckbox: PropTypes.func,
    searchTerm: PropTypes.string.isRequired
  }

  render() {
    const { journalList, handleCheckbox, handleSubmit, searchTerm } = this.props;
    return (
      <>
      <header>
        <h1>Journal</h1>
        <h2>This is where you can find all of your scheduled affirmation notes</h2>
      </header>
      <main>
        <Search 
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
        />
        <ul>
          <li>My Notes</li>
          <li>Favorites</li>
        </ul>
        <JournalList 
          journalList={journalList}
          handleCheckbox={handleCheckbox}
          handleSubmit={handleSubmit}
        />
        {/* <Favorites /> */}
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  journalList: getJournalList(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(id, event) {
    event.preventDefault();
    if(id) dispatch(deleteNote(id));
  },
  handleCheckbox({ target }) {
    dispatch(updateCheckbox(target.value));
  },
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
