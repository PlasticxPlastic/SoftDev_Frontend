import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const navStyles = {
  container: {
    width: "100%",
    margin: 0,
    padding: 0,
    height: "90px",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logobtn: {
    display: "flex",
    flexDirection: "row",
    width: "60px",
    height: "60px",
    justifyContent: "space-around",
    cursor: "pointer",
  },
  logobtn_1: {
    display: "flex",
    flexDirection: "row",
    width: "160px",
    height: "60px",
    cursor: "pointer",
    justifyContent: "space-around",
  },
  navheader: {
    width: "100%",
    height: "90px",
  },
  one: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    paddingLeft: "50px",
    marginTop: "-80px",
  },
  two: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "-100px",
  },
  tree: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    marginTop: "-80px",
    paddingRight: "50px",
  },
  end: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
  iconno: {
    position: "relative",
    width: "40px",
    top: "-55px",
    left: "10px",
    cursor: "pointer",
  },
  iconrov: {
    position: "relative",
    width: "55px",
    top: "-55px",
    left: "50px",
    cursor: "pointer",
  },
  iconnoo: {
    position: "relative",
    width: "80px",
    top: "-40px",
    left: "40px",
    cursor: "pointer",
  },
  iconno2: {
    position: "relative",
    width: "40px",
    top: "-55px",
    left: "-0.5px",
    cursor: "pointer",
  },
  iconnoo2: {
    position: "relative",
    width: "80px",
    top: "-40px",
    left: "5px",
    cursor: "pointer",
  },
  searchBox: {
    position: "relative",
    marginTop: "-30px",
    width: "600px",
    height: "50px",
    fontSize: "20px",
  },
  toggleBtn: {
    cursor: "pointer",
    position: "relative",
    display: "none",
    fontSize: "1.5rem",
    marginTop: "-130px",
    left: "-50px",
  },
  dropdown: {
    display: "none",
    position: "absolute",
    right: "2rem",
    top: "100px",
    width: "300px",
    background: "gray",
    backdropFilter: "blur(15px)",
    overflow: "hidden",
    transition: "height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  dropdownLi: {
    padding: "0.7rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  open: {
    height: "240px",
  },
};

const Navbar = () => {
  return (
    <>
      <div style={navStyles.container}>
        <img className="navheader" src="/image/frames.png" alt="Header" />
        <div style={navStyles.flex}>
          <div style={navStyles.one}>
            <div className="content-1">
              <Link to="/">
                <img
                  style={navStyles.logobtn_1}
                  src="/image/frame_1.png"
                  alt="Logo 1"
                />
                <img
                  style={navStyles.iconrov}
                  src="/image/imagerov.png"
                  alt="Icon"
                />
              </Link>
            </div>
          </div>
          <div style={navStyles.two}>
            <input
              style={navStyles.searchBox}
              type="search"
              placeholder="  🔍 ค้นหา เกม, รูปแบบ, ไอเทม, ผู้ใช้"
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />
          </div>
          <div style={navStyles.tree}>
            <div style={navStyles.end}>
              <div className="content-2">
                <Link to="/">
                  <img style={navStyles.logobtn} src="/image/frame.png" alt="Logo 2" />
                  <img style={navStyles.iconno} src="/image/Notifications.png" alt="Icon" />
                </Link>
              </div>
              <div className="content-3">
                <Link to="/">
                  <img style={navStyles.logobtn} src="/image/frame.png" alt="Logo 3" />
                  <img style={navStyles.iconno} src="/image/image3.png" alt="Icon" />
                </Link>
              </div>
              <div className="content-4">
                <Link to="/signup">
                  <img style={navStyles.logobtn} src="/image/frame.png" alt="Logo 4" />
                  <img style={navStyles.iconno} src="/image/image2.png" alt="Icon" />
                </Link>
              </div>
              <div className="content-5">
                <Link to="/signin">
                  <img style={navStyles.logobtn_1} src="/image/frame_1.png" alt="Logo 5" />
                  <img style={navStyles.iconnoo} src="/image/login.png" alt="Icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
