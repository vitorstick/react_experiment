import {ISchedule} from '../da/schedule.interface';

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
}
