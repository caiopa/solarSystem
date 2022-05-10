import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import Mission from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="containerMiss" data-testid="missions">
        <Title headline="Missões" />
        <div className="contentMission">
          {Mission.map((missao) => (
            <MissionCard
              key={ missao.name }
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
/* Title.propTypes = {
  headline: PropTypes.string.isRequired,
}; */
export default Missions;
