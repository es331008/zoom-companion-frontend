import {Paper, Typography} from "@mui/material";
import {IMeetingChatMessage} from "../interfaces/IMeetingChatMessage.tsx";

interface MeetingChatMessageProps {
    chatMessage: IMeetingChatMessage;
}

const MeetingChatMessage = ({ chatMessage }: MeetingChatMessageProps) => {
    return (
        <Paper sx={{ backgroundColor: '#c3c3c3', padding: 2, marginBottom: 2, width: "75%" }}>
            <Typography variant="caption" sx={{ textAlign: 'left' }}>
                {chatMessage.sender}
            </Typography>
            <Typography variant="body1" sx={{ overflowY: 'auto', textAlign: 'left' }}>
                {chatMessage.message}
            </Typography>
        </Paper>
    );
}

export default MeetingChatMessage;