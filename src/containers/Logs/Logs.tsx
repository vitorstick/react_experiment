import React, {Fragment, ReactElement, useEffect, useState} from 'react';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import {ISchedule} from '../../da/schedule.interface';
import './styles.scss';

const Logs: React.FC = () => {
    const [logs, setLogs] = useState([]);

    return <div className="logs__container"></div>;
};

export default Logs;
