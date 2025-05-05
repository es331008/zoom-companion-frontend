import {Box, Button, Drawer, Fab, Typography} from "@mui/material";
import {Outlet, useNavigate} from "react-router";
import './Layout.css';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {mockMeetingsToday, mockMeetingsYesterday} from "../data/MockMeetingData.tsx";
import MeetingList from "../components/MeetingList.tsx";

const drawerWidth = 240;

const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDrawer = (newOpen: boolean) => () => {
        setIsDrawerOpen(newOpen);
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                padding: 3,
                boxSizing: 'border-box',
                gap: 3,
                overflow: 'hidden',
            }}
        >
            <Fab onClick={toggleDrawer(true)}>
                <MenuIcon />
            </Fab>
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
                <Button
                    sx={{ marginTop: 2 }}
                    onClick={() => navigate(`/home`)}
                    startIcon={<HomeIcon />}
                >
                    Home
                </Button>
                <Typography variant="h6" className="drawer-header">
                    Past Meetings
                </Typography>
                <MeetingList title="Today" meetings={mockMeetingsToday} />
                <MeetingList title="Yesterday" meetings={mockMeetingsYesterday} />
            </Drawer>
            <Outlet />
        </Box>
    );
}

export default Layout;