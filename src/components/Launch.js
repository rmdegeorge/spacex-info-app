import React from 'react';
import styled from 'styled-components';

const LaunchContainer = styled.div`
  border: 1px solid #000000;
  box-styling: border-box;
  width: 75%;
  margin-bottom: 10px;
  padding: 10px;
`;
const LaunchTitle = styled.div``;
const LaunchYear = styled.div``;


function Launch(props) {
  const {flight_number,mission_name,mission_id,upcoming,launch_year,launch_site,launch_success,launch_failure_details,details,links,} = props.launchInfo
  return (
    <LaunchContainer>
      <LaunchTitle>{mission_name}</LaunchTitle>
      <LaunchYear>{launch_year}</LaunchYear>
    </LaunchContainer>
  );
}

export default Launch;