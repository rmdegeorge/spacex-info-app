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
  constructor(props) {
    super(props);
  };
  render() {
    console.log('Missions')
    console.log(this.props.missions)
    const displayMissions = this.props.missions.map((mission) => {
      return (
        <Mission key={mission.mission_id} missionInfo={mission} />
      )
    })
    return (
      <MissionsContainer>
        <MissionsHeading>Missions</MissionsHeading>
        {displayMissions}
      </MissionsContainer>
    );
  };
};

export default withData(Missions);