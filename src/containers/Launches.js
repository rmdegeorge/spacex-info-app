import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

import LaunchesContainer from './LaunchesContainer';

const AllLaunches = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  align-items: center;
  margin: 10px auto;
  box-sizing: border-box;

`;

const LaunchesHeading = styled.h2`
  width: 100%;
  box-sizing: border-box;
`;

function Launches(props) {
  return (
    <AllLaunches>
      <LaunchesHeading>Past Launches:</LaunchesHeading>
      <LaunchesContainer type='past' />
      <LaunchesHeading>Future Launches:</LaunchesHeading>
      <LaunchesContainer type='future' />
    </AllLaunches>
  );
}

export default withData(Launches);