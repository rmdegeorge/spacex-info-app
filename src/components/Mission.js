import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.div`
  width: 75%;
  box-sizing: border-box;
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 20px
`;

const MissionTitle = styled.div`
  border-bottom: 1px solid #000000;
`;

const MissionId = styled.div`
  margin-top: 5px;
`;

const MissionDescription = styled.div`
  margin-top: 5px;
`;

function Mission(props) {
  const {mission_id,mission_name,description,manufacturers,wikipedia,twitter,payload_ids} = props.missionInfo
  return (
    <MissionContainer>
      <MissionTitle>
        <strong>{mission_name}</strong>
      </MissionTitle>
      <MissionId>
        Mission ID: {mission_id}
      </MissionId>
      <MissionDescription>
        {description}
      </MissionDescription>
    </MissionContainer>
  );
}

export default Mission;