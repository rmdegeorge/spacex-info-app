import React from 'react';
import {Switch,Route} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './themes/GlobalStyle';
import Header from './components/Header';
import Home from './containers/Home';
import Missions from './containers/Missions';

const AppContainer = styled.div`
  width: 100vw;
`;


function App(props) {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Missions' component={Missions} />
      </Switch>
    </AppContainer>
  );
}

export default App;