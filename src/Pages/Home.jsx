import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"
import AppsIcon from "@mui/icons-material/Apps"
import { Avatar } from '@mui/material';
import Search from '../Components/Search';


const Home = () => {
  return (
    <div className="home">
        <div className="home_header">
            <div className="header_left">
                <Link to="/about">about</Link>
                <Link to="store">store</Link>


            </div>
            <div className="header_right">
            <Link to="/gmail">gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon />
            <Avatar />
        






            </div>

        </div>
        <div className="home_body">
            <img src="https://www.google.com/logos/2008/finos08.gif" alt="error" />
            <Search />

        </div>
    </div>
  )
}
export default Home
