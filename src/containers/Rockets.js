import React, { Component } from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

import Rocket from '../components/Rocket';

const RocketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  margin: 0 auto;

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
`;

class Rockets extends Component {
  componentDidMount() {
    this.props.getRocketsData();
  }
  render() {
    const displayRockets = this.props.rockets.map(rocket => (
      <Rocket key={rocket.id} detailed={false} rocketInfo={rocket} />
    ))
    return (
      <RocketsContainer>
        {
          this.props.rocketDetailsToggled.toggled 
          ?
          <Rocket key={this.props.rocketDetailsToggled.id + 'popup'} detailed={true} rocketInfo={this.props.rockets.find(rocket => rocket.id === this.props.rocketDetailsToggled.id)} />
          : 
          null
        }
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