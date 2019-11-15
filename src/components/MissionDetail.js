import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider';

const MissionDetailContainer = styled.div`
  margin: auto;
  width: 75%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px
`;

const Title = styled.h2``;

const MissionId = styled.h3``;

const Description = styled.p``;

const Manufacturers = styled.div``;

const Payloads = styled.div``;

class MissionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mission_id: this.props.match.params.mission_id,
      missionDetails: {},
      displayManufacturers: [],
      displayPayloads: [],
    }
  };
  componentDidMount() {
    this.props.getMissionDetails(this.state.mission_id).then(response => {
      this.setState({
        missionDetails: response.data
      })
      this.mapManufacturers();
      this.mapPayloads();
    })
  }
  mapManufacturers = () => {
    const {mission_id,manufacturers,} = this.state.missionDetails;
    const displayManufacturers = manufacturers.map((manufacturer) => <li key={manufacturer + mission_id}>{manufacturer}</li>)
    this.setState({
      displayManufacturers: displayManufacturers
    })
  }
  mapPayloads = () => {
    const {payload_ids} = this.state.missionDetails;
    const displayPayloads = payload_ids.map((payload) => <li key={payload}>{payload}</li>)
    this.setState({
      displayPayloads: displayPayloads
    })
  }
  render() {
    
    const {
      mission_name,
      mission_id,
      description,
      manufacturers,
      wikipedia,
      twitter,
      payload_ids
    } = this.state.missionDetails;

    return (
      <MissionDetailContainer>
        <Title>{mission_name}</Title>
        <MissionId>{mission_id}</MissionId>
        <Description>{description}</Description>
        <Manufacturers>
          <strong>Manufacturers:</strong>
          <ul>
            {this.state.displayManufacturers}
          </ul>
        </Manufacturers>
        <Payloads>
          <strong>Payloads:</strong>
          <ul>
            {this.state.displayPayloads}
          </ul>
        </Payloads>
      </MissionDetailContainer>
    );
  }
}

export default withData(MissionDetail);