import axios from "axios";
import {useEffect, useState} from "react";
import {Navigate} from "react-router";
import {Button, CircularProgress, Container, List, ListItem, ListItemText, Typography} from "@mui/material";
import {IMeeting} from "../interfaces/IMeeting.tsx";

const Home = () => {
    const [meetings, setMeetings] = useState<IMeeting[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://zoom-companion-auth-service-a9fcejcyemewg7db.canadacentral-01.azurewebsites.net/api/auth-status", { withCredentials: true })
            .then((res) => {
                if (res.data.authenticated) {
                    axios
                        .get("http://localhost:5001/api/live-meetings", { withCredentials: true })
                        .then((res) => setMeetings(res.data.meetings));
                } else {
                   window.location.href = "https://zoom-companion-auth-service-a9fcejcyemewg7db.canadacentral-01.azurewebsites.net/api/login";
                }
            })
            .catch(() => {
                setMeetings(null)
                setError("Failed to load meetings. Please log in.");
            })
            .finally(() => setLoading(false));
    }, []);

    // const navigateToMeeting = (meetingId: number) => {
    //     navigate(`/companion/${meetingId}`)
    // }

    const joinMeeting = async (meetingId: number) => {
        console.log("Attempting to join meeting: " + meetingId)
        try {
            const response = await axios.post("http://localhost:5002/api/join_meeting", {
                meetingId: meetingId,
                role: 0
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return response.data.signature
        } catch (e) {
            console.log(e);
        }
    };

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
                            <Button variant="contained" color="primary" onClick={() => joinMeeting(meeting.id)}>
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
