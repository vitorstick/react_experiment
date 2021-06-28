import {Status} from './status.enum';

export interface ILog {
    endTime: string;
    id: number;
    scheduleId: number;
    serverName: string;
    startTime: string;
    status: Status;
}
