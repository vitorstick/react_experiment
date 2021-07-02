import React from 'react';
import {ISchedule} from '../../da/schedule.interface';
import Schedule from '../../components/Schedule/Schedule';

interface Props {
    schedule: ISchedule;
    onScheduleRetire?: (id: number, updatedUser: ISchedule) => void;
    onSelectSchedule?: (schedule: ISchedule) => void;
    onRemoveSchedule?: (id: number, updatedUser: ISchedule) => void;
}

const ScheduleItem: React.FC<Props> = (props) => {
    const retireItem = (retired: boolean): void => {
        const updatedSchedule: ISchedule = {
            ...props.schedule,
            isRetired: retired,
        };
        props.onScheduleRetire(updatedSchedule.id, updatedSchedule);
    };

    const removeItem = (schedule: ISchedule): void => {
        console.log('remove item :: ');
        props.onRemoveSchedule(schedule.id, schedule);
    };

    const selectItem = (schedule: ISchedule): void => {
        props.onSelectSchedule(schedule);
    };

    return (
        <Schedule
            schedule={props.schedule}
            onScheduleRetire={retireItem}
            onSelectSchedule={selectItem}
            onRemoveSchedule={removeItem}
        />
    );
};

export default ScheduleItem;
