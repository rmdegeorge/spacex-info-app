import React, { Component } from 'react';
import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;
const {Provider,Consumer} = React.createContext();

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [],
      launches: [],

    };
  };
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
  getLaunchesData = () => {
    axios.get(`${API_HOST}launches/`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          launches: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      });

  }
  render() {
    return (
      <Provider value={{
        ...this.state,
        getMissionsData: this.getMissionsData,
        getLaunchesData: this.getLaunchesData,
        getMissionDetails: this.getMissionDetails,
        
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