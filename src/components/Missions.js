import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}
/* Title.propTypes = {
  headline: PropTypes.string.isRequired,
}; */
export default Missions;
