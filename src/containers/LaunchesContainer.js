import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';
import {device} from '../themes/GlobalStyle';

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
  
  grid-template-rows: auto;
  border-bottom: 2px solid #000000;
  box-sizing: border-box;
  width: 100%;
  padding: 0 5px 10px 5px;
  margin: 0 5px 10px 5px;
  font-size: 12px;
  font-weight: bold;
  ${props => 
    props.size ==='mobile'
    ?
    `
    grid-template-columns: 2fr 1fr 1fr 1fr;
    `
    :
    props.size === 'tablet'
      ?
      `
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      `
      :
      `
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
      `
  }
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

    let size;
    this.props.windowSize.width < 425 ? size = 'mobile' : this.props.windowSize.width < 768 ? size = 'tablet' : size = 'computer'

    let displayLaunches = [];
    if (this.props.type === 'past') {
      displayLaunches = this.props.pastLaunches.map((launch) => {
        return (
          <Launch key={launch.flight_number} launchInfo={launch} type='past' size={size} />
        );
      });
    } else {
      displayLaunches = this.props.futureLaunches.map((launch) => {
        return (
          <Launch key={launch.flight_number} launchInfo={launch} type='future' size={size} />
        );
      });
    };
    return (
      <LaunchesSubContainer>
        <LaunchSubHeading size={size}>
          <div>Launch Date</div>
          <div>Mission Name</div>
          {size === 'mobile' || size === 'tablet' ? null : <div>Customer(s)</div>}
          {size === 'mobile' ? null : <div>Launch Site</div>}
          <div>Rocket</div>
          {this.props.type === 'future' ? null : <div>Successs</div>}
          
        </LaunchSubHeading>
        {displayLaunches}
      </LaunchesSubContainer>
    );
  }
}

export default withData(LaunchesContainer);