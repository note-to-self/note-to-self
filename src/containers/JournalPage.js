import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList, getFavorites } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
import Favorites from '../components/journal/Favorites';
import Header from '../containers/HeaderContainer';
import { deleteNote, fetchJournalList } from '../actions/journal';
import { fetchFaves, updateFaves } from '../actions/favorites';
import { getSearchTerm } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';
import styles from 'styled-components';
import { getUserId } from '../selectors/session';

const JournalHeader = styles.header `
  margin: 0 auto;
  text-align: center

  h2 {

  }
`;

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array,
    favorites: PropTypes.array,
    handleDelete: PropTypes.func,
    handleChange: PropTypes.func,
    handleUnfavorite: PropTypes.func,
    searchTerm: PropTypes.string.isRequired,
    fetchJournal: PropTypes.func,
    fetchFavorites: PropTypes.func,
    userId: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetchJournal(this.props.userId);
    this.props.fetchFavorites(this.props.userId);
  }
  
  render() {
    const { journalList, handleDelete, handleChange, searchTerm, favorites, handleUnfavorite } = this.props;
    console.log('JournalList', this.props.journalList);
    return (
      <>
      <Header />
      <main>
        <JournalHeader>
          <h1>Journal</h1>
          {journalList && <h2>This is where you can find all of your scheduled affirmation notes</h2>}
        </JournalHeader>
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
  searchTerm: getSearchTerm(state),
  userId: getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  fetchFavorites(id) {
    dispatch(fetchFaves(id));
  },
  fetchJournal(id) {
    dispatch(fetchJournalList(id));
  },
  handleDelete(id, event) {
    event.preventDefault();
    if(id) dispatch(deleteNote(id));
    dispatch(fetchJournalList(id));
  },
  handleUnfavorite(note, event) {
    event.preventDefault();
    dispatch(updateFaves(note));
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
