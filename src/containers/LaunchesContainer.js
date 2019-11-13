import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

import Launch from '../components/Launch';

const LaunchesSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;
const LaunchSubHeading = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 25px;
  border-bottom: 2px solid #000000;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
`;

class LaunchesContainer extends React.Component {
  componentDidMount() {
    if (this.props.type === 'past') {
      this.props.getPastLaunchesData();
    } else {
      this.props.getFutureLaunchesData();
    }
  }
  render() {
    let displayLaunches = [];
    if (this.props.type === 'past') {
      displayLaunches = this.props.pastLaunches.map((launch) => {
        return (
          <Launch key={launch.flight_number} launchInfo={launch} type='past' />
        );
      });
    } else {
      displayLaunches = this.props.futureLaunches.map((launch) => {
        return (
          <Launch key={launch.flight_number} launchInfo={launch} type='future' />
        );
      });
    };
    return (
      <LaunchesSubContainer>
        <LaunchSubHeading>
          <div>Launch Date</div>
          <div>Mission Name</div>
          <div>Customer(s)</div>
          <div>Launch Site</div>
          <div>Rocket</div>
          {this.props.type === 'future' ? null : <div>Successs</div>}
          
        </LaunchSubHeading>
        {displayLaunches}
      </LaunchesSubContainer>
    );
  }
}

export default withData(LaunchesContainer);