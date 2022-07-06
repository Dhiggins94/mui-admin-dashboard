import React from "react";
import "./single.scss";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Chart from "../components/chart/Chart";
import List from "../components/table/Table"
export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Infomation</h1>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1621701582507-4e580f0c84f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt=""
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">Vergil Hawkins</h1>
                <div className="detailItem">
                  <span className="itemkey">Email:</span>
                  <span className="itemValue"> vhawkins@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemValue"> +1 646 988 5436</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address:</span>
                  <span className="itemValue"> 4765 Union Avenue</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country:</span>
                  <span className="itemValue"> USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"> Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}
