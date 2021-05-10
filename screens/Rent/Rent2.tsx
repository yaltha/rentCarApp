import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-date-ranges";

const DatePickerRange = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [displayedDate, setDisplayedDate] = useState(moment())

    const setDates = (dates) =>{
        setStartDate()
    }

    return(
        <View style={styles.container}>
        <DateRangePicker
          onChange={setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
          <Text>Click me!</Text>
        </DateRangePicker>
      </View>
    )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };

  render() {
    const { startDate, endDate, displayedDate } = this.state;
    return (
      <View style={styles.container}>
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
          <Text>Click me!</Text>
        </DateRangePicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
});