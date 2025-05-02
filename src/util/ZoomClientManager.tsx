import ZoomMtgEmbedded, {EmbeddedClient} from "@zoom/meetingsdk/embedded";

export class ZoomClientManager {
    static zoomClient: typeof EmbeddedClient | null = null;
    static hasJoined: boolean = false;
    static zoomSdkKey = import.meta.env.VITE_ZOOM_SDK_KEY;

    static initializeClient = async (navigate: Function) => {
        console.log("Initializing Zoom Client")
        ZoomClientManager.zoomClient = ZoomMtgEmbedded.createClient();
        await ZoomClientManager.zoomClient.init({
            zoomAppRoot: document.getElementById("meetingSDKElement")!,
            language: "en-US",
            debug: false,
        });

        ZoomClientManager.configureOnConnectionChangeEvents(navigate);
        ZoomClientManager.configureCloseCaptionEvents();
    }

    private static configureCloseCaptionEvents = () => {
        console.log("Configuring closed caption events")

        // CCs must be enabled by the host of the meeting AND the bot itself
        ZoomClientManager.zoomClient?.on("caption-message", (payload) => {
            console.log("Received caption message:", payload.text);
            // You can now process the caption message or display it in the UI
        });
    }

    private static configureOnConnectionChangeEvents = (navigate: Function) => {
        console.log("Configuring client connection change events")

        if (ZoomClientManager.zoomClient != null) {
            ZoomClientManager.zoomClient.on("connection-change", async (payload) => {
                console.log("🔄 Connection status changed:", payload);

                if (payload.state === "Connected") {
                    console.log("✅ Bot is in the meeting!");
                    await new Promise((resolve) => setTimeout(resolve, 5000));
                    await ZoomClientManager.zoomClient?.sendChat(
                        "👋 Hi everyone! I’m a meeting bot here to help monitor and assist."
                    );
                    console.log("✅ Chat message sent!");

                }

                if (payload.state === "Closed") {
                    console.log("🧹 Cleaning up Zoom client...");
                    ZoomClientManager.zoomClient?.leaveMeeting()
                    ZoomMtgEmbedded.destroyClient()
                    ZoomClientManager.hasJoined = false;
                    navigate("/");
                }

                // Not sure ATM why this is needed - it's calling out to the meeting after it ends for some reason
                if (payload.state === "Fail" && payload.errorCode === 3008) {
                    console.error("❌ The meeting has not started or has ended.");
                    ZoomClientManager.zoomClient?.leaveMeeting();
                    ZoomClientManager.zoomClient = null;
                    ZoomClientManager.hasJoined = false;
                    navigate("/");
                }
            });
        }
    }

    static joinMeeting = async (signature: string, meetingId: string) => {
        console.log("Bot is joining meeting")

        if (ZoomClientManager.zoomClient != null) {
            ZoomClientManager.hasJoined = true;
            const password = sessionStorage.getItem(`zoom_pwd_${meetingId}`) || ''

            await ZoomClientManager.zoomClient.join({
                signature,
                sdkKey: ZoomClientManager.zoomSdkKey,
                meetingNumber: meetingId,
                password,
                userName: "Evan's Meeting Bot",
            });
        }
    }
}
