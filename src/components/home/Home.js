import React, { PureComponent } from 'react';
// import styles from 'styled-components';
// import homeImage from '../../../assets/images/home-image.jpg';
import 'normalize.css';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

// const HomeImage = styles.body`
// @media (min-width: 375px) {
//   background-image: url(${homeImage}); 
//   height: 100vh; 
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 100vw 100vh;
// }
// `;
export default class Home extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    public: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { date, time, message, onChange, handleSubmit } = this.props;
    return (
    <>
    <header>
      <nav>
        <Link to='/home'> HOME </ Link>
        <Link to='/auth'> AUTH </ Link>
        <Link to='/login'> LOGIN </ Link>
        <Link to='/auth'><button type="button" onClick={this.props.logout}>LOGOUT</button></ Link>
      </nav>
    </header>
    <main>
      <section>
        <form onSubmit={handleSubmit.bind(null, time, date, message, this.props.public)}> 
          <label> Public
            <input type="checkbox" value={this.props.public} onChange={onChange} id="public"/>
          </label>
          <section>
            <label> Date
              <input type="date" value={date} onChange={onChange} id="date" />
            </label>
            <label> Time
              <input type="time" value={time} onChange={onChange} id="time"/>
            </label> 
            <label> Message
              <textarea rows="8" cols="50" value={message} onChange={onChange} id="message"/>
            </label> 
          </section>
          <button onClick={handleSubmit}>Create Note</button>
        </form>
      </section>
    </main>
    </>
    );
  }
}
