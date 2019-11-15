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

`;

const LaunchesHeading = styled.h2`
  width: 100%;
  margin-top: 50px;
`;
const JumpLink = styled.a`
  font-size: 11pt;
  color: #000000;
  text-decoration: none;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid #000000
  }
`;
function Launches(props) {
  return (
    <AllLaunches>
      <LaunchesHeading>Past Launches: <JumpLink href="#futureLaunches">Jump to Future Launches</JumpLink></LaunchesHeading>
      <LaunchesContainer type='past' />
      <LaunchesHeading id="futureLaunches">Future Launches:</LaunchesHeading>
      <LaunchesContainer type='future' />
    </AllLaunches>
  );
}

export default withData(Launches);