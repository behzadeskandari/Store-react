import React, { useState } from 'react';
import moment from 'moment';
import Calendar from './calender/index';
import './calender/styles';

export default function () {
    const [selectedDate, setSelectedDate] = useState(moment());
    return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}
