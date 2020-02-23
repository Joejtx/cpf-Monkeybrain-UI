import React from 'react';
import SearchAppBar from './components/header/header'; 
import CpfServices from './components/services/services';
import { CpfDashboard } from './components/dashboard/dashboardClass';
import { DefaultDashboard } from './components/dashboard/defaultDashboard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'dashboard': <DefaultDashboard />
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     dashboard: 
  //   })
  // }

  render() {
    return(
      <div className="App">
        <div className="header">
          <SearchAppBar />
        </div>
        <div className="cpf-services">
          <CpfServices />
        </div>
        <div className="cpf-dashboard">
          <CpfDashboard Component={this.state.dashboard} />
        </div>
      </div>
    );
  } 
}

export default App;
