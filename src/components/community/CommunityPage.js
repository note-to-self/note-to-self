import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import Search from '../search/Search';
import { getSearchTerm } from '../../selectors/search';
import { updateSearchTerm } from '../../actions/search';
import { getCommunityList } from '../../selectors/community';
import PropTypes from 'prop-types';
import CommunityList from './CommunityList';
import { updateCheckbox } from '../../actions/community';


class CommunityPage extends PureComponent {
  static propTypes = {
    communityList: PropTypes.array,
    handleCheckbox: PropTypes.func,
    searchTerm: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func
  }
  render() {
    const { communityList, handleCheckbox, searchTerm, handleChange, handleSubmit } = this.props;
    return (
      <>
      <header>
        <h1>Community Messages</h1>
        <h2>Like any specific message? Save to your favorites and send.</h2>
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
            handleCheckbox={handleCheckbox}
            handleSubmit={handleSubmit}
          />
        </ul>
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  communityList: getCommunityList(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {
    event.preventDefault();
  },
  handleCheckbox({ target }) {
    dispatch(updateCheckbox(target.value));
  },
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);


