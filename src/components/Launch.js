import React from 'react';
import styled from 'styled-components';
import ToolTip from 'react-tooltip';

const LaunchContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  border-bottom: 1px solid #a3a3a3;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 12px;
`;

const LaunchTitle = styled.div``;
const LaunchDate = styled.div``;
const Customer = styled.div``;
const LaunchSite = styled.div``;
const Rocket = styled.div``;
const Success = styled.div``;
const Failure = styled.div`
  box-sizing: border-box;

  :hover {
    cursor: pointer;
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
    <LaunchContainer>
      <LaunchDate>{new Date(launch_date_utc).toUTCString()}</LaunchDate>
      <LaunchTitle>{mission_name}</LaunchTitle>
      <Customer>{displayCustomers}</Customer>
      <LaunchSite>{launch_site.site_name}</LaunchSite>
      <Rocket>{rocket.rocket_name}</Rocket>
      
      {props.type === 'future'
        ? 
        null
        :
        launch_success 
          ? 
          <Success>Success</Success> 
          : <Failure>
              <div data-tip={`Reason for failure:\n${launch_failure_details.reason}`} data-event='click focus' data-iscapture='true'>Failure</div>
              <FailureToolTip globalEventOff='click' delayHide={1000} effect='float'/>
            </Failure>
      }

    </LaunchContainer>
  );
}

export default Launch;