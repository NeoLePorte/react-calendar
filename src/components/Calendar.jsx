import React, { Component } from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
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
      //renders calendar days in cells
      renderCells() {
        const startDate = dateFns.startOfWeek(this.props.startDate);
        const endDate = dateFns.addDays(this.props.startDate, this.props.numOfDays);
        const dayDateFormat = "D";
        let days = [];
        let day = startDate;
        let formattedDate = "";
        
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dayDateFormat);
            // pushes calendar days to calendar
                days.push(
                    <Grid.Column key={day}>
                        <Segment>
                            {formattedDate}
                        </Segment>
                    </Grid.Column>
                    )
            day = dateFns.addDays(day, 1);
            }
        }
        return (
        <Grid.Row key={day}>
          {days}
        </Grid.Row>
        )
    }
    render() {
        const headerDateFormat = "MMMM YYYY";
        return (
        <React.Fragment>
        <Grid columns={7} padded celled textAlign="center">
        <Header 
        textAlign="center" 
        style={{marginTop: '1.5em'}}
        >
        {dateFns.format(this.props.startDate, headerDateFormat)}
        </Header>
          {this.renderDays()}
          {this.renderCells()}
        </Grid>
        </React.Fragment>
        )
      }
}
