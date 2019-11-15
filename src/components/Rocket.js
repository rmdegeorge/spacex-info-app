import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider'
import {device} from '../themes/GlobalStyle';
import {Link} from 'react-router-dom';

const RocketContainer = styled.div`
  paosition: relative;
  ${props => props.detailed 
    ?
    // detailed
    `
    font-size: 11pt;
    width: 95vw;
    max-width: 420px;
    border: 1px solid #000000;
    border-radius: 5px;
    background-color: white;
    box-shadow: 14px 10px 21px 0px rgba(31,31,31,1);
    padding: 10px;
    margin: 50px 0 0 0;
    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
        "bt . . ."
        "nm nm nm nm"
        "ds ds ds ds"
        "ds ds ds ds"
        "sr sr ff ff"
        "st st co co"
        "di di di ."
        "di di di ."
        "fs fs fs ."
        "ss ss ss ."
        "po po po ."
      ;

    > * {
      padding: 5px;
    }
    @media ${device.tablet} {
      width: 95vw;
      max-width: 760px;
      grid-template-areas: 
        "bt . . ."
        "nm nm nm nm"
        "ds ds ds ds"
        "ds ds ds ds"
        "sr sr ff ff"
        "st st co co"
        "di di di ."
        "di di di ."
        "fs fs fs ."
        "ss ss ss ."
        "po po po ."
      ;
    }
      
    @media ${device.computer} {
      width: 70vw;
      max-width: 1000px;
      grid-template-areas: 
        "bt nm nm nm nm nm"
        "ds ds ds ds ds ds"
        "ds ds ds ds ds ds"
        "sr sr ff ff st co"
        "di di fs fs ss ss"
        "di di fs fs ss ss"
        "po po po po po po"
      ;
    }
    `
    :
    // NOT detailed
    `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
    border-bottom: 1px solid #a3a3a3;
    width: 100%;
    padding: 5px;
    font-size: 12px;

    > :nth-child(1n) {
      text-align: center;
    }
  
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
const RocketNameLink = styled(Link)`

`;
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

    > a {
      color: #000000;
      text-decoration: none;
      :hover {
        text-decoration: underline;
        font-weight: bold;
      }
    }
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

    > :nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
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

    > :nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
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
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: auto;
  
    > :nth-child(1) {
      grid-column: 1 / span 2;
      font-size: 16px;
      font-weight: bold;
    }
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

    > :nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
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
    
    > :nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
    `
    :
    // NOT detailed
    ``
  }
`;

const Description = styled.div`
    grid-area: ds;
    text-align: center;
`;

const ClosePopupButton = styled.button`
  grid-area: bt;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const FirstStageInfo = styled.div`
  grid-area: fs;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: auto;

  > :nth-child(1) {
    grid-column: 1 / span 2;
    font-size: 16px;
    font-weight: bold;
  }
`;

const SecondStageInfo = styled.div`
  grid-area: ss;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: auto;

  > :nth-child(1) {
    grid-column: 1 / span 2;
    font-size: 16px;
    font-weight: bold;
  }
`;

const PayloadOptions = styled.div`
  grid-area: po;
`;

class Rocket extends React.Component {
  
  render() {
    const {id,
          rocket_id,
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
        <RocketName detailed={toggled}>
          <a href={wikipedia}>{rocket_name}</a>
          </RocketName>
        <Description>
          <div>{description}</div>
        </Description>
        <Status detailed={toggled}>
          <div>Status:</div>
          <div>{active ? 'Active' : 'Inactive'}</div>
          </Status>
        <FirstFlight detailed={toggled}>
          <div>First Flight:</div>
          <div>{first_flight}</div>
        </FirstFlight>
        <SuccessRate detailed={toggled}>
          <div>Success Rate:</div>
          <div>{success_rate_pct}%</div>
        </SuccessRate>
        <Cost detailed={toggled}>
          <div>Cost per Launch:</div>
          <div>{this.props.toCurrency(cost_per_launch)}</div>
        </Cost>
        <Dimensions detailed={toggled}>
          <div>Dimensions:</div>
          <div>Height: </div><div>{height.meters}m ({height.feet}ft)</div>
          <div>Diameter: </div><div>{diameter.meters}m ({diameter.feet}ft)</div>
          <div>Mass: </div><div>{mass.kg}kg ({mass.lb}lbs)</div>
        </Dimensions>
        <FirstStageInfo>
          <div>First Stage Info:</div>
          <div>Number of Engines:</div><div>{first_stage.engines}</div>
          <div>Reusable:</div><div>{first_stage.reusable ? 'Reusable' : 'Not Reusable'}</div>
          <div>Fuel Capacity:</div><div>{first_stage.fuel_amount_tons} tons</div>
          <div>Burn Time:</div><div>{first_stage.burn_time_sec} sec</div>
          <div>Thrust at Sea Level:</div><div>{first_stage.thrust_sea_level.kN}kN ({first_stage.thrust_sea_level.lbf}lbf)</div>
          <div>Thrust in Vacuum:</div><div>{first_stage.thrust_vacuum.kN}kN ({first_stage.thrust_vacuum.lbf}lbf)</div>
        </FirstStageInfo>
        <SecondStageInfo>
          <div>Second Stage Info:</div>
          <div>Number of Engines:</div><div>{second_stage.engines}</div>
          <div>Reusable:</div><div>{second_stage.reusable ? 'Reusable' : 'Not Reusable'}</div>
          <div>Fuel Capacity:</div><div>{second_stage.fuel_amount_tons} tons</div>
          <div>Burn Time:</div><div>{second_stage.burn_time_sec} sec</div>
          <div>Thrust:</div><div>{second_stage.thrust.kN}kN ({second_stage.thrust.lbf}lbf)</div>
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
      </RocketContainer>
        
        
    );
  }
}

export default withData(Rocket);
