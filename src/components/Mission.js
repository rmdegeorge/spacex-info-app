import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

const MissionContainer = styled.div`
  width: 75%;
  box-sizing: border-box;
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 20px
  box-shadow: 14px 10px 21px 0px rgba(31,31,31,1);

`;

const MissionTitle = styled.div`
  border-bottom: 1px solid #000000;
`;

const MissionLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MissionId = styled.div`
  margin-top: 5px;
`;

const MissionDescription = styled.div`
  margin-top: 5px;
`;

class Mission extends React.Component {

  render() {
    const {mission_id,mission_name,description,manufacturers,wikipedia,twitter,payload_ids} = this.props.missionInfo
    return (
      <MissionContainer>
        <MissionTitle>
          <MissionLink to={`/Missions/${mission_id}`} >
            <strong>{mission_name}</strong>
          </MissionLink>
        </MissionTitle>
        <MissionId>
          Mission ID: {mission_id}
        </MissionId>
        <MissionDescription>
          {description}
        </MissionDescription>
      </MissionContainer>
    );
  };
}

export default withData(Mission);