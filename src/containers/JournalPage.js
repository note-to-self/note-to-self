import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList, getFavorites, isToggle } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
import Favorites from '../components/journal/Favorites';
import { deleteNote, fetchJournalList, updateToggle } from '../actions/journal';
import { fetchFaves, updateFaves } from '../actions/favorites';
import { getSearchTerm } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array,
    favorites: PropTypes.array,
    handleDelete: PropTypes.func,
    handleChange: PropTypes.func,
    handleUnfavorite: PropTypes.func,
    handleClick: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    fetchJournal: PropTypes.func,
    fetchFavorites: PropTypes.func,
    toggle: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetchJournal();
    this.props.fetchFavorites();
  }

  render() {
    const { journalList, handleDelete, handleChange, searchTerm, favorites, handleUnfavorite, toggle, handleClick } = this.props;
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
          <li onClick={handleClick} id='journal'>My Notes</li>
          <li onClick={handleClick} id='favorites'>Favorites</li>
        </ul>
        {!toggle && <JournalList 
          journalList={journalList}
          handleDelete={handleDelete}
        />}
        {toggle && <Favorites 
          favorites={favorites}
          handleUnfavorite={handleUnfavorite}
        />}
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  journalList: getJournalList(state),
  favorites: getFavorites(state),
  searchTerm: getSearchTerm(state),
  toggle: isToggle(state)
});

const mapDispatchToProps = dispatch => ({
  fetchFavorites() {
    dispatch(fetchFaves());
  },
  fetchJournal() {
    dispatch(fetchJournalList());
  },
  handleDelete(id, event) {
    event.preventDefault();
    if(id) dispatch(deleteNote(id));
  },
  handleUnfavorite(note, event) {
    event.preventDefault();
    dispatch(updateFaves(note));
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
  handleClick({ target }) {
    const toggle = target.id === 'favorites' ? true : false; 
    dispatch(updateToggle(toggle));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
