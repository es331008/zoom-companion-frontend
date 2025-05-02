import {Drawer, IconButton, Typography} from "@mui/material";
import {Outlet} from "react-router";
import './Layout.css';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {mockMeetingsToday, mockMeetingsYesterday} from "../data/MockMeetingData.tsx";
import MeetingList from "../components/MeetingList.tsx";

const drawerWidth = 240;

const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setIsDrawerOpen(newOpen);
    };

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                anchor="left"
            >
                <Typography variant="h6" className="drawer-header">
                    Past Meetings
                </Typography>
                <MeetingList title="Today" meetings={mockMeetingsToday} />
                <MeetingList title="Yesterday" meetings={mockMeetingsYesterday} />
            </Drawer>
            <Outlet />
        </div>
    );
}

export default Layout;