import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import dateFns from "date-fns";

export default class Calendar extends Component {
    constructor(props) {
    super(props)
    this.state = {
        currentMonth: new Date(),
        headerDate: new Date(),
    };
}
    //renders weekdays at top of calendar
    renderDays() {
        const dateFormat = "dddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.props.startDate);

        for (let i = 0; i < 7; i++) {
          days.push(
            <Grid.Column key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </Grid.Column>
          );
        }
        return(
        <React.Fragment>
        <Grid.Row>{days}</Grid.Row>
        </React.Fragment>
        );
      }
    render() {
        return (
        <React.Fragment>
        <Grid columns={7} padded celled textAlign="center">
          {this.renderDays()}
        </Grid>
        </React.Fragment>
        )
      }
}
