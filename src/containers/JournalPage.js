import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList, getFavorites, isToggle } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
import Favorites from '../components/journal/Favorites';
import Header from '../containers/HeaderContainer';
import { deleteNote, fetchJournalList, updateToggle } from '../actions/journal';

import { fetchFaves, updateFaves } from '../actions/favorites';
import { getSearchTerm, getFiltered } from '../selectors/search';
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
    userId: PropTypes.string.isRequired,
    toggle: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired

  }

  componentDidMount() {
    this.props.fetchJournal(this.props.userId);
    this.props.fetchFavorites(this.props.userId);
    console.log('FAVS', this.props.favorites);
  }
  
  render() {
    const { journalList, handleDelete, handleChange, searchTerm, favorites, handleUnfavorite, handleClick, toggle } = this.props;

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
          <li onClick={handleClick}>My Notes</li>
          <li onClick={handleClick}>Favorites</li>
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
  journalList: getFiltered(state, getJournalList(state)),
  favorites: getFavorites(state),
  searchTerm: getSearchTerm(state),
  userId: getUserId(state),
  toggle: isToggle(state)

});

const mapDispatchToProps = dispatch => ({
  fetchFavorites(id) {
    dispatch(fetchFaves(id));
  },
  fetchJournal(id) {
    dispatch(fetchJournalList(id));
  },
  handleDelete(id, event) {
    console.log('ID FROM HANDLE DELETE', id);
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
