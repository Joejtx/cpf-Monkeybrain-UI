import React from 'react';
import SearchAppBar from './components/header/header'; 
import CpfServices from './components/services/services';
import { MainDashboard } from './components/dashboard/defaultDashboard';
import { Calculator } from './components/calculator/calculator';
import SimpleDialogDemo from './components/walkthrough/walkthrough';
import Container from '@material-ui/core/Container';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dashboardtype: null
    }
    this.changeType = this.changeType.bind(this);
  }

  componentDidMount() {
    this.setState({
      dashboardtype : 'main'
    })
  }
  renderSwtich() {
    switch(this.state.dashboardtype) {
      case 'main':
        return <MainDashboard />
      case 'calculator':
        return <Calculator />
      case 'housing':
        return <SimpleDialogDemo />
      default:
        return ''
    }
  }

  changeType(param) {
    this.setState({
      dashboardtype: param 
    })
  }

  render() {
    return(
      <div className="App">
        <div className="header">
          <SearchAppBar change={this.changeType}/>
        </div>
        <div className="cpf-services">
          <CpfServices change={this.changeType}/>
        </div>
        <div className="cpf-dashboard">
          <Container>
            {this.renderSwtich()}
          </Container>
        </div>
      </div>
    );
  } 
}

export default App;
