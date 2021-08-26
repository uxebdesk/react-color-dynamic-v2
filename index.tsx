import React, { Component } from 'react';
import { render } from 'react-dom';
import Colors from './Colors';
import './style.scss';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Colors />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
