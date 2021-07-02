import React, {Fragment, ReactElement, useEffect, useState} from 'react';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import {ISchedule} from '../../da/schedule.interface';
import {CONFIG} from '../../config/config';
import './styles.scss';
import Logs from '../Logs/Logs';

const Schedules: React.FC = () => {
    const [items, setItems] = useState([]);
    const [logs, setLogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [removing, setRemoving] = useState(false);

    const updateItem = (id: number, updatedItem: ISchedule) => {
        setEditing(true);

        setItems(items.map((item) => (item.id === id ? updatedItem : item)));
        setEditing(false);
    };

    const removeItem = (id: number, removedItem: ISchedule) => {
        setRemoving(true);

        setItems(items.filter((item) => item.id !== id));
        setRemoving(false);
    };

    const selectItem = (schedule: ISchedule) => {
        fetch(`${CONFIG.URL.SCHEDULE_LOGS}?scheduleId=${schedule.id}`)
            .then((res) => {
                return res.json();
            })
            .then(
                (result: ISchedule[]) => {
                    console.log('logs :: ', result);
                    setLogs(result);
                },
                (error) => {
                    setError(error);
                },
            )
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetch(`${CONFIG.URL.SCHEDULES}`)
            .then((res) => {
                return res.json();
            })
            .then(
                (result: ISchedule[]) => {
                    setItems(result);
                },
                (error) => {
                    console.log('error :: ', error);
                    setError(error);
                },
            )
            .finally(() => setIsLoading(false));
    }, []);

    if (error) {
        return <h2>Error</h2>;
    }

    return (
        <div className="schedules">
            <div className="schedules__container">
                {items?.map((item: ISchedule): ReactElement => {
                    return (
                        <div className="schedules__item" key={item.id}>
                            {editing || removing || loading ? (
                                <Fragment>
                                    <div className="schedules__loading">
                                        Loading
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <ScheduleItem
                                        schedule={item}
                                        onScheduleRetire={updateItem}
                                        onSelectSchedule={selectItem}
                                        onRemoveSchedule={removeItem}
                                    />
                                </Fragment>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="logs__container">
                <Logs logs={logs} />
            </div>
        </div>
    );
};

export default Schedules;
