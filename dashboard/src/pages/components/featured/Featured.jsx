import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Sales made Today</p>
        <p className="amount">$420.00</p>
        <p className="desc">
          Previous Transaction processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target </div>
            <div className="itemResult negative">
              <ArrowDownwardIcon fontSize="small" />
              <div className="resultAmount">$12.400</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week </div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small" />
              <div className="resultAmount">$12.400</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month </div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small" />
              <div className="resultAmount">$12.400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
