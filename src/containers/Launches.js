import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

import Launch from '../components/Launch';

const LaunchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  align-items: center;
  margin-top: 10px;
`;

const LaunchesHeading = styled.h2``;

function Launches(props) {
  const displayLaunches = props.launches.map((launch) => {
    return (
      <Launch key={launch.flight_number} launchInfo={launch} />
    );
  });

  return (
    <LaunchesContainer>
      <LaunchesHeading>Launches</LaunchesHeading>
      {displayLaunches}
    </LaunchesContainer>
  );
}

export default withData(Launches);