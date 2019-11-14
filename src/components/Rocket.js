import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider'

const RocketContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  border-bottom: 1px solid #a3a3a3;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  ${props => props.expanded 
    ?
    // EXPANDED
    ``
    :
    // NOT EXPANDED
    `
    
    `
  }
`;

const RocketName = styled.div`
  ${props => props.expanded 
    ?
    // EXPANDED
    `
    font-size: 24px;
    font-weight: bold;
    `
    :
    // NOT EXPANDED
    ``
  }
`;
const Status = styled.div`
  ${props => props.expanded 
    ?
    // EXPANDED
    ``
    :
    // NOT EXPANDED
    ``
  }
`;
const FirstFlight = styled.div`
  ${props => props.expanded 
    ?
    // EXPANDED
    ``
    :
    // NOT EXPANDED
    ``
  }
`;
const Dimensions = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.expanded 
    ?
    // EXPANDED
    ``
    :
    // NOT EXPANDED
    ``
  }
  
`;
const SuccessRate = styled.div``;
const Cost = styled.div``;


class Rocket extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {rocket_name,
          description,
          engines,
          second_stage,
          first_stage,
          payload_weights,
          mass,
          diameter,
          height,
          first_flight,
          success_rate_pct,
          cost_per_launch,
          boosters,
          stages,
          active} = this.props.rocketInfo;
    return (
      this.props.detailed === 'true' 
      ? 
      <RocketContainer>
        <RocketName>{rocket_name}</RocketName>
        <Status>{active ? 'Active' : 'Inactive'}</Status>
        <FirstFlight>{first_flight}</FirstFlight>
        <SuccessRate>{success_rate_pct}%</SuccessRate>
        <Cost>{this.props.toCurrency(cost_per_launch)}</Cost>
        <Dimensions>
          <div><strong>Height: </strong>{height.meters}m ({height.feet}ft)</div>
          <div><strong>Diameter: </strong>{diameter.meters}m ({diameter.feet}ft)</div>
          <div><strong>Mass: </strong>{mass.kg}kg ({mass.lb}lbs)</div>
        </Dimensions>
      </RocketContainer> 
      : 
      <RocketContainer expanded={this.props.rocketDetailsToggled.toggled} onClick={() => this.props.toggleRocketDetails(this.props.rocketInfo.id)}>
        <RocketName>{rocket_name}</RocketName>
        <Status>{active ? 'Active' : 'Inactive'}</Status>
        <FirstFlight>{first_flight}</FirstFlight>
        <SuccessRate>{success_rate_pct}%</SuccessRate>
        <Cost>{this.props.toCurrency(cost_per_launch)}</Cost>
        <Dimensions>
          <div><strong>Height: </strong>{height.meters}m ({height.feet}ft)</div>
          <div><strong>Diameter: </strong>{diameter.meters}m ({diameter.feet}ft)</div>
          <div><strong>Mass: </strong>{mass.kg}kg ({mass.lb}lbs)</div>
        </Dimensions>
      </RocketContainer>
      
    );
  }
}

export default withData(Rocket);
