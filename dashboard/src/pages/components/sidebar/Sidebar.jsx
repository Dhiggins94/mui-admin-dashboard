import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">MyAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineIcon />
            <span>Users</span>
          </li>{" "}
          <li>
            <LocalConvenienceStoreIcon />
            <span>Products</span>
          </li>
          <li>
            <ListAltIcon />
            <span>Orders</span>
          </li>
          <li>
            <DirectionsCarFilledIcon />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartIcon />
            <span>System Health</span>
          </li>
          <li>
            <SummarizeIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"> color options</div>
    </div>
  );
}
