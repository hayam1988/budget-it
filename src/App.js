/* grey  (background-color: #282c34;)  and orange theme color*/

import moment from 'moment';
import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
      
      <div className= "funds"> $55 /day</div>
        
      <TextField
        id="filled-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
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