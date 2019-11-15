import React, { Component } from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';
import {device} from '../themes/GlobalStyle';

import Rocket from '../components/Rocket';

const RocketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 75%;
  }
  @media ${device.computer} {
    width: 50%;
  }
`;

const RocketsHeading = styled.h2`
`;

const RocketsSubHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  border-bottom: 2px solid #000000;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

class Rockets extends Component {
  componentDidMount() {
    this.props.getRocketsData();
    this.props.updateWindowDimensions();
    window.addEventListener('resize', this.props.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.updateWindowDimensions);
  }
  render() {
    const displayRockets = this.props.rockets.map(rocket => (
      <Rocket key={rocket.id} detailed={false} rocketInfo={rocket} />
    ))
    return (
      this.props.rocketDetailsToggled.toggled 
      ?
      <RocketsContainer>
        <Rocket key={this.props.rocketDetailsToggled.id + 'popup'} detailed={true} rocketInfo={this.props.rockets.find(rocket => rocket.id === this.props.rocketDetailsToggled.id)} />
      </RocketsContainer>
      : 
      <RocketsContainer>
        <RocketsHeading>Rockets</RocketsHeading>
        <RocketsSubHeading>
          <div>Name</div>
          <div>Active</div>
          <div>First Flight</div>
          <div>Success Rate</div>
          <div>Cost per Launch</div>
        </RocketsSubHeading>
        {displayRockets}
        
      </RocketsContainer>
        
    );
  }
}

export default withData(Rockets);