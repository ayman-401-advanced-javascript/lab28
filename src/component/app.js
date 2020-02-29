/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import Header from './header/header.js';
import Form from './form/form.js';
import Results from './results/results.js';
import Footer from './footer/footer.js';


class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }
  updateState = data =>{
    let Headers = {'Content-Type': 'application/json'};
    this.setState({Headers, Response:{data}});
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <Form update={this.updateState}/>
        <Results  response={this.state}/>
        <Footer />

      </React.Fragment>
      
       
    );
  }
}
export default App;