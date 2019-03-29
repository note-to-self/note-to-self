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
import styles from 'styled-components';
import community from '../../assets/images/community.jpg';
import HeaderContainer from './HeaderContainer';
import { Input } from '../components/search/Search';


const CommunityHeader = styles.header `
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  padding-top: 0;
  text-align: center
  background-image: url(${community});
  height: 40vh;
  width: 50vw;
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
  form {
    margin-top: 4em;
  }
  width: 50%;
  padding: -1em 1em 1em 1em;
  background: white;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1pt 1pt grey;
`;

const CommunityInput = styles(Search) `
    vertical-align: 10px;
    background: none;
    border-style: none;
    border-bottom: 1pt solid #568697;
    display: block;
    width: 100%
    margin-top: 3em;
    color: #568697;
`;

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
      <main>
        <CommunityHeader>
          <HeaderContainer>
            <h1>Community Messages</h1>
            <h2>Inspired by a message? Check to save</h2>
          </HeaderContainer>
          <CommunitySearch>
            <CommunityInput
              searchTerm={searchTerm}
              handleSubmit={handleSubmit}
              onChange={handleChange}
            />
          </CommunitySearch>
        </CommunityHeader>
        <section>
          <ul>
            <CommunityList
              communityList={communityList}
              handleFavorite={handleFavorite}
            />
          </ul>
        </section>
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


