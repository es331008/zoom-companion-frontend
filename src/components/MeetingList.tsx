import { List, Typography } from "@mui/material";
import MeetingListItem from "./MeetingListItem";
import {IMeeting} from "../interfaces/IMeeting.tsx";

interface MeetingListProps {
    title: string;
    meetings: IMeeting[];
}

const MeetingList = ({ title, meetings }: MeetingListProps) => {
    return (
        <div className="drawer-date-container">
            <Typography variant="subtitle2" className="drawer-date-header">
                {title}
            </Typography>
            <List>
                {meetings.map((meeting) => (
                    <MeetingListItem key={meeting.id} meeting={meeting} />
                ))}
            </List>
        </div>
    );
};

export default MeetingList;
