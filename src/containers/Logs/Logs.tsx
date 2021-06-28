import React, {ReactElement, useEffect, useState} from 'react';
import LogsRow from '../LogsRow/LogsRow';
import {ILog} from '../../da/logs.interface';
import {Status} from '../../da/status.enum';
import './styles.scss';

interface Props {
    logs: ILog[];
}

const Logs: React.FC<Props> = (props) => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        setLogs(props.logs);
    }, [props.logs]);

    return (
        <div className="logs">
            {Object.keys(Status).map((key): ReactElement => {
                return (
                    <div className="logs__headers-item" key={Status[key]}>
                        <LogsRow
                            status={Status[key]}
                            logs={logs.filter(
                                (log: ILog) => log.status === Status[key],
                            )}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Logs;
