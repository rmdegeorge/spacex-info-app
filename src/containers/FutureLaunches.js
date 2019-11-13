import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

import Launch from '../components/Launch';

const FutureLaunchesContainer = styled.div``;

class FutureLaunches extends React.Component {
  componentDidMount() {
    this.props.getFutureLaunchesData();
  };
  render() {  
    const displayFutureLaunches = this.props.futureLaunches.map((launch) => {
      return (
        <Launch key={launch.flight_number} launchInfo={launch} />
      );
    });

    return (
      <FutureLaunchesContainer>
        {displayFutureLaunches}
      </FutureLaunchesContainer>
    );
  }
}

export default withData(FutureLaunches);