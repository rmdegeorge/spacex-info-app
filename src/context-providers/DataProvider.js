import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get()
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