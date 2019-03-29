import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList, getFavorites, isToggle } from '../selectors/journal';
import Search from '../components/search/Search';
import JournalList from '../components/journal/JournalList';
import Favorites from '../components/journal/Favorites';
import HeaderContainer from '../containers/HeaderContainer';
import { deleteNote, fetchJournalList } from '../actions/journal';
import { fetchFaves, updateFaves } from '../actions/favorites';
import { getSearchTerm, getFiltered } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';
import styles from 'styled-components';
import { getUserId } from '../selectors/session';
import image from '../../assets/images/journal.png';

const JournalHeader = styles.header `
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  padding-top: 0;
  text-align: center
  background-image: url(${image});
  height: 40vh;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-family: 'Muli', sans-serif;
    color: white;
    letter-spacing: .09em;
    text-shadow: 1pt 1.5pt grey;
  }
  h2 {
    font-family: 'Muli', sans-serif;
    color: white;
    letter-spacing: .04em;
    text-shadow: 1pt 2pt grey;
  }
`;

const JournalMain = styles.main`
  height: 100vh;
  background-size: 50vw 100vh;
`;

const SearchContainer = styles.section`
  width: 50%;
  padding: -1em 1em 1em 1em;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;


const Container = styles.ul`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
 display: grid;
 grid-template-columns: 50% 50%;
 margin-left: auto;
 margin-right: auto;
 margin-top: 2em;
 list-style: none;
 padding: 0;
 font-size: 1.4em;
 li {
   text-align: center;
   font-family: 'Muli', sans-serif; 
   list-style: none;
  }
   h3 {
     border-bottom: black solid 1px;
   }
 }
`;

const NotesContainer = styles.section`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
 display: grid;
 grid-column-gap: .5em;
 grid-template-columns: 50% 50%;
 margin-left: auto;
 margin-right: auto;
 margin-top: 2em;
 list-style: none;
 padding: 0;
 font-size: 1.4em;
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

  }

  componentDidMount() {
    this.props.fetchJournal(this.props.userId);
    this.props.fetchFavorites(this.props.userId);
  }
  
  render() {
    const { journalList, handleDelete, handleChange, searchTerm, favorites, handleUnfavorite } = this.props;
    return (
      <>
      <JournalMain>
        <JournalHeader>
          <HeaderContainer/>
          <h1>Journal</h1>
          {journalList && <h2>This is where you can find all of your scheduled affirmation notes</h2>}
          <SearchContainer>
            <Search 
              searchTerm={searchTerm}
              onChange={handleChange}
            />
          </SearchContainer>
        </JournalHeader>
        {/* <ToggleContainer> */}
        <Container>
          <li>My Notes</li>
          <li>Favorites</li>
        </Container>
        {/* </ToggleContainer> */}
        <NotesContainer>
          <JournalList 
            journalList={journalList}
            handleDelete={handleDelete}
          />
          {!favorites && <Favorites 
            favorites={favorites}
            handleUnfavorite={handleUnfavorite}
          />}
        </NotesContainer>
      </JournalMain>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
