export interface IMeeting {
    agenda: string;
    duration: number;
    created_at: string; // ISO 8601 format
    host_id: string;
    id: number;
    join_url: string;
    pmi: string;
    start_time: string; // ISO 8601 format (e.g., "2024-03-27T14:30:00Z")
    timezone: string;
    topic: string;
    type: string;
    uuid: string;

}
