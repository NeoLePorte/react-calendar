import React, { Component } from 'react'
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'
import dateFns from "date-fns";

export default class Calendar extends Component {

    // sorts colors for calendar days
    dayColors(day, endDate) {
        if(!dateFns.isWithinRange(day, this.props.startDate, endDate)) {
            return "grey"
        } else if (dateFns.isWeekend(day)) {
            return "yellow"
        } else {
            return "green"
        }
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
      const headerDateFormat = "MMMM YYYY";
      let headerKey = 0;
      let days = [];
      let day = startDate;
      let formattedDate = "";
    
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
        // This snippet adds headers to the calendar between months but pushes the calendar days around.
        if (dateFns.isFirstDayOfMonth(day)) {
            days.push(
                <React.Fragment key={headerKey}>
                <Grid>
                    <Divider  horizontal>
                        <Header textAlign="center">{dateFns.format(day, headerDateFormat)}</Header>
                    </Divider>
                </Grid>
                </React.Fragment>
            )
            headerKey++
        }
        formattedDate = dateFns.format(day, dayDateFormat);
        // pushes calendar days to calendar
            days.push(
                <Grid.Column key={day}>
                    <Segment color={this.dayColors(day, endDate)} inverted>
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
    </Grid>
    <Grid divided columns={7}  celled >
      {this.renderCells()}
    </Grid>
    </React.Fragment>
    )
  }
}
