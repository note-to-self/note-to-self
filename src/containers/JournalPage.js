import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
// import Favorites from '../components/journal/Favorites';
import HeaderContainer from '../containers/HeaderContainer';
import { deleteNote, fetchJournalList } from '../actions/journal';
import { fetchFaves } from '../actions/favorites';
import { getSearchTerm, getFiltered } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';
import { getUserId } from '../selectors/session';
import {
  Header,
  Main,
  SearchContainer,
  SectionContainer,
  NotesContainer
} from '../components/journal/JournalStyles';

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array,
    // favorites: PropTypes.array,
    handleDelete: PropTypes.func,
    handleChange: PropTypes.func,
    // handleUnfavorite: PropTypes.func,
    searchTerm: PropTypes.string.isRequired,
    fetchJournal: PropTypes.func,
    fetchFavorites: PropTypes.func,
    userId: PropTypes.string.isRequired,

  }

  componentDidMount() {
    this.props.fetchJournal(this.props.userId);
    this.props.fetchFavorites(this.props.userId);
  }
  
  render() {
    const { journalList, handleDelete, handleChange, searchTerm } = this.props;
    return (
      <>
      <Main>
        <Header>
          <HeaderContainer/>
          <h1>Journal</h1>
          {journalList && <h2>This is where you can find all of your scheduled affirmation notes</h2>}
          <SearchContainer>
            <Search 
              searchTerm={searchTerm}
              onChange={handleChange}
            />
          </SearchContainer>
        </Header>
        <SectionContainer>
          <li>My Notes</li>
          {/* <li>Favorites</li> */}
        </SectionContainer>
        <NotesContainer>
          <JournalList 
            journalList={journalList}
            handleDelete={handleDelete}
          />
          {/* {!favorites && <Favorites 
            favorites={favorites}
            handleUnfavorite={handleUnfavorite}
          />} */}
        </NotesContainer>
      </Main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  journalList: getFiltered(state, getJournalList(state)),
  // favorites: getFavorites(state),
  searchTerm: getSearchTerm(state),
  userId: getUserId(state),

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
  // handleUnfavorite(note, event) {
  //   event.preventDefault();
  //   dispatch(updateFaves(note));
  // },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
