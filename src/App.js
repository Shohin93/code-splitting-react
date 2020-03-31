import React, {Component} from 'react';

import Page1 from './components/Page1';
import './App.css';

export default class App extends Component {
  state = {
    component: null,
    route: 'route1'
  };

  onRouteChange = route => {
    if (route === 'route1') {
      this.setState({route});
    } else if (route === 'route2') {
      import('./components/Page2').then(component => {
        this.setState({
          component: component.default,
          route
        })
      });
    } else if (route === 'route3') {
      import('./components/Page3').then(component => {
        this.setState({
          component: component.default,
          route
        })
      });
    }
  }  

  render() {
    return this.state.route === 'route1' ?
      <Page1 onRouteChange={this.onRouteChange} /> 
      :
      <this.state.component onRouteChange={this.onRouteChange} />
  }
}
