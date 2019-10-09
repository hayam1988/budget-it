/* grey  (background-color: #282c34;)  and orange theme color*/
/*Hosting URL: https://today-daily-budget.firebaseapp.com*/

import moment from 'moment';
import React from 'react';
import './App.css';

/* ${savings.toFixed(2)}
import * as firebase from "firebase/app"
import "firebase/firestore"
*/
import { Alert } from 'antd';
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'antd';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import 'antd/dist/antd.css';
import RemoveIcon from '@material-ui/icons/Remove';
import { Icon } from 'antd';

/*
function greet(){
    name = localStorage.getItem("name");
    if (name == null || name == "null"){
      alert("Hi, Stranger!");
      name = prompt("What is your name?");
      localStorage.setItem("name", name);
    } else {
      alert ("Hi, " + name + "!");
    } // end greet
  } // end function  

  */





class App extends React.Component {

  state = {
    startDate: moment(),
    ModalText: 'Content of the modal',
    visible: false,
    showAlert: false,
    savings: 0,
    clicks: 0,
    expenses: [
      { label: 'Monthly Income', placeholder: '$00.00', value: 0 },
      { label: 'Rent/Mortgagse', placeholder: '$00.00', value: 0 },
      { label: 'Car payment/Insurance', placeholder: '$00.00', value: 0 },
      { label: 'Phone/Cable', placeholder: '$00.00', value: 0 },
    ],

  }


  componentWillMount() {
 
    localStorage.getItem('expenses') && this.setState({ expenses: JSON.parse(localStorage.getItem('expenses')) })

    const ts = new Date().valueOf()

    const oldTs = localStorage.getItem('ts')

    if (oldTs && oldTs < ts - 60 * 60 * 24) {
      localStorage.setItem('ts', ts)
      // use moments


    }

  }


/*
  componentDidMount() {
    if (!localStorage.getItem('expenses')) {
      this.fetchData()
    } else {
      console.log("using loacal storeage")
    }
  }
*/
fetchData(){

}


componentWillUpdate(nextProps, nextState){
  localStorage.setItem('expenses', JSON.stringify(nextState.expenses))
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
    showAlert: true,


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
  const { expenses } = this.state
  /*expenses.push(i)*/
  expenses.push({ label: 'Other Expenses', placeholder: '$00.00', value: 0 })
  this.setState({ expenses });

  /*this.setState({expenses:[...this.state.expenses, newarr]})*/
  console.log("add")
}

remove = () => {
  var expenses = [...this.state.expenses];
  if (expenses.length > 1) {
    expenses.pop();
  }
  this.setState(() => {
    return {
      expenses: expenses

    };
  });

}

IncrementItem = () => {
  this.setState({ clicks: this.state.clicks + 1 });
}

DecreaseItem = () => {
  this.setState({ clicks: this.state.clicks - 1 });
}
/*
setExpenses = (expenses) => {
  if (!expenses) {
    localStorage.setItem("expenses", JSON.stringify(this.state.expenses))

  }
  this.setState({ expenses })
}



saveExpenses = (expenses) => {
  var str = JSON.stringify(expenses)
  localStorage.setItems("expenses", str)
}

getExpenses = (expenses) => {
  var str = localStorage.getItem("expenses")
  expenses = JSON.parse(str)

  if (!expenses) {
    expenses = []
  }

}
*/
/*$55 will be budget amount */
/* make model with income and expenses canccel and save button*/
/*<div className= "funds-header"> Daily budget </div>*/
render() {

  var totalsavings = 0
  var schedule = require('node-schedule')
  var rule = new schedule.RecurrenceRule()
  rule.hour = 21
  rule.minute = 1
  rule.second = 0

  var j = schedule.scheduleJob(rule, function () {

    if (dailyAmount > 0) {
      console.log('this is a test')

      totalsavings += dailyAmount
      console.log(totalsavings)

    }

  })
  const selectedDate = this.state.startDate.format("ll");
  const { expenses } = this.state
  const { savings } = this.state


  var dailyAmount = 0
  expenses.forEach((e, i) => {
    if (i === 0) {
      dailyAmount += e.value / 30
    } else {
      dailyAmount -= e.value / 30
    }
  })


  return (
    <div className="App">
      <header className="App-header">
        <div className="text">
          BUDGET-IT
          </div>
      </header>
      <div className="time"> Today <div>{selectedDate}</div></div>

      <h3>Daily Budget</h3>

      <div className="funds">
        ${(dailyAmount + this.state.clicks).toFixed(2)}/day
          </div>


      Total Monthly Savings:
        <div className="savings">
        ${savings.toFixed(2)}
      </div>


      <div className="footer">
        <Fab color="primary" aria-label="add" className="button" onClick={this.IncrementItem}>
          <AddIcon />
        </Fab>

        <Fab color="primary" aria-label="add" className="minus-button" onClick={this.DecreaseItem}>
          <RemoveIcon />
        </Fab>
        <Button type="primary" className="modal-button" onClick={this.showModal} >
          <Icon type="bank" theme="filled" />

        </Button>
      </div>


      <Modal className="modal"
        title="Income & Expenses"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        Fill-in Monthly Income and Recurring Expenses:
            {expenses.map((e, i) => {
          return <TextField
            id="filled-with-placeholder"
            type="number"
            label={e.label}
            placeholder={e.placeholder}
            fullWidth
            onChange={e => {
              const exp = [...expenses]
              exp[i].value = e.target.value
              this.setState({ expenses: exp })
            }}
            margin="normal"
            variant="filled"

          />

        })}

        <Fab size="small" aria-label="add" className="add" onClick={this.add}>
          <AddIcon />
        </Fab>

        <Fab size="small" aria-label="remove" className="remove" onClick={this.remove}>
          <RemoveIcon />
        </Fab>
      </Modal>

      {this.state.showAlert ?
        <Alert
          message="SUCCESS"

          description=" Based on your income and expenses this is your daily budget!"
          type="success"
          className="alert"
          showIcon
          afterClose={this.handleOk}

        /> : null}

    </div>
  );
}
} /* end of react component*/



export default App;


