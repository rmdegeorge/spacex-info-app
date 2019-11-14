import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider'

const RocketContainer = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    position: absolute;
    top: 15vw;
    left: 15vw;
    max-width: 70vw;
    max-height: 90vh;
    border: 1px solid #000000;
    background-color: white;
    box-shadow: 14px 10px 21px 0px rgba(31,31,31,1);
    padding: 10px;
    display: grid;
    grid-template-areas: 
      "nm nm nm nm nm nm"
      "ds ds ds ds ds ds"
      "sr sr ff ff st co"
      "di di fs fs ss ss"
      "di di fs fs ss ss"
      "po po po po po po"
    ;
    grid-gap: 5px;
    > * {
      border: 1px solid red;
      padding: 5px;
    }
    `
    :
    // NOT detailed
    `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 75px;
    border-bottom: 1px solid #a3a3a3;
    width: 100%;
    padding: 5px;
    font-size: 12px;
    `
  }
`;
// nm - name
// ds - description
// st - status
// ff - first flight
// di - dimensions
// sr - success rate
// co - cost/launch
// fs - first stage
// ss - second stage
// po - payload options

const RocketName = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: nm;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    `
    :
    // NOT detailed
    ``
  }
`;
const Description = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: ds;
    
    `
    :
    // NOT detailed
    ``
  }
`;
const Status = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: st;
    `
    :
    // NOT detailed
    ``
  }
`;
const FirstFlight = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: ff;
    `
    :
    // NOT detailed
    ``
  }
`;
const Dimensions = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: di;
    `
    :
    // NOT detailed
    ``
  }
  
`;
const SuccessRate = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: sr;
    `
    :
    // NOT detailed
    ``
  }
`;
const Cost = styled.div`
  ${props => props.detailed 
    ?
    // detailed
    `
    grid-area: co;
    `
    :
    // NOT detailed
    ``
  }
`;


const ClosePopupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
`;

const FirstStageInfo = styled.div`
  grid-area: fs;
`;

const SecondStageInfo = styled.div`
  grid-area: ss;
`;

const PayloadOptions = styled.div`
  grid-area: po;
`;

class Rocket extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {id,
          rocket_name,
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
          active,
          wikipedia} = this.props.rocketInfo;
    const {toggled} = this.props.rocketDetailsToggled
    return (
      this.props.detailed === true 
      ? 
      // renders this if this component is being used as a popup for more details
      <RocketContainer detailed={toggled}>
        <ClosePopupButton onClick={() => this.props.toggleRocketDetails('')}>X</ClosePopupButton>
        <RocketName detailed={toggled}><a href={wikipedia}>{rocket_name}</a></RocketName>
        <Description><strong>Description:</strong><br/>{description}</Description>
        <Status detailed={toggled}><strong>Status: </strong><br/>{active ? 'Active' : 'Inactive'}</Status>
        <FirstFlight detailed={toggled}><strong>First Flight: </strong><br/>{first_flight}</FirstFlight>
        <SuccessRate detailed={toggled}><strong>Success Rate: </strong><br/>{success_rate_pct}%</SuccessRate>
        <Cost detailed={toggled}><strong>Cost per Launch: </strong><br/>{this.props.toCurrency(cost_per_launch)}</Cost>
        <Dimensions detailed={toggled}>
          <strong>Dimensions:</strong><br/>
          <div><strong>Height: </strong>{height.meters}m ({height.feet}ft)</div>
          <div><strong>Diameter: </strong>{diameter.meters}m ({diameter.feet}ft)</div>
          <div><strong>Mass: </strong>{mass.kg}kg ({mass.lb}lbs)</div>
        </Dimensions>
        <FirstStageInfo>
          <div><strong>First Stage Info:</strong></div>
          <div><strong>Number of Engines:</strong><br/>{first_stage.engines}</div>
          <div><strong>Reusable:</strong><br/>{first_stage.reusable ? 'Reusable' : 'Not Reusable'}</div>
          <div><strong>Fuel Capacity:</strong><br/>{first_stage.fuel_amount_tons} tons</div>
          <div><strong>Burn Time:</strong><br/>{first_stage.burn_time_sec} sec</div>
          <div><strong>Thrust at Sea Level:</strong><br/>{first_stage.thrust_sea_level.kN}kN ({first_stage.thrust_sea_level.lbf}lbf)</div>
          <div><strong>Thrust in Vacuum:</strong><br/>{first_stage.thrust_vacuum.kN}kN ({first_stage.thrust_vacuum.lbf}lbf)</div>
        </FirstStageInfo>
        <SecondStageInfo>
          <div><strong>Second Stage Info:</strong></div>
          <div><strong>Number of Engines:</strong><br/>{second_stage.engines}</div>
          <div><strong>Reusable:</strong><br/>{second_stage.reusable ? 'Reusable' : 'Not Reusable'}</div>
          <div><strong>Fuel Capacity:</strong><br/>{second_stage.fuel_amount_tons} tons</div>
          <div><strong>Burn Time:</strong><br/>{second_stage.burn_time_sec} sec</div>
          <div><strong>Thrust:</strong><br/>{second_stage.thrust.kN}kN ({second_stage.thrust.lbf}lbf)</div>
        </SecondStageInfo>
      </RocketContainer> 
      : 
      // renders this if this component is being used in the list of rockets
      <RocketContainer onClick={() => this.props.toggleRocketDetails(id)}>
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
