import {Box, Paper, Typography} from "@mui/material";
import MeetingChatMessage from "./MeetingChatMessage.tsx";
import {IMeetingChatMessage} from "../interfaces/IMeetingChatMessage.tsx";

interface MeetingChatHistoryProps {
    chatHistory: IMeetingChatMessage[];
}

const MeetingChatHistory = ({ chatHistory }: MeetingChatHistoryProps) => {
    return (
        <Paper sx={{ padding: 2, height: "100%" }} variant="outlined">
            <Typography variant="h6">Chat History</Typography>
            <Box sx={{ maxHeight: 300, overflowY: "auto", height: "100%"}}>
                {chatHistory.map((chatMessage, index) => (
                    <MeetingChatMessage key={index} chatMessage={chatMessage} />
                ))}
            </Box>
        </Paper>
    );
}

export default MeetingChatHistory;