import React from 'react';
import {ILog} from '../../da/logs.interface';
import './styles.scss';

interface Props {
    log: ILog;
}

const Log: React.FC<Props> = (props) => {
    return (
        <div className="log-detail">
            <div className="log-detail__header">
                <h4>{props.log.serverName}</h4>
            </div>
        </div>
    );
};

export default Log;
