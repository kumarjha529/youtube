import React, { useEffect, useState } from "react";
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header({ onSubmit }) {
    const [searchInput, setSearchInput] = useState('');
    useEffect(()=>{
        onSubmit(searchInput)
    },[])

    const getInput = e => {
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchInput);
        }
    }
    const onsearch = (event) => {
        onSubmit(searchInput);
    }

    return (
        <div className="header">

            <div className="header_left">
                <MenuIcon />
            </div>

            <div className="header_input">
                <input onChange={getInput} value={searchInput} onKeyPress={onKeyPress} placeholder="Search" type="text" />
                <span onClick={onsearch}> <SearchIcon className="header_inputButton" /></span>
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
            </div>


        </div>
    );
}
export default Header;