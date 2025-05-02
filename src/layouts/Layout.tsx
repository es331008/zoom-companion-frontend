import {Drawer, IconButton, List, ListItemButton, ListItemText, Tooltip, Typography} from "@mui/material";
import {Outlet} from "react-router";
import './Layout.css';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {mockMeetingsToday, mockMeetingsYesterday} from "../data/MockMeetingData.tsx";

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
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
            >
                <Typography variant="h6" className="drawer-header">
                    Past Meetings
                </Typography>
                <div className="drawer-date-container">
                    <Typography variant="subtitle2" className="drawer-date-header">
                        Today
                    </Typography>
                    <List>
                        {mockMeetingsToday.map((meeting) => {
                            const date = new Date(meeting.start_time);
                            const formattedDate = date.toLocaleString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            });
                            const formattedTime = date.toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                            });

                            return (
                                <Tooltip title={meeting.topic} arrow>
                                    <ListItemButton key={meeting.id}>
                                        <ListItemText
                                            primary={
                                            <Typography
                                                variant="body1"
                                                noWrap
                                                sx={{
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    minHeight: "24px",
                                                }}
                                            >
                                                {meeting.topic}
                                            </Typography>}
                                            secondary={
                                                <Typography variant="body2" color="text.secondary">
                                                    {`${formattedDate} @ ${formattedTime}`}
                                                </Typography>
                                            }

                                        />
                                    </ListItemButton>
                                </Tooltip>
                            );
                        })}
                    </List>
                </div>

                <div className="drawer-date-container">
                    <Typography variant="subtitle2" className="drawer-date-header">
                        Yesterday
                    </Typography>
                    <List>
                        {mockMeetingsYesterday.map((meeting) => {
                            const date = new Date(meeting.start_time);
                            const formattedDate = date.toLocaleString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            });
                            const formattedTime = date.toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                            });

                            return (
                                <Tooltip title={meeting.topic} arrow>
                                    <ListItemButton key={meeting.id}>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    variant="body1"
                                                    noWrap
                                                    sx={{
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        minHeight: "24px",
                                                    }}
                                                >
                                                    {meeting.topic}
                                                </Typography>}
                                            secondary={
                                                <Typography variant="body2" color="text.secondary">
                                                    {`${formattedDate} @ ${formattedTime}`}
                                                </Typography>
                                            }

                                        />
                                    </ListItemButton>
                                </Tooltip>
                            );
                        })}
                    </List>
                </div>
            </Drawer>
            <Outlet />
        </div>
    );
}

export default Layout;