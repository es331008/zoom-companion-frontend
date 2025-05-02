import {Paper, Typography} from "@mui/material";

interface MeetingSummaryProps {
    meetingSummary: string;
}

const MeetingSummary = ({ meetingSummary }: MeetingSummaryProps) => {
    return (
        <Paper sx={{ padding: 2 }} variant="outlined">
            <Typography variant="h6">Meeting Summary</Typography>
            <Typography variant="body1" sx={{ overflowY: 'auto', textAlign: 'left' }}>
                {meetingSummary}
            </Typography>
        </Paper>
    );
}

export default MeetingSummary;