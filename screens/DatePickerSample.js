import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'; // ←追記部分

const date = "2019-01-01";

class DatePickerSample extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: date }
    }

    render() {

        return (
            <DatePicker
                mode="date"
                date={new Date(this.state.date)}
                format="YYYY-MM-DD"
                confirmBtnText="OK"
                cancelBtnText="キャンセル"
                onDateChange={(date) => {
                    this.setState({date: date});
                }}
            />
        );
    }
}

export default DatePickerSample;