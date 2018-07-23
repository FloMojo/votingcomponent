import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VotingComponent from './VotingComponent';
import Layout from './Layout';

class App extends Component {
  render() {
  const vote = {
    title : "How is your day?",
    description : "Tell me: how has your day benn so far?",
    //totalVotes : 20,
    choices : [
      {id:1,choice:'good',count:7,percent:35},
      {id:2,choice:'bad',count:12,percent:60},
      {id:3,choice:'not sure',count:1,percent:5}
    ]
  };

    return (
      <div className="App">
        <Layout>
          <VotingComponent vote = {vote}/>
        </Layout>
      </div>
    );
  }
}

export default App;
