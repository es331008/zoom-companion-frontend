import "./App.css";
import {Navigate, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();

function App() {
  // const authEndpoint = "http://localhost:4000"; // http://localhost:4000
  // const sdkKey = "bVMiFciBRdYj3_0jJsTMQ";
  // const meetingNumber = "77227742313";
  // const passWord = "rGV4ds";
  // const role = 0;
  // const userName = "React";
  // const userEmail = "";
  // const registrantToken = "";
  // const zakToken = "";
  // const leaveUrl = "http://localhost:5173";
  //
  // const getSignature = async () => {
  //   try {
  //     const req = await fetch(authEndpoint, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         meetingNumber: meetingNumber,
  //         role: role,
  //       }),
  //     });
  //     const res = await req.json()
  //     const signature = res.signature as string;
  //     startMeeting(signature)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  //
  // function startMeeting(signature: string) {
  //   document.getElementById("zmmtg-root")!.style.display = "block";
  //
  //   ZoomMtg.init({
  //     leaveUrl: leaveUrl,
  //     patchJsMedia: true,
  //     leaveOnPageUnload: true,
  //     success: (success: unknown) => {
  //       console.log(success);
  //       // can this be async?
  //       ZoomMtg.join({
  //         signature: signature,
  //         sdkKey: sdkKey,
  //         meetingNumber: meetingNumber,
  //         passWord: passWord,
  //         userName: userName,
  //         userEmail: userEmail,
  //         tk: registrantToken,
  //         zak: zakToken,
  //         success: (success: unknown) => {
  //           console.log(success);
  //         },
  //         error: (error: unknown) => {
  //           console.log(error);
  //         },
  //       });
  //     },
  //     error: (error: unknown) => {
  //       console.log(error);
  //     },
  //   });
  // }

  return (
    // <div className="App">
    //   <main>
    //     <h1>Zoom Meeting SDK Sample React</h1>
    //     <button onClick={getSignature}>Join Meeting</button>
    //   </main>
    // </div>
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
