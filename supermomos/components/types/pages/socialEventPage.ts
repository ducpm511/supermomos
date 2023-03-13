export type EventType = {
    title: string;
    startAt: string;
    venue: string;
    capacity: number;
    price?: number;
    description: string;
    banner: string;
    tags: Array<string>;
    isManualApprove?: boolean;
    privacy: string;
}