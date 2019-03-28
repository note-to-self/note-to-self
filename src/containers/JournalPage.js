import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList, getFavorites } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
import Favorites from '../components/journal/Favorites';
import { deleteNote, fetchFaves } from '../actions/journal';
import { getSearchTerm } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array,
    favorites: PropTypes.array,
    handleDelete: PropTypes.func,
    handleChange: PropTypes.func,
    handleUnfavorite: PropTypes.func,
    searchTerm: PropTypes.string.isRequired
  }

  render() {
    const { journalList, handleDelete, handleChange, searchTerm, favorites, handleUnfavorite } = this.props;
    return (
      <>
      <header>
        <h1>Journal</h1>
        <h2>This is where you can find all of your scheduled affirmation notes</h2>
      </header>
      <main>
        <Search 
          searchTerm={searchTerm}
          onChange={handleChange}
        />
        <ul>
          <li>My Notes</li>
          <li>Favorites</li>
        </ul>
        <JournalList 
          journalList={journalList}
          handleDelete={handleDelete}
        />
        <Favorites 
          favorites={favorites}
          handleUnfavorite={handleUnfavorite}
        />
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
  handleDelete(id, event) {
    event.preventDefault();
    if(id) dispatch(deleteNote(id));
  },
  handleUnfavorite(id, event) {
    event.preventDefault();
    dispatch();
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
