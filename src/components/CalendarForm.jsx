import React, { Component } from 'react'
import {Form, Segment} from 'semantic-ui-react'
export default class CalendarForm extends Component {

  render() {
    return (
    <React.Fragment>
      <Segment>
      <Form widths="equal" size="small">
        <Form.Field>
            <label>Start Date</label>
            <Form.Input name="startDate"  placeholder='Start Date' />
        </Form.Field>
        <Form.Field>
            <label>Number of Days</label>
            <Form.Input name="numOfDays"  placeholder='Number of Days' />
        </Form.Field>
        <Form.Field>
            <label>Country Code</label>
            <Form.Input name="countryCode" placeholder='Country Code' />
        </Form.Field>
      </Form>
      </ Segment>
    </ React.Fragment>
    )
  }
}
