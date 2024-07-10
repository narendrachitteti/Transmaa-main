import React from "react";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';

const TimePicker1 = ({ value, onChange }) => {
  return (
    <>
      <TimePicker
        onChange={onChange}
        value={value}
        amPmAriaLabel="Select AM/PM"
        format="h:mm a" // Set the format to 12-hour with AM/PM
        required
      />
    </>
  );
};

export default TimePicker1;
