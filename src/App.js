import React, {Component, Fragment} from 'react';

import AsyncComponent from './components/AsyncComponent';
import Page1 from './components/Page1';
import './App.css';

export default class App extends Component {
  state = {
    component: null,
    route: 'route1'
  };

  onRouteChange = route => this.setState({route});

  render() {
    const {route} = this.state;
    if (route === 'route1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (route === 'route2') {
      const Page2 = AsyncComponent(() => import('./components/Page2'));
      return <Page2 onRouteChange={this.onRouteChange} />
    } else if (route === 'route3') {
      const Page3 = AsyncComponent(() => import('./components/Page3'));
      return <Page3 onRouteChange={this.onRouteChange} />
    }
  }
}
