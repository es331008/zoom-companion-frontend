import {IMeeting} from "../interfaces/IMeeting.tsx";
import {useLocation, useNavigate} from "react-router";
import {ListItemButton, ListItemText, Tooltip, Typography} from "@mui/material";

interface MeetingListItemProps {
    meeting: IMeeting;
}

const MeetingListItem = ({ meeting }: MeetingListItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isSelected = location.pathname === `/meeting/${meeting.pmi}`;

    const date = new Date(meeting.start_time);
    const formattedDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <Tooltip title={meeting.topic} arrow placement="right">
            <ListItemButton
                selected={isSelected}
                onClick={() => navigate(`/meeting/${meeting.pmi}`)}
            >
                <ListItemText
                    primary={
                        <Typography
                            variant="body1"
                            noWrap
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                minHeight: "24px",
                            }}
                        >
                            {meeting.topic}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body2" color="text.secondary">
                            {`${formattedDate} @ ${formattedTime}`}
                        </Typography>
                    }
                />
            </ListItemButton>
        </Tooltip>
    );
};

export default MeetingListItem;
