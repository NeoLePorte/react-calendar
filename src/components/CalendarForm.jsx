import React, { Component } from 'react'

import {Form, Segment} from 'semantic-ui-react'
export default class CalendarForm extends Component {
  constructor() {
    super()
    this.state = {
      startDate: Date(),
      numOfDays: 0,
      countryCode: ''
    }
  }
  //saves input to state
  onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }


  render() {
    return (
    <React.Fragment>
      <Segment>
      <Form widths="equal" size="small">
        <Form.Field>
            <label>Start Date</label>
            <Form.Input name="startDate" onChange={this.onChangeText} placeholder='Start Date' />
        </Form.Field>
        <Form.Field>
            <label>Number of Days</label>
            <Form.Input name="numOfDays" onChange={this.onChangeText} placeholder='Number of Days' />
        </Form.Field>
        <Form.Field>
            <label>Country Code</label>
            <Form.Input name="countryCode" onChange={this.onChangeText} placeholder='Country Code' />
        </Form.Field>
      </Form>
      </ Segment>
    </ React.Fragment>
    )
  }
}
