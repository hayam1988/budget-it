/* grey  (background-color: #282c34;)  and orange theme color*/

import moment from 'moment';
import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends React.Component {
state = {
startDate: moment(),
budget: [{
  amount: '',
  

}]
}

/*$55 will be budget amount */
  render() {
    const selectedDate = this.state.startDate.format("ll");
    return (
      
      <div className="App">
        <header className="App-header">
            BUDGET-IT &nbsp;|&nbsp;|&nbsp; Daily Balance
        </header>
        <div className= "time"> Today <div>{selectedDate}</div></div> 
      
      <div className= "funds"> 
      <div className= "funds-header"> Daily budget </div>
      
      $55 /day</div>

      <TextField
        id="filled-with-placeholder"
        label=" Expense #1"
        placeholder="$00.00"
        fullWidth
        margin="normal"
        
        variant="filled"
      />
    
      
      
      </div>

   

      
    );
  }



}
export default App;

function funds({text, completed, setexpense}) {
  return (<div className = "funds" >
    
    </div>)

/* this is what will be the bughet expenses*/ 

}