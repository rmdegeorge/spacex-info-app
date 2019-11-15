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
import Rockets from './containers/Rockets';
import RocketDetail from './components/RocketDetail';

const AppContainer = styled.div`
  width: 100%;
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
          <Route path='/Launches' component={Launches} />
          <Route exact path='/Rockets' component={Rockets} />
          <Route path='/Rockets/:rocket_id' component={RocketDetail} />
        </Switch>
      </AppContainer>
    );
  };
}

export default withData(App);