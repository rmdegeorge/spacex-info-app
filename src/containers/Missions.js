import React from 'react';
import {withData} from '../context-providers/DataProvider';
import styled from 'styled-components';

import Mission from '../components/Mission';

const MissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  align-items: center;
`;

const MissionsHeading = styled.h2`

`;

class Missions extends React.Component {
  componentDidMount() {
    this.props.getMissionsData();
  }
  render() {
    const displayMissions = this.props.missions.map((mission) => {
      return (
        <Mission key={mission.mission_id} missionInfo={mission} />
      );
    });
  
    return (
      <MissionsContainer>
        <MissionsHeading>Missions</MissionsHeading>
        {displayMissions}
      </MissionsContainer>
    );
  }
};

export default withData(Missions);