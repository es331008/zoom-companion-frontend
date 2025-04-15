import axios from "axios";
import {useEffect, useState} from "react";
import {Navigate} from "react-router";
import {Button, CircularProgress, Container, List, ListItem, ListItemText, Typography} from "@mui/material";
import {IMeeting} from "../interfaces/IMeeting.tsx";

const Home = () => {
    const [meetings, setMeetings] = useState<IMeeting[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/auth-status")
            .then((res) => {
                if (res.data.authenticated) {
                    axios
                        .get("http://localhost:5000/api/live-meetings")
                        .then((res) => setMeetings(res.data.meetings));
                } else {
                   window.location.href = "http://localhost:5000/api/login";
                }
            })
            .catch(() => {
                setMeetings(null)
                setError("Failed to load meetings. Please log in.");
            })
            .finally(() => setLoading(false));
    }, []);

    console.log(meetings)

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
                            <Button variant="contained" color="primary" href={meeting.join_url} target="_blank">
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
