import {useEffect, useRef} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import ZoomMtgEmbedded, {EmbeddedClient} from "@zoom/meetingsdk/embedded";
import {ZoomMtg} from "@zoom/meetingsdk";
import {ZoomClientManager} from "../util/ZoomClientManager.tsx";

const Companion = () => {
    const { meetingId } = useParams();
    const navigate = useNavigate();

    const zoomClient = useRef<typeof EmbeddedClient | null>(null);
    const zoomCompanionAuthServiceUri = import.meta.env.VITE_ZOOM_COMPANION_AUTH_SERVICE_URI;
    const zoomSdkKey = import.meta.env.VITE_ZOOM_SDK_KEY;

    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    useEffect(() => {
        const password = sessionStorage.getItem(`zoom_pwd_${meetingId}`) || ''

        if (!meetingId || ZoomClientManager.hasJoined || zoomClient.current) return;

        ZoomClientManager.hasJoined = true;
        console.log("Joining Zoom meeting...");

        const joinMeeting = async () => {
            try {
                const { data } = await axios.get(
                    `${zoomCompanionAuthServiceUri}/api/auth-status`,
                    { withCredentials: true }
                );

                if (!data.authenticated) {
                    window.location.href = `${zoomCompanionAuthServiceUri}/api/login`;
                    return;
                }

                zoomClient.current = ZoomMtgEmbedded.createClient();
                await zoomClient.current.init({
                    zoomAppRoot: document.createElement("div"),
                    language: "en-US",
                    debug: false,
                });

                zoomClient.current.on("connection-change", async (payload) => {
                    console.log("🔄 Connection status changed:", payload);

                    if (payload.state === "Connected") {
                        console.log("✅ Bot is in the meeting!");
                        await new Promise((resolve) => setTimeout(resolve, 5000));
                        await zoomClient.current?.sendChat(
                            "👋 Hi everyone! I’m a meeting bot here to help monitor and assist."
                        );
                        console.log("✅ Chat message sent!");
                    }

                    if (payload.state === "Closed") {
                        console.log("🧹 Cleaning up Zoom client...");
                        zoomClient.current?.leaveMeeting()
                        zoomClient.current = null;
                        ZoomClientManager.hasJoined = false;
                        navigate("/");
                    }
                });

                const signature = await getMeetingSignature(Number(meetingId));

                await zoomClient.current.join({
                    signature,
                    sdkKey: zoomSdkKey,
                    meetingNumber: meetingId,
                    password,
                    userName: "Evan's Meeting Bot",
                });

                console.log("✅ Successfully joined the meeting headlessly!");
            } catch (err) {
                console.error("❌ Error joining meeting:", err);
            }
        };

        joinMeeting();
    }, [meetingId]);

    const getMeetingSignature = async (meetingId: number) => {
        try {
            const response = await axios.post(
                `${zoomCompanionAuthServiceUri}/api/generate-meeting-signature`,
                {
                    meetingId,
                    role: 0,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data.signature;
        } catch (err) {
            console.error("❌ Failed to get meeting signature", err);
        }
    };

    return (
        <p>hello</p>
    )
};

export default Companion;
