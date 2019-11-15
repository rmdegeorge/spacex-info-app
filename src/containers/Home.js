import React from 'react';
import styled from 'styled-components';

import News from './News';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
`;
const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  color: #ffffff;
  background-color: #000000;
  padding: 10px;
  display: inline;
  font-size: 9pt;
  text-align: center;

  > a {
    color: #ffffff;
    text-decoration: none;
    padding: 0 4px 0 4px;
    
    :hover {
      font-weight: bold;
      text-decoration: underline;
      
    }
  }
`;

function Home(props) {
  return (
    <HomeContainer>
      <News />
      <FooterDiv>All the information on this site comes from the <a href="https://api.spacexdata.com/v3/">SpaceX-API</a> which was built by the organization <a href="https://github.com/r-spacex">r/SpaceX</a>. </FooterDiv>
    </HomeContainer>
  );
}

export default Home;
