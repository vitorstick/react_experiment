export interface ISchedule {
    dayOfMonth: number;
    dayOfWeek: number;
    description: string;
    endDate: string;
    endPoint: string;
    id: number;
    intervalType: string;
    isRetired: boolean;
    name: string;
    startDate: string;
    startPoint: string;
    tasksCount: number;
    timePeriod: number;
}
