import React, { Component } from 'react';
import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;
const {Provider,Consumer} = React.createContext();

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [],
      pastLaunches: [],
      futureLaunches: [],
      rockets: [],
      rocketDetailsToggled: {
        toggled: false,
        id: '',
      },

    };
  };
  toCurrency = (num,symbol='$',currency='USD') => {
    return `${symbol}${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ${currency}`;
  }
  getMissionDetails = (mission_id) => {
    return axios.get(`${API_HOST}missions/${mission_id}`)
  }

  getMissionsData = () => {
    axios.get(`${API_HOST}missions/`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          missions: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPastLaunchesData = () => {
    axios.get(`${API_HOST}launches/past/`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          pastLaunches: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  getFutureLaunchesData = () => {
    axios.get(`${API_HOST}launches/upcoming`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          futureLaunches: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getRocketsData = () => {
    axios.get(`${API_HOST}rockets`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          rockets: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleRocketDetails = (id) => {
    console.log(id)
    this.setState(prevState => ({
      rocketDetailsToggled: {
        toggled: !prevState.rocketDetailsToggled.toggled,
        id: id
      }
    }));
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        toCurrency: this.toCurrency,
        getMissionsData: this.getMissionsData,
        getMissionDetails: this.getMissionDetails,
        getPastLaunchesData: this.getPastLaunchesData,
        getFutureLaunchesData: this.getFutureLaunchesData,
        getRocketsData: this.getRocketsData,
        toggleRocketDetails: this.toggleRocketDetails,

      }}>
        {this.props.children}
      </Provider>
    );
  };
};

export default DataProvider;

export function withData(Comp) {
  return props => 
    <Consumer>
      {value => <Comp {...value}{...props} />}
    </Consumer>
};