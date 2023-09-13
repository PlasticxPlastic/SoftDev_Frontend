import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="container">
            <img className="navheader" src="/image/frames.png"></img>

           <div className="flex">
                <div className="one">
                    <div className="content-1">
                        <Link to="/contact">  {/* ใส่ page ที่จะไป */}
                            <img className="logobtn_1" src="/image/frame_1.png"></img>
                            <img className="iconrov" src="/image/imagerov.png"></img>
                        </Link>
                    </div>
                </div>
                <div className="two">
                    <input
                        className="search-box"
                        type="search"
                            placeholder="  🔍 ค้นหา เกม,รูปแบบ,ไอเทม,ผู้ใช้   "
                        onChange={(event) => {
                            console.log(event.target.value);
                        }}
                    />
                </div>
                <div className="tree">
                 <div className="end">
                    <div className="content-2">
                        <Link to="/">   {/* ใส่ page ที่จะไป */}
                            <img className="logobtn" src="/image/frame.png"></img>
                            <img className="iconno" src="/image/Notifications.png"></img>
                        </Link>
                    </div>
                    <div className="content-3">
                        <Link to="/">   {/* ใส่ page ที่จะไป */}
                            <img className="logobtn" src="/image/frame.png"></img>
                            <img className="iconno" src="/image/image3.png"></img>
                        </Link>
                    </div>
                    <div className="content-4">
                        <Link to="/">   {/* ใส่ page ที่จะไป */}
                            <img className="logobtn" src="/image/frame.png"></img>
                            <img className="iconno" src="/image/image2.png"></img>
                        </Link>
                    </div>
                    <div className="content-5">
                        <Link to="/">   {/* ใส่ page ที่จะไป */}
                            <img className="logobtn_1" src="/image/frame_1.png"></img>
                            <img className="iconnoo" src="/image/login.png"></img>
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