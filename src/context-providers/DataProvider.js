import React, { Component } from 'react';
import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;
const {Provider,Consumer} = React.createContext();

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [],
      capsules: [],

    };
  };
  componentDidMount() {
    axios.get(`${API_HOST}missions/`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Provider value={{
        ...this.state,
        
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