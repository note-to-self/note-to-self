import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList, getFavorites } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
import { deleteNote } from '../actions/journal';
import { getSearchTerm } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array,
    favorites: PropTypes.array,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    searchTerm: PropTypes.string.isRequired
  }

  render() {
    const { journalList, handleSubmit, handleChange, searchTerm, } = this.props;
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
          handleChange={handleChange}
        />
        <ul>
          <li>My Notes</li>
          <li>Favorites</li>
        </ul>
        <JournalList 
          journalList={journalList}
          handleSubmit={handleSubmit}
        />
        {/* <Favorites 
          favorites={favorites}
          handleSubmit={handleSubmit}
        /> */}
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  journalList: getJournalList(state),
  favorites: getFavorites(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(id, event) {
    event.preventDefault();
    if(id) dispatch(deleteNote(id));
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
