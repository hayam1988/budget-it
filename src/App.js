/* grey  (background-color: #282c34;)  and orange theme color*/

import moment from 'moment';
import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'antd';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import 'antd/dist/antd.css';

import { Input } from 'antd';

class App extends React.Component {
 


  state = {
    startDate: moment(),
    ModalText: 'Content of the modal',
    visible: false,
    expenses: [
      {label:'Monthly Income', placeholder:'$00.00', value:0},
      {label:'Rent/Mortgage', placeholder:'$00.00', value:0},
      {label:'Car/Insurance', placeholder:'$00.00', value:0},
      {label:'Phone/Cable', placeholder:'$00.00', value:0},

    ]

  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      visible: false,
    });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  /* fix bug: when user click to add more textfield they must enter a value, 
  possible fix maybe defulat value is zero */

  /* add a subtract to take away delete button to delete textfiled*/
  
add = (i) => {
  const {expenses} = this.state
  expenses.push(i)
  this.setState({ expenses });

 
}



  /*$55 will be budget amount */
  /* make model with income and expenses canccel and save button*/
  /*<div className= "funds-header"> Daily budget </div>*/
  render() {
    const selectedDate = this.state.startDate.format("ll");
    const {expenses} = this.state

    var dailyAmount = 0
    expenses.forEach((e,i)=>{
      if(i===0) {
        dailyAmount += e.value/30
      } else {
        dailyAmount -= e.value/30
      }
    })

    return (

      <div className="App">
        <header className="App-header">
          BUDGET-IT
        </header>
        <div className="time"> Today <div>{selectedDate}</div></div>
          Daily Budget
        <div className="funds">
          ${dailyAmount.toFixed(2)} /day
         </div>

       Total Monthly Savings:

       <Input placeholder="" allowClear onChange={onChange} />

        <div className="footer">

          <Fab color="primary" aria-label="add" className="button">
            <AddIcon />
          </Fab>
          <Button type="primary" className= "modal-button" onClick={this.showModal}>
            Open Modal
        </Button>
        </div>
          <Modal className= "modal"
            title="Income & Expenses"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            Fill-in Mounthly Income and Recurring Expenses:
            {expenses.map((e,i)=>{
              return <TextField
                id="filled-with-placeholder"
                type="number"
                label={e.label}
                placeholder={e.placeholder}
                fullWidth
                onChange={e=> {
                  const exp = [...expenses]
                  exp[i].value = e.target.value
                  this.setState({expenses: exp})
                }}
                margin="normal"
                variant="filled"
              />           
            })}
            
        <Fab size="small"  aria-label="add" className= "add" onClick={this.add}>
          <AddIcon />
          
        </Fab>
          
          </Modal>
        
      </div>
    );
  }
} /* end of react component*/

export default App;

function onChange(value) {
  console.log('changed', value);
}

function funds({ text, completed, setexpense }) {
  return (<div className="funds" >

  </div>)

  /* this is what will be the bughet expenses*/

}


