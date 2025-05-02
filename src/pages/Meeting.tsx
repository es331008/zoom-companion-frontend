import {CircularProgress, Container, Typography} from "@mui/material";
import {Navigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {IMeeting} from "../interfaces/IMeeting.tsx";
import {mockMeetingsToday, mockMeetingsYesterday} from "../data/MockMeetingData.tsx";

const Meeting = () => {
    let { meetingPmi } = useParams();
    const [loading, setLoading] = useState(true);
    const [meetingData, setMeetingData] = useState<IMeeting | null>(null);

    useEffect(() => {
        if (!meetingPmi) return;

        setLoading(true)

        const allMeetings = [...mockMeetingsToday, ...mockMeetingsYesterday];
        const found = allMeetings.find((m) => m.pmi === meetingPmi);
        setMeetingData(found ?? null);

        setLoading(false);
    }, [meetingPmi]);

    return meetingPmi ? (
        <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Meeting Data
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : meetingData === null ? (
                <Typography>No meeting data found.</Typography>
            ) : (
                <Typography variant="h4" gutterBottom>
                    {meetingData.join_url}
                </Typography>
            )}
        </Container>
    ) : (
        <Navigate to="/" replace />
    );
}

export default Meeting;
