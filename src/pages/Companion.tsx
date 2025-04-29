import {Container} from "@mui/material";
import {useParams} from "react-router";
import {useEffect, useRef} from "react";
import axios from "axios";
import {EmbeddedClient, ZoomMtgEmbedded} from "@zoom/meetingsdk/embedded";

const Companion = () => {
    let { meetingId } = useParams();
    const zoomClient = useRef<typeof EmbeddedClient | null>(null);
    const zoomCompanionAuthServiceUri = import.meta.env.VITE_ZOOM_COMPANION_AUTH_SERVICE_URI;

    useEffect(() => {
        axios
            .get(`${zoomCompanionAuthServiceUri}/api/auth-status`)
            .then((res) => {
                if (res.data.authenticated) {
                    // Dont really need to be authenticated
                    // This should all be pushed to the backend
                    // TODO: Init the client
                    if (meetingId) {
                        getMeetingSignature(Number(meetingId))
                            .then((meetingSignature) => {
                                requestMeetingCompanion(meetingSignature);
                            })
                    }
                } else {
                    // TODO: Kick back to /home
                    window.location.href = `${zoomCompanionAuthServiceUri}/api/login`;
                }
            })
            .catch(() => {
            })
            .finally();
    }, []);

    const getMeetingSignature = async (meetingId: number) => {
        console.log("Attempting to get meeting signature for meetingId: " + meetingId)
        try {
            const response = await axios.post(`${zoomCompanionAuthServiceUri}/api/generate-meeting-signature`, {
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

    const requestMeetingCompanion = async (meetingSignature: string) => {
        try {
            zoomClient.current = ZoomMtgEmbedded.createClient();

            const zoomElement = document.getElementById('meetingSDKElement') || undefined
            await zoomClient.current.init({
                zoomAppRoot: zoomElement,
                language: 'en-US',
                debug: false,
            });

            zoomClient.current.on('connection-change', async (payload) => {
                console.log('🔄 Connection status changed:', payload);

                if (payload.state === 'Connected') {
                    console.log('✅ Bot is in the meeting! Waiting for chat module...');

                    try {
                        // Wait to ensure modules are ready
                        await new Promise((resolve) => setTimeout(resolve, 5000));

                        if (zoomClient.current != null)
                            await zoomClient.current.sendChat('👋 Hi everyone! I’m a meeting bot here to help monitor and assist with this session. I will do my best to provide proactive advice or respond to any questions! Let me know if you need anything by tagging me in the chat along with your message!');
                        console.log('✅ Chat message sent!');
                    } catch (err) {
                        console.error('❌ Failed to send chat:', err);
                    }
                }

                if (payload.state === 'Closed') {
                    console.log('❌ Destroying Zoom client');
                    ZoomMtgEmbedded.destroyClient();
                }
            });

            if (meetingId) {
                await zoomClient.current.join({
                    signature: meetingSignature,
                    sdkKey: 'bPZeS2oT1m64pNHnDlzXg',
                    meetingNumber: meetingId,
                    password: '220464',
                    userName: "Evan's Meeting Bot",
                    userEmail: '',
                    tk: '',
                    zak: '',
                })
                    .then(() => {
                        console.log('Joining...');
                    })
                    .catch((err) => {
                        console.error('Join error:', err);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
            <div id="meetingSDKElement">
                {/* Zoom Meeting SDK Component View Rendered Here */}
                {meetingId}
            </div>
        </Container>
    );
}

export default Companion;
