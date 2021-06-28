import React, {Fragment, ReactElement, useEffect, useState} from 'react';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import {ISchedule} from '../../da/schedule.interface';
import './styles.scss';
import Logs from '../Logs/Logs';

const Schedules: React.FC = () => {
    const [items, setItems] = useState([]);
    const [logs, setLogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    const updateItem = (id: number, updatedItem: ISchedule) => {
        console.log('updateItem');
        setEditing(false);

        setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    };
    const selectItem = (schedule: ISchedule) => {
        fetch(`http://localhost:3000/scheduleLogs?scheduleId=${schedule.id}`)
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
        fetch('http://localhost:3000/schedules')
            .then((res) => {
                return res.json();
            })
            .then(
                (result: ISchedule[]) => {
                    setItems(result);
                },
                (error) => {
                    setError(error);
                },
            )
            .finally(() => setIsLoading(false));
    }, []);

    if (loading) {
        return <h2>Loading</h2>;
    }
    if (error) {
        return <h2>Error</h2>;
    }

    return (
        <div className="schedules">
            <div className="schedules__container">
                {items?.map((item: ISchedule): ReactElement => {
                    return (
                        <div className="schedules__item" key={item.id}>
                            {editing ? (
                                <Fragment>
                                    <div>Editing</div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <ScheduleItem
                                        schedule={item}
                                        onScheduleRetire={updateItem}
                                        onSelectSchedule={selectItem}
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
