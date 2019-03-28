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
    const { communityList, handleFavorite, searchTerm, handleChange, handleSubmit } = this.props;
    return (
      <>
      <header>
        <h1>Community Messages</h1>
        <h2>Inspired by a message? Check to save</h2>
      </header>
      <main>
        <Search
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
          onChange={handleChange}
        />
        <ul>
          <CommunityList
            communityList={communityList}
            handleFavorite={handleFavorite}
          />
        </ul>
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
  handleFavorite(note, event) {
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
)(CommunityPage);


