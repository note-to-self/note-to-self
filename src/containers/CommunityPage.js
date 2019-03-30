import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import Search from '../components/search/Search';
import { getSearchTerm, getFiltered } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';
import { getPublicNotes } from '../selectors/community';
import PropTypes from 'prop-types';
import CommunityList from '../components/community/CommunityList';
import { addFaves, fetchFaves } from '../actions/favorites';
import { fetchNotes } from '../actions/community';
import styles from 'styled-components';
import community from '../../assets/images/community.jpg';
import HeaderContainer from './HeaderContainer';
import { getFavorites } from '../selectors/journal';

const CommunityHeader = styles.header`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  padding-top: 0;
  text-align: center
  background-image: url(${community});
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
    text-shadow: 1pt 1.5pt grey;
  }
`;

const CommunitySearch = styles.section`
  width: 50%;
  padding: -1em 1em 1em 1em;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;

const UlStyle = styles.ul`
  list-style: none;
  padding: 0;
`;
class CommunityPage extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func,
    communityList: PropTypes.array,
    favorites: PropTypes.array,
    handleFavorite: PropTypes.func,
    searchTerm: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      communityList,
      favorites,
      handleFavorite,
      searchTerm,
      handleChange
    } = this.props;
    return (
      <>
        <main>
          <CommunityHeader>
            <HeaderContainer />
            <h1>Community Messages</h1>
            <h2>Inspired by a message? Check to save</h2>
            <CommunitySearch>
              <Search
                searchTerm={searchTerm}
                onChange={handleChange}
              />
            </CommunitySearch>
          </CommunityHeader>
          <section>
            <UlStyle>
              <CommunityList
                favorites={favorites}
                communityList={communityList}
                handleFavorite={handleFavorite}
              />
            </UlStyle>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  communityList: getFiltered(state, getPublicNotes(state)),
  favorites: getFavorites(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
    dispatch(fetchFaves());
  },
  handleFavorite(id) {
    dispatch(addFaves(id));
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);
