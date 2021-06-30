import React from 'react';
import {ISchedule} from '../../da/schedule.interface';
import './styles.scss';

interface Props {
    schedule: ISchedule;
    onScheduleRetire: (isRetired: boolean) => void;
    onSelectSchedule: (schedule: ISchedule) => void;
    onRemoveSchedule: (schedule: ISchedule) => void;
}

const Schedule: React.FC<Props> = (props) => {
    const retireItem = (): void => {
        props.onScheduleRetire(true);
    };

    const removeItem = (): void => {
        props.onRemoveSchedule(props.schedule);
    };

    const selectItem = (): void => {
        props.onSelectSchedule(props.schedule);
    };

    return (
        <div className="schedule-detail" onClick={() => selectItem()}>
            <div className="schedule-detail__header">
                <button
                    className="schedule-detail__retire-button"
                    disabled={props.schedule.isRetired}
                    onClick={() => removeItem()}>
                    x
                </button>
                <h4>{props.schedule.name}</h4>
            </div>
            <div className="schedule-detail__header">
                {props.schedule.description}
            </div>
            <div className="schedule-detail__footer">
                <button
                    className="schedule-detail__retire-button"
                    disabled={props.schedule.isRetired}
                    onClick={() => retireItem()}>
                    Retire
                </button>
            </div>
        </div>
    );
};

export default Schedule;
