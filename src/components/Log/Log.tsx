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
                <div>{props.log.serverName}</div>
            </div>
            <div className="log-detail__date log-detail__date--title">
                start
            </div>
            <div className="log-detail__date log-detail__date--date">
                {new Date(props.log.startTime).toLocaleDateString()}
            </div>
            <div className="log-detail__date log-detail__date--title">end</div>
            <div className="log-detail__date log-detail__date--date">
                {new Date(props.log.endTime).toLocaleDateString()}
            </div>
        </div>
    );
};

export default Log;
