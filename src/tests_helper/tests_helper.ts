import {ISchedule} from '../da/schedule.interface';
import {ILog} from '../da/logs.interface';
import {Status} from '../da/status.enum';

export class TestsMockHelper {
    static getSchedules(): ISchedule[] {
        return [
            {
                id: 19494389,
                name: 'Random Schedule Name (0.8305218495287672)',
                description: 'in dolore aute',
                isRetired: false,
                tasksCount: 9,
                startPoint: '2021-08-12T02:13:39.334Z',
                endPoint: '2021-11-10T02:12:56.326Z',
                dayOfWeek: 1,
                dayOfMonth: 5,
                startDate: '2021-07-03T07:07:18.368Z',
                endDate: '2021-02-05T01:15:54.280Z',
                timePeriod: 12,
                intervalType: 'Minute',
            },
            {
                id: 38792950,
                name: 'Random Schedule Name (0.24529949140144192)',
                description: 'sint ex Lorem Ut incididunt',
                isRetired: false,
                tasksCount: 2,
                startPoint: '2021-12-25T20:34:17.812Z',
                endPoint: '2021-12-13T07:55:34.773Z',
                dayOfWeek: 1,
                dayOfMonth: 24,
                startDate: '2021-09-07T13:27:46.254Z',
                endDate: '2021-02-02T08:05:15.483Z',
                timePeriod: 13,
            },
        ];
    }

    static getSchedule(): ISchedule {
        return this.getSchedules()[0];
    }

    static getLogs(): ILog[] {
        return [
            {
                id: 74130264,
                startTime: '2021-04-25T02:05:14.437Z',
                endTime: '2021-05-08T08:19:25.400Z',
                status: Status.Running,
                serverName: 'anim enim in id',
                scheduleId: 76728855,
            },
            {
                id: 46759301,
                startTime: '2021-06-03T10:39:40.111Z',
                endTime: '2021-06-07T03:09:15.518Z',
                status: Status.Completed,
                serverName: 'id velit adipisicing in',
                scheduleId: 76728855,
            },
        ];
    }

    static getLog(): ILog {
        return this.getLogs()[0];
    }
}
