import React from 'react';
import styled from 'styled-components';
import {withData} from '../context-providers/DataProvider'
import {device} from '../themes/GlobalStyle';
import {Link} from 'react-router-dom';

const RocketContainer = styled.div`

    position: absolute;
    font-size: 11pt;
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
      "ds ds ds ds ds ds"
      "sr sr ff ff st co"
      "di di fs fs ss ss"
      "di di fs fs ss ss"
      "po po po po po po"
    ;
    grid-gap: 5px;
    > * {
      padding: 5px;

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
`;

const Status = styled.div`
  grid-area: st;

  > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
`;
const FirstFlight = styled.div`
  grid-area: ff;

  > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
`;
const Dimensions = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: di;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: auto;

  > :nth-child(1) {
    grid-column: 1 / span 2;
    font-size: 16px;
    font-weight: bold;
  }
`;
const SuccessRate = styled.div`
  grid-area: sr;

  > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
`;
const Cost = styled.div`
  grid-area: co;

  > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
`;

const Description = styled.div`
  grid-area: ds;
  text-align: center;
`;

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
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

class RocketDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rocket_id: this.props.match.params.rocket_id,
      rocketDetails: {},
    }
  }
  componentDidMount() {
    this.props.getRocketDetail(this.state.rocket_id).then(response => {
      console.log(response.data)
      this.setState({
        rocketDetails: response.data
      })
    })
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
          wikipedia} = this.state.rocketDetails;
    console.log(this.state.rocketDetails)
    return (
      
      <RocketContainer>
        <BackButton>Back</BackButton>
        <RocketName>
          <a href={wikipedia}>{rocket_name}</a>
        </RocketName>
        <Description>
          <div>{description}</div>
        </Description>
        <Status>
          <div>Status:</div>
          <div>{active ? 'Active' : 'Inactive'}</div>
        </Status>
        <FirstFlight>
          <div>First Flight:</div>
          <div>{first_flight}</div>
        </FirstFlight>
        <SuccessRate>
          <div>Success Rate:</div>
          <div>{success_rate_pct}%</div>
        </SuccessRate>
        <Cost>
          <div>Cost per Launch:</div>
          <div>{cost_per_launch !== undefined ? this.props.toCurrency(cost_per_launch) : null}</div>
        </Cost>
        <Dimensions>
        <div>Dimensions:</div>
          <div>Height: </div>
            {/* <div>{height.meters}m ({height.feet}ft)</div> */}
          <div>Diameter: </div>
            {/* <div>{diameter.meters}m ({diameter.feet}ft)</div> */}
          <div>Mass: </div>
            {/* <div>{mass.kg}kg ({mass.lb}lbs)</div> */}
        </Dimensions>
        <FirstStageInfo>
          <div>First Stage Info:</div>
          <div>Number of Engines:</div>
            {/* <div>{first_stage.engines}</div> */}
          <div>Reusable:</div>
            {/* <div>{first_stage.reusable ? 'Reusable' : 'Not Reusable'}</div> */}
          <div>Fuel Capacity:</div>
            {/* <div>{first_stage.fuel_amount_tons} tons</div> */}
          <div>Burn Time:</div>
            {/* <div>{first_stage.burn_time_sec} sec</div> */}
          <div>Thrust at Sea Level:</div>
            {/* <div>{first_stage.thrust_sea_level.kN}kN ({first_stage.thrust_sea_level.lbf}lbf)</div> */}
          <div>Thrust in Vacuum:</div>
            {/* <div>{first_stage.thrust_vacuum.kN}kN ({first_stage.thrust_vacuum.lbf}lbf)</div> */}
        
        </FirstStageInfo>
        <SecondStageInfo>
          <div>Second Stage Info:</div>
          <div>Number of Engines:</div>
            {/* <div>{second_stage.engines}</div> */}
          <div>Reusable:</div>
            {/* <div>{second_stage.reusable ? 'Reusable' : 'Not Reusable'}</div> */}
          <div>Fuel Capacity:</div>
            {/* <div>{second_stage.fuel_amount_tons} tons</div> */}
          <div>Burn Time:</div>
            {/* <div>{second_stage.burn_time_sec} sec</div> */}
          <div>Thrust:</div>
            {/* <div>{second_stage.thrust.kN}kN ({second_stage.thrust.lbf}lbf)</div> */}
        </SecondStageInfo>
      </RocketContainer>   
        /* 
        
        
        ~*~*~*~*~~*~*~*~~*~*~*~*NONE OF THESE PARTS WORK. IT SAYS THE PROPS ARE UNDEFINED....~*~~*~*~*~*~*~*~*~~*~*~*~*~*~
      
        <Dimensions>
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
        </SecondStageInfo> */
      
      
    );
  }
}

export default withData(RocketDetail);
