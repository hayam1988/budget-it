/* grey  (background-color: #282c34;)  and orange theme color*/

import moment from 'moment';
import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'antd';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import { Input } from 'antd';



class App extends React.Component {

  state = {
    startDate: moment(),
    ModalText: 'Content of the modal',
    visible: false,
    
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



  /*$55 will be budget amount */
  /* make model with income and expenses canccel and save button*/
  /*<div className= "funds-header"> Daily budget </div>*/
  render() {
    const selectedDate = this.state.startDate.format("ll");
  
    return (

      <div className="App">
        <header className="App-header">
          BUDGET-IT &nbsp;|&nbsp;|&nbsp; Daily Balance
        </header>
        <div className="time"> Today <div>{selectedDate}</div></div>

        <div className="funds">
          $55 /day
         </div>

         Remaining Balance:

         <Input placeholder="input with clear icon" allowClear onChange={onChange} />

        <div className= "footer">
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
          <Modal className= "Modal"
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
          >
            
            <TextField
              id="filled-with-placeholder"
              label=" Mounthly Income"
              placeholder="$00.00"
              fullWidth
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-with-placeholder"
              label=" Expense #1"
              placeholder="$00.00"
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Modal>

      <Fab color="primary" aria-label="add" className="button">
        <AddIcon />
      </Fab>
      </div>
      </div>
    );
  }
}



export default App;

function onChange(value) {
  console.log('changed', value);
}

function funds({ text, completed, setexpense }) {
  return (<div className="funds" >

  </div>)

  /* this is what will be the bughet expenses*/

}


