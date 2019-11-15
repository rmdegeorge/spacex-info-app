import React from 'react';
import styled from 'styled-components';
import ToolTip from 'react-tooltip';
import { withData } from '../context-providers/DataProvider';

const LaunchContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  border-bottom: 1px solid #a3a3a3;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  ${props => 
    props.size ==='mobile'
    ?
    `
    grid-template-columns: 2fr 1fr 1fr 1fr;
    `
    :
    props.size === 'tablet'
      ?
      `
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      `
      :
      `
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
      `
  }
`;

const LaunchTitle = styled.div``;
const LaunchDate = styled.div``;
const Customer = styled.div``;
const LaunchSite = styled.div``;
const Rocket = styled.div``;
const Success = styled.div``;
const Failure = styled.div`
  box-sizing: border-box;

  > :nth-child(1n) {
    :hover {
      cursor: pointer;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;
const FailureToolTip = styled(ToolTip)`
  font-size: 12px !important;
  pointer-events: auto !important;
  
  :click {
    visibility: visible !important;
    opacity: 1 !important;
  }
`;

function Launch(props) {
  const {flight_number,mission_name,mission_id,launch_year,launch_date_utc,launch_site,launch_success,launch_failure_details,details,links,rocket} = props.launchInfo
  const displayCustomers = rocket.second_stage.payloads.map((payload) => payload.customers.join(", ")).join(' ; ');
  
  
  return (
    <LaunchContainer size={props.size}>
      <LaunchDate>{new Date(launch_date_utc).toUTCString()}</LaunchDate>
      <LaunchTitle>{mission_name}</LaunchTitle>
      {props.size === 'mobile' || props.size === 'tablet' ? null : <Customer>{displayCustomers}</Customer>}
      {props.size === 'mobile' ? null : <LaunchSite>{launch_site.site_name}</LaunchSite>}
      <Rocket>{rocket.rocket_name}</Rocket>
      
      {props.type === 'future'
        ? 
        null
        :
        launch_success 
          ? 
          <Success>Success</Success> 
          : 
          <Failure>
            <div data-tip={`Reason for failure:\n${launch_failure_details.reason}`} data-event='click focus' data-iscapture='true'>Failure</div>
            <FailureToolTip globalEventOff='click' delayHide={5000} effect='float'/>
          </Failure>
      }

    </LaunchContainer>
  );
}

export default withData(Launch);