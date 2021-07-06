import React, {useEffect, useState} from 'react';
import {ISchedule} from '../../da/schedule.interface';
import './styles.scss';

interface Props {
    schedule: ISchedule;
    onScheduleRetire?: (isRetired: boolean) => void;
    onSelectSchedule?: (schedule: ISchedule) => void;
    onRemoveSchedule?: (schedule: ISchedule) => void;
}

const Schedule: React.FC<Props> = (props) => {
    const [schedule, setSchedule] = useState(null);

    useEffect(() => {
        setSchedule(props.schedule);
    }, [props.schedule]);

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
        <article
            className={`schedule-detail ${
                schedule?.selected ? 'schedule-detail--selected' : ''
            }`}
            data-testid="schedule-item"
            onClick={() => selectItem()}>
            <div className="schedule-detail__header">
                <button
                    className="schedule-detail__remove-button"
                    disabled={schedule?.isRetired}
                    data-testid="schedule-item-remove-item"
                    onClick={(e) => {
                        removeItem();
                        e.stopPropagation();
                    }}>
                    <div className="close_icon"></div>
                </button>
                <h4>{schedule?.name}</h4>
            </div>
            <div className="schedule-detail__header">
                {schedule?.description}
            </div>
            <div className="schedule-detail__footer">
                <button
                    className="schedule-detail__retire-button"
                    disabled={schedule?.isRetired}
                    data-testid="schedule-item-retire-item"
                    onClick={(e) => {
                        retireItem();
                        e.stopPropagation();
                    }}>
                    Retire
                </button>
            </div>
        </article>
    );
};

export default Schedule;
