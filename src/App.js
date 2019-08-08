/* grey  (background-color: #282c34;)  and orange theme color*/


import React from 'react';
import './App.css';

class App extends React.Component {
state = {
budget: [{
  text: '',
  completed: true,

}]
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
    BUDGET-IT 
        </header>
      </div>
    );
  }



}
export default App;

function Item({text, completed, setexpense}) {
  return (<div className = "item">
    
    </div>)

/* this ii this is what be the bughet expenses*/ 

}