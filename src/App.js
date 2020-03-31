import React, {Component, lazy, Suspense} from 'react';

import Page1 from './components/Page1';
import './App.css';

const Page2 = lazy(() => import('./components/Page2'));
const Page3 = lazy(() => import('./components/Page3'));

export default class App extends Component {
  state = {
    route: 'route1'
  };

  onRouteChange = route => this.setState({route});

  render() {
    const {route} = this.state;
    if (route === 'route1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (route === 'route2') {
      return (
        <Suspense fallback={<div />}>
          <Page2 onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else if (route === 'route3') {
      return (
        <Suspense fallback={<div />}>
          <Page3 onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}
