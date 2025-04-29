import axios from "axios";
import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router";
import {Button, CircularProgress, Container, List, ListItem, ListItemText, Typography} from "@mui/material";
import {IMeeting} from "../interfaces/IMeeting.tsx";

const Home = () => {
    const [meetings, setMeetings] = useState<IMeeting[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const zoomCompanionAuthServiceUri = import.meta.env.VITE_ZOOM_COMPANION_AUTH_SERVICE_URI;
    const zoomCompanionApiServiceUri = import.meta.env.VITE_ZOOM_COMPANION_API_SERVICE_URI;

    useEffect(() => {
        axios
            .get(`${zoomCompanionAuthServiceUri}/api/auth-status`, { withCredentials: true })
            .then((res) => {
                if (res.data.authenticated) {
                    axios
                        .get(`${zoomCompanionApiServiceUri}/api/live-meetings`, { withCredentials: true })
                        .then((res) => setMeetings(res.data.meetings));
                } else {
                   window.location.href = `${zoomCompanionAuthServiceUri}/api/login`;
                }
            })
            .catch(() => {
                setMeetings(null)
                setError("Failed to load meetings. Please log in.");
            })
            .finally(() => setLoading(false));
    }, []);

    const navigateToMeeting = (join_url: string) => {
        const url = new URL(join_url)
        const meetingId = url.pathname.split('/').pop()
        const pwd = url.searchParams.get('pwd')

        if (pwd != null) {
            // Don't want to expose this in a url
            sessionStorage.setItem(`zoom_pwd_${meetingId}`, pwd)
        }

        navigate(`/companion/${meetingId}`);
    }

    return meetings ? (
        <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Active Zoom Meetings
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : meetings.length === 0 ? (
                <Typography>No active meetings found.</Typography>
            ) : (
                <List>
                    {meetings.map((meeting: IMeeting) => (
                        <ListItem key={meeting.id} divider>
                            <ListItemText
                                primary={meeting.topic}
                                secondary={`Meeting ID: ${meeting.id}`}
                            />
                            <Button variant="contained" color="primary" onClick={() => navigateToMeeting(meeting.join_url)}>
                                Request Companion
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    ) : (
        <Navigate to="/" replace />
    );
}

export default Home;
