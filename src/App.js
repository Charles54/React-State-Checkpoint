import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Prince Ndukwe',
        bio: 'I am a full stack web developer at GOMYCODE Nigeria',
        imgSrc: 'https://drive.google.com/file/d/1L8yoYj7JN8SpcbX_q7i9o5OO6E48W0sp/view?usp=sharing',
        profession: 'Full Stack Web Developer'
      },
      showProfile: false,
      elapsedTime: 0
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile
    }));
  };

  renderProfile() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    return (
      <div className="profile">
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <img src={imgSrc} alt="Profile" />
        <p>Profession: {profession}</p>
      </div>
    );
  }

  render() {
    const { showProfile, elapsedTime } = this.state;

    return (
      <div className="app">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {showProfile && this.renderProfile()}
        <p className="elapsed-time">Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
