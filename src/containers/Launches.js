import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';
import {device} from '../themes/GlobalStyle';

import LaunchesContainer from './LaunchesContainer';

const AllLaunches = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  align-items: center;
  margin: 10px auto;
  
`;

const LaunchesHeading = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  > div {
    font-size: 20pt;
    font-weight: bold;
    
  }
  > a {
    margin: 0 25px 15px 0;
  }
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;

    > div {
      font-size: 20pt;
      font-weight: bold;
      margin: 0 auto 15px 0;
    }
  }
  @media ${device.computer} {
    flex-direction: row;
    align-items: center;

    > div {
      font-size: 20pt;
      font-weight: bold;
      margin: 0 auto 15px 0;
    }
  }
  
`;
const JumpLink = styled.a`
  font-size: 10pt;
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  background-color: #000000;
  padding: 8px;
  width: 185px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  :hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    border: 2px solid #000000;
  }
  @media ${device.tablet} {
    margin: 0 0 auto auto;
  }
  @media ${device.computer} {
    margin: 0 0 auto auto;
  }
  
`;
class Launches extends React.Component {

  componentDidMount() {
    this.props.updateWindowDimensions();
    window.addEventListener('resize', this.props.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.updateWindowDimensions);
  }
  render() {
    return (
      <AllLaunches>
        <LaunchesHeading>
          <div>Past Launches: </div>
          <JumpLink href="#futureLaunches">Jump to Future Launches</JumpLink>
        </LaunchesHeading>
        <LaunchesContainer type='past' />
        <LaunchesHeading id="futureLaunches">
          <div>Future Launches:</div>
        </LaunchesHeading>
        <LaunchesContainer type='future' />
      </AllLaunches>
    );
}
}

export default withData(Launches);