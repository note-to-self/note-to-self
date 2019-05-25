import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import Search from '../components/search/Search';
import { getSearchTerm, getFiltered } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';
import { getPublicNotes } from '../selectors/community';
import PropTypes from 'prop-types';
import CommunityList from '../components/community/CommunityList';
import { updateFaves } from '../actions/favorites';
import { fetchNotes } from '../actions/community';
import HeaderContainer from './HeaderContainer';
import {
  NotesContainer,
  SearchContainer
} from '../components/journal/JournalStyles';
import {
  CommunityHeader
} from '../components/community/CommunityStyles';

class CommunityPage extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func,
    communityList: PropTypes.array,
    handleFavorite: PropTypes.func,
    searchTerm: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { communityList, handleFavorite, searchTerm, handleChange } = this.props;
    return (
      <>
      <main>
        <CommunityHeader>
          <HeaderContainer />
          <h1>Community Messages</h1>
          {/* <h2>Inspired by a message? Check to save</h2> */}
          <SearchContainer>
            <Search
              searchTerm={searchTerm}
              onChange={handleChange}
            />
          </SearchContainer>
        </CommunityHeader>
        <NotesContainer>
          <CommunityList
            communityList={communityList}
            handleFavorite={handleFavorite}
          />
        </NotesContainer>
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  communityList: getFiltered(state, getPublicNotes(state)),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  handleFavorite(id, event) {
    event.preventDefault();
    dispatch(updateFaves({ id }));
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);


