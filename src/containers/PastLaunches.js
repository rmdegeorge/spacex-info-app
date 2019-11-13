import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

import Launch from '../components/Launch';

const PastLaunchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

`;

class PastLaunches extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getPastLaunchesData();
  }
  render() {  
    const displayPastLaunches = this.props.pastLaunches.map((launch) => {
      return (
        <Launch key={launch.flight_number} launchInfo={launch} />
      );
    });
    return (
      <PastLaunchesContainer>
        {displayPastLaunches}
      </PastLaunchesContainer>
    );
  }
}

export default withData(PastLaunches);