import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

const MissionDetailContainer = styled.div`
  margin: auto;
  width: 75%;
  box-sizing: border-box;
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 20px
`;

const Title = styled.h2``;

const MissionId = styled.h3``;

const Description = styled.p``;

const Manufacturers = styled.div``;

const Payloads = styled.div``;

function MissionDetail(props) {
  console.log('MissionDetail PROPS:')
  console.log(props.missions)

  const mission = props.missions.find(mission => mission.mission_id === props.match.params.mission_id);
  
  const {mission_name,mission_id,description,manufacturers,wikipedia,twitter,payload_ids} = mission;
  const displayManufacturers = manufacturers.map((manufacturer) => <li key={manufacturer + mission_id}>{manufacturer}</li>)
  const displayPayloads = payload_ids.map((payload) => <li key={payload}>{payload}</li>)
  return (
    <MissionDetailContainer>
      <Title>{mission_name}</Title>
      <MissionId>{mission_id}</MissionId>
      <Description>{description}</Description>
      <Manufacturers>
        <strong>Manufacturers:</strong>
        <ul>
          {displayManufacturers}
        </ul>
      </Manufacturers>
      <Payloads>
        <strong>Payloads:</strong>
        <ul>
          {displayPayloads}
        </ul>
      </Payloads>
    </MissionDetailContainer>
  );
}

export default withData(MissionDetail);