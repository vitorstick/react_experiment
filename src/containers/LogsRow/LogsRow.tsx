import React, {ReactElement, useEffect, useState} from 'react';
import Log from '../../components/Log/Log';
import {ILog} from '../../da/logs.interface';
import {Status} from '../../da/status.enum';
import './styles.scss';

interface Props {
    logs: ILog[];
    status: Status;
}

const LogsRow: React.FC<Props> = (props) => {
    const [logs, setLogs] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        setLogs(props.logs);
    }, [props.logs]);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div className="logs-row">
            <div className="logs-row__header">{status}</div>
            <div>
                {logs?.map((log: ILog): ReactElement => {
                    return (
                        <div className="log__item" key={log.id}>
                            <Log log={log} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LogsRow;
