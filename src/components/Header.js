import React from 'react';
import Title from './Title';

class Header extends React.Component {
  render() {
    return (
      <header className="contentHeader">
        <Title headline="Sistema Solar" />
      </header>
    );
  }
}

export default Header;
