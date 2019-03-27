import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getJournalList } from '../../selectors/journal';
import Search from '../search/Search';
import JournalList from './JournalList';
import { updateCheckbox } from '../../actions/journal';

class JournalPage extends PureComponent {
  static propTypes = {
    journalList: PropTypes.array
  }



  render() {
    return (
      <>
      <header>
        <h1>Journal</h1>
        <h2>This is where you can find all of your scheduled affirmation notes</h2>
      </header>
      <main>
        <Search />
        <ul>
          <li>My Notes</li>
          <li>Favorites</li>
        </ul>
        <JournalList />
        {/* <Favorites /> */}
      </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  journalList: getJournalList(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {
    event.preventDefault();
    dispatch();
  },
  handleCheckbox({ target }) {
    dispatch(updateCheckbox(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalPage);
