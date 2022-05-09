import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName={ Planets.name } planetaImage={ Planets.image } />
      </div>
    );
  }
}

export default SolarSystem;
