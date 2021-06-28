import React, {useEffect, useState} from 'react';
import {ISchedule} from '../../da/schedule.interface';
import Schedule from '../../components/Schedule/Schedule';

interface Props {
    schedule: ISchedule;
    onScheduleRetire: (id: number, updatedUser: ISchedule) => void;
    onSelectSchedule: (schedule: ISchedule) => void;
}

const ScheduleItem: React.FC<Props> = (props) => {
    const retireItem = (retired: boolean): void => {
        const updatedSchedule: ISchedule = {
            ...props.schedule,
            isRetired: retired,
        };
        props.onScheduleRetire(updatedSchedule.id, updatedSchedule);
    };

    const selectItem = (schedule: ISchedule): void => {
        props.onSelectSchedule(schedule);
    };

    return (
        <Schedule
            schedule={props.schedule}
            onScheduleRetire={retireItem}
            onSelectSchedule={selectItem}
        />
    );
};

export default ScheduleItem;
