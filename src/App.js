import React from 'react';
import {Switch,Route} from 'react-router-dom';
import styled from 'styled-components';
import {withData} from './context-providers/DataProvider';

import GlobalStyle from './themes/GlobalStyle';
import Header from './components/Header';
import Home from './containers/Home';
import Missions from './containers/Missions';
import MissionDetail from './components/MissionDetail';
import Launches from './containers/Launches';
import FutureLaunches from './containers/FutureLaunches';
import PastLaunches from './containers/PastLaunches';
import Launch from './components/Launch';
import Payloads from './containers/Payloads';
import Payload from './components/Payload';
import Rockets from './containers/Rockets';

const AppContainer = styled.div`
  width: 100vw;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
  };
  // componentDidMount() {
  //   this.props.getMissionsData()
  // }
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Missions' component={Missions} />
          <Route path='/Missions/:mission_id' component={MissionDetail} />
          <Route exact path='/Launches' component={Launches} />
          <Route path='/Launches/FutureLaunches' component={FutureLaunches} />
          <Route path='/Launches/PastLaunches' component={PastLaunches} />
          <Route path='/Launches/:flight_number' component={Launch} />
          <Route path='/Rockets' component={Rockets} />
          <Route exact path='/Payloads' component={Payloads} />
          <Route path='/Payloads/:uid' component={Payload} />
        </Switch>
      </AppContainer>
    );
  };
}

export default withData(App);